const express = require("express");
const app = express();

const stuRoute = require("./routes/studentRoute");
app.use("/student",stuRoute);
app.get("/student", (req, res) => {
    res.send("Home page");
})


app.listen(3000, () => {
    console.log("Server started on port 3000");
});