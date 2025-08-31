import { CID } from 'multiformats/cid';
import type { MkdirOptions } from '../index.js';
import type { GetStore, PutStore } from '../unixfs.js';
export declare function mkdir(parentCid: CID, dirname: string, blockstore: GetStore & PutStore, options?: Partial<MkdirOptions>): Promise<CID>;
//# sourceMappingURL=mkdir.d.ts.map