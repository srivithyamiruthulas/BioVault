import ve from './varint-encoder.js';
export function cidToPrefix(cid) {
    return ve([
        cid.version, cid.code, cid.multihash.code, cid.multihash.digest.byteLength
    ]);
}
//# sourceMappingURL=cid-prefix.js.map