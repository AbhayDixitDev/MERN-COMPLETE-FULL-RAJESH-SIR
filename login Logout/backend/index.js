const express= require("express");
const app=express();
const bodyparser = require('body-parser')
const cors= require("cors");
const mongoose= require("mongoose");
const UserRoute= require("./routes/userRoute");
const AdminRoute= require("./routes/adminRoute");

require("dotenv").config();

const Port=process.env.PORT || 8080
mongoose.connect(process.env.DBCONNECTION).then(()=>{
    console.log("DB connected!!!")
})
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());

app.use("/users", UserRoute);
app.use("/admin", AdminRoute);


app.listen(Port, ()=>{ 
     console.log(`Server run on ${Port}`)
})