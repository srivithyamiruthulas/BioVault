import type { RmOptions } from '../index.js';
import type { GetStore, PutStore } from '../unixfs.js';
import type { CID } from 'multiformats/cid';
export declare function rm(target: CID, name: string, blockstore: GetStore & PutStore, options?: Partial<RmOptions>): Promise<CID>;
//# sourceMappingURL=rm.d.ts.map