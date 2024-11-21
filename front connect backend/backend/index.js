const express= require("express");
const app=express();
const bodyparser = require('body-parser')
const cors= require("cors");
const mongoose= require("mongoose");
const stuRoute= require("./routes/studentRoute");

mongoose.connect("mongodb://127.0.0.1:27017/tanudb").then(()=>{
    console.log("DB connected!!!")
})

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());


app.use("/students", stuRoute);

app.listen(8080, ()=>{
    console.log("server run on 8080")
})