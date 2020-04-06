import path from 'path';
import fs from 'fs';
const basedir = __dirname;

export function requireContext(
    directory: any,
    useSubdirectories = false,
    regExp = /^\.\//
) {
    const absoluteDirectory = path.resolve(basedir, directory);
    const keys = enumerateFiles(absoluteDirectory, '.');

    function enumerateFiles(basedir: any, dir: any) {
        let result: string[] = [];
        fs.readdirSync(path.join(basedir, dir)).forEach(function (file) {
            const relativePath = dir + '/' + file;
            const stats = fs.lstatSync(path.join(basedir, relativePath));
            if (stats.isDirectory()) {
                if (useSubdirectories) {
                    result = result.concat(enumerateFiles(basedir, relativePath));
                }
            } else if (regExp.test(relativePath)) {
                result.push(relativePath);
            }
        });
        return result;
    }

    function requireContext(key: any) {
        if (!keys.includes(key)) {
            throw new Error(`Cannot find module '${key}'.`);
        }
        const fullKey = path.resolve(absoluteDirectory, key);
        return require(fullKey);
    }
    (requireContext as any).keys = () => keys;
    return requireContext;
}
