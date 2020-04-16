# hydrioner
一个专为服务端渲染而生的框架。
# 使用方法：
后端：
`const { hydrion } = require("../dist/hydrion.min");<br />
const http = require("http");<br/>
http.createServer(new hydrion("./index.html").Server).listen(8000);`