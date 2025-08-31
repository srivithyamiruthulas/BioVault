import type { QueuedBitswapMessage } from './bitswap-message.js';
/**
 * https://github.com/ipfs/kubo/issues/4473#issuecomment-350390693
 */
export declare const MAX_BLOCK_SIZE = 4193648;
/**
 * Split the passed Bitswap message into multiple smaller messages that when
 * serialized will be under the maximum message size.
 *
 * Since blocks are the largest thing to send, we first try to fit as many
 * blocks as possible into the message, then add (smaller) block presences and
 * wants until the max size is reached.
 *
 * If a block is encountered that is larger than the max message size an error
 * will be thrown.
 */
export declare function splitMessage(message: QueuedBitswapMessage, maxSize: number): Generator<Uint8Array>;
//# sourceMappingURL=split-message.d.ts.map