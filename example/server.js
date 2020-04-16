const { hydrion } = require("../dist/hydrion.min");
const http = require("http");
http.createServer(new hydrion("./index.html").Server).listen(8000);