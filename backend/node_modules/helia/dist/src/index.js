/**
 * @packageDocumentation
 *
 * Exports a `createHelia` function that returns an object that implements the {@link Helia} API.
 *
 * Pass it to other modules like {@link https://www.npmjs.com/package/@helia/unixfs | @helia/unixfs} to make files available on the distributed web.
 *
 * @example
 *
 * ```typescript
 * import { createHelia } from 'helia'
 * import { unixfs } from '@helia/unixfs'
 * import { CID } from 'multiformats/cid'
 *
 * const helia = await createHelia()
 *
 * const fs = unixfs(helia)
 * fs.cat(CID.parse('bafyFoo'))
 * ```
 */
import { Helia as HeliaClass } from '@helia/utils';
import { heliaDefaults } from './utils/helia-defaults.js';
import { libp2pDefaults } from './utils/libp2p-defaults.js';
// re-export interface types so people don't have to depend on @helia/interface
// if they don't want to
export * from '@helia/interface';
// allow amending the default config
export { libp2pDefaults };
export { heliaDefaults };
export async function createHelia(init = {}) {
    const options = await heliaDefaults(init);
    const helia = new HeliaClass(options);
    if (options.start !== false) {
        await helia.start();
    }
    return helia;
}
//# sourceMappingURL=index.js.map