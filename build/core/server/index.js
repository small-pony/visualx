(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "path", "fs"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var path = require("path");
    var fs = require("fs");
    function checkEntry(entry) {
        if (!fs.existsSync(entry)) {
            throw "\"" + entry + "\" is not exists.";
        }
        if (!fs.statSync(entry).isFile()) {
            throw "\"" + entry + "\" is not file.";
        }
    }
    var hydrion = /** @class */ (function () {
        function hydrion(entry) {
            checkEntry(entry);
            this.isAbsolute = path.isAbsolute(entry);
            this.entry = entry;
        }
        hydrion.prototype.Server = function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(fs.readFileSync(this.entry).toString());
        };
        return hydrion;
    }());
    exports.hydrion = hydrion;
    ;
});
