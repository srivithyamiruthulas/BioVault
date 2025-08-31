import type { Block, BlockPresence, WantlistEntry } from '../pb/message.js';
import type { CID } from 'multiformats';
/**
 * A bitswap message that is in the send queue. So implemented to be
 * cheap to merge multiple messages when we repeatedly send messages
 * to the same peer.
 */
export declare class QueuedBitswapMessage {
    full: boolean;
    pendingBytes: number;
    wantlist: Map<string, WantlistEntry>;
    blocks: Map<string, Block>;
    blockPresences: Map<string, BlockPresence>;
    constructor(full?: boolean, pendingBytes?: number);
    addWantlistEntry(cid: CID, entry: WantlistEntry): void;
    addBlockPresence(cid: CID, blockPresence: BlockPresence): void;
    addBlock(cid: CID, block: Block): void;
}
//# sourceMappingURL=bitswap-message.d.ts.map