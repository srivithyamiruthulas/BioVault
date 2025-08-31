import { InvalidMultihashError, InvalidParametersError, setMaxListeners, start, stop } from '@libp2p/interface';
import { anySignal } from 'any-signal';
import { IdentityBlockstore } from 'blockstore-core/identity';
import filter from 'it-filter';
import forEach from 'it-foreach';
import { CustomProgressEvent } from 'progress-events';
import { equals as uint8ArrayEquals } from 'uint8arrays/equals';
import { isPromise } from './is-promise.js';
class Storage {
    child;
    getHasher;
    log;
    logger;
    components;
    /**
     * Create a new BlockStorage
     */
    constructor(components) {
        this.log = components.logger.forComponent('helia:networked-storage');
        this.logger = components.logger;
        this.components = components;
        this.child = new IdentityBlockstore(components.blockstore);
        this.getHasher = components.getHasher;
    }
    /**
     * Put a block to the underlying datastore
     */
    async put(cid, block, options = {}) {
        if (await this.child.has(cid, options)) {
            options.onProgress?.(new CustomProgressEvent('blocks:put:duplicate', cid));
            return cid;
        }
        options.onProgress?.(new CustomProgressEvent('blocks:put:providers:notify', cid));
        await Promise.all(this.components.blockBrokers.map(async (broker) => broker.announce?.(cid, block, options)));
        options.onProgress?.(new CustomProgressEvent('blocks:put:blockstore:put', cid));
        return this.child.put(cid, block, options);
    }
    /**
     * Put a multiple blocks to the underlying datastore
     */
    async *putMany(blocks, options = {}) {
        const missingBlocks = filter(blocks, async ({ cid }) => {
            const has = await this.child.has(cid, options);
            if (has) {
                options.onProgress?.(new CustomProgressEvent('blocks:put-many:duplicate', cid));
            }
            return !has;
        });
        const notifyEach = forEach(missingBlocks, async ({ cid, block }) => {
            options.onProgress?.(new CustomProgressEvent('blocks:put-many:providers:notify', cid));
            await Promise.all(this.components.blockBrokers.map(async (broker) => broker.announce?.(cid, block, options)));
        });
        options.onProgress?.(new CustomProgressEvent('blocks:put-many:blockstore:put-many'));
        yield* this.child.putMany(notifyEach, options);
    }
    /**
     * Get a block by cid
     */
    async get(cid, options = {}) {
        if (options.offline !== true && !(await this.child.has(cid, options))) {
            const hasher = await this.getHasher(cid.multihash.code);
            // we do not have the block locally, get it from a block provider
            options.onProgress?.(new CustomProgressEvent('blocks:get:providers:get', cid));
            const block = await raceBlockRetrievers(cid, this.components.blockBrokers, hasher, {
                ...options,
                log: this.log
            });
            options.onProgress?.(new CustomProgressEvent('blocks:get:blockstore:put', cid));
            await this.child.put(cid, block, options);
            // notify other block providers of the new block
            options.onProgress?.(new CustomProgressEvent('blocks:get:providers:notify', cid));
            await Promise.all(this.components.blockBrokers.map(async (broker) => broker.announce?.(cid, block, options)));
            return block;
        }
        options.onProgress?.(new CustomProgressEvent('blocks:get:blockstore:get', cid));
        return this.child.get(cid, options);
    }
    /**
     * Get multiple blocks back from an (async) iterable of cids
     */
    async *getMany(cids, options = {}) {
        options.onProgress?.(new CustomProgressEvent('blocks:get-many:blockstore:get-many'));
        yield* this.child.getMany(forEach(cids, async (cid) => {
            if (options.offline !== true && !(await this.child.has(cid, options))) {
                const hasher = await this.getHasher(cid.multihash.code);
                // we do not have the block locally, get it from a block provider
                options.onProgress?.(new CustomProgressEvent('blocks:get-many:providers:get', cid));
                const block = await raceBlockRetrievers(cid, this.components.blockBrokers, hasher, {
                    ...options,
                    log: this.log
                });
                options.onProgress?.(new CustomProgressEvent('blocks:get-many:blockstore:put', cid));
                await this.child.put(cid, block, options);
                // notify other block providers of the new block
                options.onProgress?.(new CustomProgressEvent('blocks:get-many:providers:notify', cid));
                await Promise.all(this.components.blockBrokers.map(async (broker) => broker.announce?.(cid, block, options)));
            }
        }));
    }
    /**
     * Delete a block from the blockstore
     */
    async delete(cid, options = {}) {
        options.onProgress?.(new CustomProgressEvent('blocks:delete:blockstore:delete', cid));
        await this.child.delete(cid, options);
    }
    /**
     * Delete multiple blocks from the blockstore
     */
    async *deleteMany(cids, options = {}) {
        options.onProgress?.(new CustomProgressEvent('blocks:delete-many:blockstore:delete-many'));
        yield* this.child.deleteMany((async function* () {
            for await (const cid of cids) {
                yield cid;
            }
        }()), options);
    }
    async has(cid, options = {}) {
        return this.child.has(cid, options);
    }
    async *getAll(options = {}) {
        options.onProgress?.(new CustomProgressEvent('blocks:get-all:blockstore:get-many'));
        yield* this.child.getAll(options);
    }
}
/**
 * Networked storage wraps a regular blockstore - when getting blocks if the
 * blocks are not present, the configured BlockBrokers will be used to fetch them.
 */
