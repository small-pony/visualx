import * as http from "http";
import * as url from "url";
import * as  path from "path";
import * as fs from "fs"

function checkEntry(entry: string) {
    if (!fs.existsSync(entry)) {
        throw `"${entry}" is not exists.`
    }
    if (!fs.statSync(entry).isFile()) {
        throw `"${entry}" is not file.`;

    }
}

class hydrion {
    constructor(entry) {
        checkEntry(entry);
        this.isAbsolute = path.isAbsolute(entry);
        this.entry = entry;
    }
    isAbsolute:boolean
    entry:string
    Server(req:http.IncomingMessage, res:http.ServerResponse) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(fs.readFileSync(this.entry).toString())
    }
};
export {
    hydrion
}