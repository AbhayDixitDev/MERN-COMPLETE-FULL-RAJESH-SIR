const express = require ("express")
const app = express()
const bodyparser = require ("body-parser")

app.use(bodyparser.json())
app.use (bodyparser.urlencoded({extended: true}))

const mongoose = require ("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/student")

const stuRoute = require("./routes/stuRoute")


app.use("/student",stuRoute)



app.get("/", (req, res) => {
    res.send("Hello World")
})





app.listen(4000, () => console.log("Server running on port 3000"))