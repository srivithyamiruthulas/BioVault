import type { CatOptions } from '../index.js';
import type { GetStore } from '../unixfs.js';
import type { CID } from 'multiformats/cid';
export declare function cat(cid: CID, blockstore: GetStore, options?: Partial<CatOptions>): AsyncIterable<Uint8Array>;
//# sourceMappingURL=cat.d.ts.map