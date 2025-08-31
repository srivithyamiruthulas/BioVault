import type { Libp2p, Metrics, PeerId } from '@libp2p/interface';
export interface StatsComponents {
    libp2p: Libp2p;
    metrics?: Metrics;
}
export declare class Stats {
    private readonly blocksReceived?;
    private readonly duplicateBlocksReceived?;
    private readonly dataReceived?;
    private readonly duplicateDataReceived?;
    constructor(components: StatsComponents);
    updateBlocksReceived(count?: number, peerId?: PeerId): void;
    updateDuplicateBlocksReceived(count?: number, peerId?: PeerId): void;
    updateDataReceived(bytes: number, peerId?: PeerId): void;
    updateDuplicateDataReceived(bytes: number, peerId?: PeerId): void;
}
//# sourceMappingURL=stats.d.ts.map