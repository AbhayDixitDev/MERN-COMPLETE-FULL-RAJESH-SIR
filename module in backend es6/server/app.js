import express from 'express'
const app = express()
import studentRouter from './routes/studentRoute.js'

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use("/student", studentRouter)

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})

