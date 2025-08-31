import type { Await } from '@helia/interface';
import type { MultihashHasher } from 'multiformats/hashes/interface';
export declare function getHasher(initialHashers?: MultihashHasher[], loadHasher?: (code: number) => Await<MultihashHasher>): (code: number) => Await<MultihashHasher>;
//# sourceMappingURL=get-hasher.d.ts.map