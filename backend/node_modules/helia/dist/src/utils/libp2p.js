import { loadOrCreateSelfKey } from '@libp2p/config';
import { createLibp2p as create } from 'libp2p';
import { libp2pDefaults } from './libp2p-defaults.js';
export async function createLibp2p(options) {
    const libp2pOptions = options.libp2p ?? {};
    // if no peer id was passed, try to load it from the keychain
    if (libp2pOptions.privateKey == null && options.datastore != null) {
        libp2pOptions.privateKey = await loadOrCreateSelfKey(options.datastore, options.keychain);
    }
    const defaults = libp2pDefaults(libp2pOptions);
    defaults.datastore = defaults.datastore ?? options.datastore;
    const node = await create({
        ...defaults,
        ...libp2pOptions,
        start: false
    });
    return node;
}
//# sourceMappingURL=libp2p.js.map