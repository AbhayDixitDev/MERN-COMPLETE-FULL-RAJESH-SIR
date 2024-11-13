const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("this is home page");
});

app.get("/save",(req,res)=>{
    res.send("this is get request by user res by server");
})

app.post("/save",(req,res)=>{
    res.send("this is post request by user res by server");
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});