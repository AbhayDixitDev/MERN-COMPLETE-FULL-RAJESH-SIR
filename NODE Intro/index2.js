const http = require("http");

http.createServer((req, res) => {
    res.write("<h1>Hello World !</h1>");
    res.end("<h2>Bye World !</h2>");
}).listen(8000)