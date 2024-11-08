const http = require("http");

// http.createServer((req, res) => {
//     res.write("<h1>We are MERN Developer</h1>");
//     res.end();
// }).listen(8000);

http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1> We are <br>MERN Developer</h1>");
    res.end("<h1>this is server end<h1>");
}).listen(8000);