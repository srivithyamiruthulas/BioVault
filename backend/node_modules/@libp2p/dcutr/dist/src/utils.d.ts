import type { TransportManager } from '@libp2p/interface-internal';
import type { Multiaddr } from '@multiformats/multiaddr';
/**
 * Returns true if the passed multiaddr is public, not relayed and we have a
 * transport that can dial it
 */
export declare function isPublicAndDialable(ma: Multiaddr, transportManager: TransportManager): boolean;
//# sourceMappingURL=utils.d.ts.map