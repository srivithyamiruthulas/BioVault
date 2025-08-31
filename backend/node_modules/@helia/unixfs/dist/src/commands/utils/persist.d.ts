import { CID } from 'multiformats/cid';
import type { PutStore } from '../../unixfs.js';
import type { Version as CIDVersion } from 'multiformats/cid';
import type { BlockCodec } from 'multiformats/codecs/interface';
export interface PersistOptions {
    codec?: BlockCodec<any, any>;
    cidVersion: CIDVersion;
    signal?: AbortSignal;
}
export declare const persist: (buffer: Uint8Array, blockstore: PutStore, options: PersistOptions) => Promise<CID>;
//# sourceMappingURL=persist.d.ts.map