export class NetworkedStorage extends Storage {
    started;
    /**
     * Create a new BlockStorage
     */
    constructor(components) {
        super(components);
        this.started = false;
    }
    isStarted() {
        return this.started;
    }
    async start() {
        await start(this.child, ...this.components.blockBrokers);
        this.started = true;
    }
    async stop() {
        await stop(this.child, ...this.components.blockBrokers);
        this.started = false;
    }
    unwrap() {
        return this.child;
    }
    createSession(root, options) {
        const blockBrokers = this.components.blockBrokers.map(broker => {
            if (broker.createSession == null) {
                return broker;
            }
            return broker.createSession(options);
        });
        return new SessionStorage({
            blockstore: this.child,
            blockBrokers,
            getHasher: this.getHasher,
            logger: this.logger
        }, {
            root
        });
    }
}
/**
 * Storage subclass that can cancel any ongoing operation at any point.
 */
class SessionStorage extends Storage {
    closeController;
    constructor(components, init) {
        super(components);
        // because brokers are allowed to continue searching for providers after the
        // session has been created, we need a way to tell them that the user has
        // finished using the session any in-flight requests should be cancelled
        this.closeController = new AbortController();
        setMaxListeners(Infinity, this.closeController.signal);
        this.log = components.logger.forComponent(`helia:session-storage:${init.root}`);
    }
    close() {
        this.closeController.abort();
    }
    /**
     * Put a block to the underlying datastore
     */
    async put(cid, block, options = {}) {
        const signal = anySignal([this.closeController.signal, options.signal]);
        setMaxListeners(Infinity, signal);
        try {
            return await super.put(cid, block, {
                ...options,
                signal
            });
        }
        finally {
            signal.clear();
        }
    }
    /**
     * Put a multiple blocks to the underlying datastore
     */
    async *putMany(blocks, options = {}) {
        const signal = anySignal([this.closeController.signal, options.signal]);
        setMaxListeners(Infinity, signal);
        try {
            yield* super.putMany(blocks, {
                ...options,
                signal
            });
        }
        finally {
            signal.clear();
        }
    }
    /**
     * Get a block by cid
     */
    async get(cid, options = {}) {
        const signal = anySignal([this.closeController.signal, options.signal]);
        setMaxListeners(Infinity, signal);
        try {
            return await super.get(cid, {
                ...options,
                signal
            });
        }
        finally {
            signal.clear();
        }
    }
    /**
     * Get multiple blocks back from an (async) iterable of cids
     */
    async *getMany(cids, options = {}) {
        const signal = anySignal([this.closeController.signal, options.signal]);
        setMaxListeners(Infinity, signal);
        try {
            yield* super.getMany(cids, {
                ...options,
                signal
            });
        }
        finally {
            signal.clear();
        }
    }
    /**
     * Delete a block from the blockstore
     */
    async delete(cid, options = {}) {
        const signal = anySignal([this.closeController.signal, options.signal]);
        setMaxListeners(Infinity, signal);
        try {
            await super.delete(cid, {
                ...options,
                signal
            });
        }
        finally {
            signal.clear();
        }
    }
    /**
     * Delete multiple blocks from the blockstore
     */
    async *deleteMany(cids, options = {}) {
        const signal = anySignal([this.closeController.signal, options.signal]);
        setMaxListeners(Infinity, signal);
        try {
            yield* super.deleteMany(cids, {
                ...options,
                signal
            });
        }
        finally {
            signal.clear();
        }
    }
    async has(cid, options = {}) {
        const signal = anySignal([this.closeController.signal, options.signal]);
        setMaxListeners(Infinity, signal);
        try {
            return await super.has(cid, {
                ...options,
                signal
            });
        }
        finally {
            signal.clear();
        }
    }
    async *getAll(options = {}) {
        const signal = anySignal([this.closeController.signal, options.signal]);
        setMaxListeners(Infinity, signal);
        try {
            yield* super.getAll({
                ...options,
                signal
            });
        }
        finally {
            signal.clear();
        }
    }
}
function isRetrievingBlockBroker(broker) {
    return typeof broker.retrieve === 'function';
}
export const getCidBlockVerifierFunction = (cid, hasher) => {
    if (hasher == null) {
        throw new InvalidParametersError(`No hasher configured for multihash code 0x${cid.multihash.code.toString(16)}, please configure one. You can look up which hash this is at https://github.com/multiformats/multicodec/blob/master/table.csv`);
    }
    return async (block) => {
        // verify block
        let hash;
        const res = hasher.digest(block);
        if (isPromise(res)) {
            hash = await res;
        }
        else {
            hash = res;
        }
        if (!uint8ArrayEquals(hash.digest, cid.multihash.digest)) {
            // if a hash mismatch occurs for a TrustlessGatewayBlockBroker, we should try another gateway
            throw new InvalidMultihashError('Hash of downloaded block did not match multihash from passed CID');
        }
    };
};
/**
 * Race block providers cancelling any pending requests once the block has been
 * found.
 */
