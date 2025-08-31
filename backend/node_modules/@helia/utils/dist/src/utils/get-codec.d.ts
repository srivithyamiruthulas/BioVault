import type { Await } from '@helia/interface';
import type { BlockCodec } from 'multiformats/codecs/interface';
export declare function getCodec<T = any, Code extends number = any>(initialCodecs?: Array<BlockCodec<any, any>>, loadCodec?: (code: number) => Await<BlockCodec<any, any>>): (code: Code) => Await<BlockCodec<Code, T>>;
//# sourceMappingURL=get-codec.d.ts.map