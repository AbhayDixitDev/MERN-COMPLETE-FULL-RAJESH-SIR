const express= require("express");
const app=express();
const bodyparser = require('body-parser')
const cors= require("cors");
const mongoose= require("mongoose");
const stuRoute= require("./routes/studentRoute");
require("dotenv").config();

const firstmiddleware = require("./middleware/firstmiddleware");
const Port = process.env.PORT || 8080   

mongoose.connect(process.env.DBCONNECT).then(()=>{
    console.log("DB connected!!!")
})

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());

app.use((req, res, next) => {
    console.log("hello i am middleware");
    next();
});

app.get("/students",firstmiddleware, (req, res) => {
    res.send("hello world");
});


app.use("/students", stuRoute);

app.listen(Port, ()=>{
    console.log(`server run on ${Port}`)
})