import { CID } from 'multiformats/cid';
import type { ChmodOptions } from '../index.js';
import type { GetStore, PutStore } from '../unixfs.js';
export declare function chmod(cid: CID, mode: number, blockstore: PutStore & GetStore, options?: Partial<ChmodOptions>): Promise<CID>;
//# sourceMappingURL=chmod.d.ts.map