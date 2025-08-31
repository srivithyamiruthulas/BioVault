/**
 * @packageDocumentation
 *
 * This module implements the [Bitswap protocol](https://docs.ipfs.tech/concepts/bitswap/) in TypeScript.
 *
 * It supersedes the older [ipfs-bitswap](https://www.npmjs.com/package/ipfs-bitswap) module with the aim of being smaller, faster, better integrated with libp2p/helia, having fewer dependencies and using standard JavaScript instead of Node.js APIs.
 */
import { Bitswap as BitswapClass } from './bitswap.js';
export const createBitswap = (components, options = {}) => {
    return new BitswapClass(components, options);
};
//# sourceMappingURL=index.js.map