import { CID } from 'multiformats/cid';
import type { TouchOptions } from '../index.js';
import type { GetStore, PutStore } from '../unixfs.js';
export declare function touch(cid: CID, blockstore: GetStore & PutStore, options?: Partial<TouchOptions>): Promise<CID>;
//# sourceMappingURL=touch.d.ts.map