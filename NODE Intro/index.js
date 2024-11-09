const http = require("http");
const fs= require("fs")

// http.createServer((req, res) => {
//     res.write("<h1>We are MERN Developer</h1>");
//     res.end();
// }).listen(8000);

// http.createServer((req,res)=>{
//     // res.writeHead(200,{'Content-Type':'text/html'});
//     res.write("<h1> We are <br>MERN Developer</h1>");
//     res.end("<h1>this is server end<h1>");
// }).listen(8000);


// http.createServer((req,res)=>{
//     fs.readFile("./music.mp3",(err,result)=>{
//         res.write(result)
//         res.end()
//     })
// }).listen(8000)
http.createServer((req, res) => {
  if (req.url === '/video') {
    
    res.writeHead(200, {
      'Content-Type': 'video/mp4'
    });
    
    // Stream video file directly to response
    fs.createReadStream("./video.mp4").pipe(res);
  }
}).listen(3000, () => {
  console.log(`Server listening on port ${port}`);
});