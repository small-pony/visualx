(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./core/server/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var index_1 = require("./core/server/index");
    exports["default"] = index_1.hydrion;
});
