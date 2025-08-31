import { addAll, addBytes, addByteStream, addDirectory, addFile } from './commands/add.js';
import { cat } from './commands/cat.js';
import { chmod } from './commands/chmod.js';
import { cp } from './commands/cp.js';
import { ls } from './commands/ls.js';
import { mkdir } from './commands/mkdir.js';
import { rm } from './commands/rm.js';
import { stat } from './commands/stat.js';
import { touch } from './commands/touch.js';
export class UnixFS {
    components;
    constructor(components) {
        this.components = components;
    }
    async *addAll(source, options = {}) {
        yield* addAll(source, this.components.blockstore, options);
    }
    async addBytes(bytes, options = {}) {
        return addBytes(bytes, this.components.blockstore, options);
    }
    async addByteStream(bytes, options = {}) {
        return addByteStream(bytes, this.components.blockstore, options);
    }
    async addFile(file, options = {}) {
        return addFile(file, this.components.blockstore, options);
    }
    async addDirectory(dir = {}, options = {}) {
        return addDirectory(dir, this.components.blockstore, options);
    }
    async *cat(cid, options = {}) {
        yield* cat(cid, this.components.blockstore, options);
    }
    async chmod(cid, mode, options = {}) {
        return chmod(cid, mode, this.components.blockstore, options);
    }
    async cp(source, target, name, options = {}) {
        return cp(source, target, name, this.components.blockstore, options);
    }
    async *ls(cid, options = {}) {
        yield* ls(cid, this.components.blockstore, options);
    }
    async mkdir(cid, dirname, options = {}) {
        return mkdir(cid, dirname, this.components.blockstore, options);
    }
    async rm(cid, path, options = {}) {
        return rm(cid, path, this.components.blockstore, options);
    }
    async stat(cid, options = {}) {
        return stat(cid, this.components.blockstore, options);
    }
    async touch(cid, options = {}) {
        return touch(cid, this.components.blockstore, options);
    }
}
//# sourceMappingURL=unixfs.js.map