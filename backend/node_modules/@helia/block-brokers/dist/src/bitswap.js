import { createBitswap } from '@helia/bitswap';
class BitswapBlockBroker {
    bitswap;
    started;
    constructor(components, init = {}) {
        const { getHasher } = components;
        this.bitswap = createBitswap(components, {
            hashLoader: {
                getHasher: async (codecOrName) => {
                    return getHasher(codecOrName);
                }
            },
            ...init
        });
        this.started = false;
    }
    isStarted() {
        return this.started;
    }
    async start() {
        await this.bitswap.start();
        this.started = true;
    }
    async stop() {
        await this.bitswap.stop();
        this.started = false;
    }
    async announce(cid, block, options) {
        await this.bitswap.notify(cid, block, options);
    }
    async retrieve(cid, options = {}) {
        return this.bitswap.want(cid, options);
    }
    createSession(options) {
        const session = this.bitswap.createSession(options);
        return {
            announce: async (cid, block, options) => {
                await this.bitswap.notify(cid, block, options);
            },
            retrieve: async (cid, options) => {
                return session.retrieve(cid, options);
            }
        };
    }
}
/**
 * A helper factory for users who want to override Helia `blockBrokers` but
 * still want to use the default `BitswapBlockBroker`.
 */
export function bitswap(init = {}) {
    return (components) => new BitswapBlockBroker(components, init);
}
//# sourceMappingURL=bitswap.js.map