import { base64 } from 'multiformats/bases/base64';
/**
 * A bitswap message that is in the send queue. So implemented to be
 * cheap to merge multiple messages when we repeatedly send messages
 * to the same peer.
 */
export class QueuedBitswapMessage {
    full;
    pendingBytes;
    wantlist;
    blocks;
    blockPresences;
    constructor(full = false, pendingBytes = 0) {
        this.full = full;
        this.wantlist = new Map();
        this.blocks = new Map();
        this.blockPresences = new Map();
        this.pendingBytes = 0;
    }
    addWantlistEntry(cid, entry) {
        const key = base64.encode(cid.multihash.bytes);
        this.wantlist.set(key, entry);
    }
    addBlockPresence(cid, blockPresence) {
        const key = base64.encode(cid.multihash.bytes);
        this.blockPresences.set(key, blockPresence);
    }
    addBlock(cid, block) {
        const key = base64.encode(cid.multihash.bytes);
        this.blocks.set(key, block);
    }
}
//# sourceMappingURL=bitswap-message.js.map