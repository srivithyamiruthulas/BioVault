export class Stats {
    blocksReceived;
    duplicateBlocksReceived;
    dataReceived;
    duplicateDataReceived;
    constructor(components) {
        this.blocksReceived = components.metrics?.registerMetricGroup('helia_bitswap_received_blocks');
        this.duplicateBlocksReceived = components.metrics?.registerMetricGroup('helia_bitswap_duplicate_received_blocks');
        this.dataReceived = components.metrics?.registerMetricGroup('helia_bitswap_data_received_bytes');
        this.duplicateDataReceived = components.metrics?.registerMetricGroup('helia_bitswap_duplicate_data_received_bytes');
    }
    updateBlocksReceived(count = 1, peerId) {
        const stats = {
            global: count
        };
        if (peerId != null) {
            stats[peerId.toString()] = count;
        }
        this.blocksReceived?.increment(stats);
    }
    updateDuplicateBlocksReceived(count = 1, peerId) {
        const stats = {
            global: count
        };
        if (peerId != null) {
            stats[peerId.toString()] = count;
        }
        this.duplicateBlocksReceived?.increment(stats);
    }
    updateDataReceived(bytes, peerId) {
        const stats = {
            global: bytes
        };
        if (peerId != null) {
            stats[peerId.toString()] = bytes;
        }
        this.dataReceived?.increment(stats);
    }
    updateDuplicateDataReceived(bytes, peerId) {
        const stats = {
            global: bytes
        };
        if (peerId != null) {
            stats[peerId.toString()] = bytes;
        }
        this.duplicateDataReceived?.increment(stats);
    }
}
//# sourceMappingURL=stats.js.map