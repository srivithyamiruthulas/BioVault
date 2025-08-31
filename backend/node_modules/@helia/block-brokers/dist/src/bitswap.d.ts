import type { BitswapOptions } from '@helia/bitswap';
import type { BlockBroker, Routing, HasherLoader } from '@helia/interface';
import type { Libp2p, ComponentLogger } from '@libp2p/interface';
import type { Blockstore } from 'interface-blockstore';
export interface BitswapBlockBrokerComponents {
    libp2p: Libp2p;
    blockstore: Blockstore;
    routing: Routing;
    logger: ComponentLogger;
    getHasher: HasherLoader;
}
export interface BitswapBlockBrokerInit extends BitswapOptions {
}
/**
 * A helper factory for users who want to override Helia `blockBrokers` but
 * still want to use the default `BitswapBlockBroker`.
 */
export declare function bitswap(init?: BitswapBlockBrokerInit): (components: BitswapBlockBrokerComponents) => BlockBroker;
//# sourceMappingURL=bitswap.d.ts.map