async function raceBlockRetrievers(cid, blockBrokers, hasher, options) {
    const validateFn = getCidBlockVerifierFunction(cid, hasher);
    const controller = new AbortController();
    const signal = anySignal([controller.signal, options.signal]);
    setMaxListeners(Infinity, controller.signal, signal);
    const retrievers = [];
    for (const broker of blockBrokers) {
        if (isRetrievingBlockBroker(broker)) {
            retrievers.push(broker);
        }
    }
    try {
        return await Promise.any(retrievers
            .map(async (retriever) => {
            try {
                let blocksWereValidated = false;
                const block = await retriever.retrieve(cid, {
                    ...options,
                    signal,
                    validateFn: async (block) => {
                        await validateFn(block);
                        blocksWereValidated = true;
                    }
                });
                if (!blocksWereValidated) {
                    // the blockBroker either did not throw an error when attempting to validate the block
                    // or did not call the validateFn at all. We should validate the block ourselves
                    await validateFn(block);
                }
                return block;
            }
            catch (err) {
                options.log.error('could not retrieve verified block for %c', cid, err);
                throw err;
            }
        }));
    }
    finally {
        // we have the block from the fastest block retriever, abort any still
        // in-flight retrieve attempts
        controller.abort();
        signal.clear();
    }
}
//# sourceMappingURL=networked-storage.js.map