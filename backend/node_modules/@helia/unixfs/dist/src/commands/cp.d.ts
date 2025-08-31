import type { CpOptions } from '../index.js';
import type { GetStore, PutStore } from '../unixfs.js';
import type { CID } from 'multiformats/cid';
export declare function cp(source: CID, target: CID, name: string, blockstore: GetStore & PutStore, options?: Partial<CpOptions>): Promise<CID>;
//# sourceMappingURL=cp.d.ts.map