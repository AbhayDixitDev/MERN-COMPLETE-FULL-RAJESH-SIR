const express = require('express');
const app = express();
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://abhaydixitdev:eAMfVo52SWCy54xt@clusterabhay.f2lbv.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAbhay"
).then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

const StuRoutes = require('./routes/students');
const { db } = require('./models/stuModels');

app.use("/students", StuRoutes);

app.listen(3000, () => {    
    console.log("Server started on port 3000"); 
});
