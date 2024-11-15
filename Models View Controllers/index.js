const express = require('express');
const app = express();

const StuRoutes = require('./routes/students');

app.use("/students", StuRoutes);

app.listen(3000, () => {    
    console.log("Server started on port 3000"); 
});