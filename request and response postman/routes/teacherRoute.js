const express = require("express");
const teacherRoute = express.Router();

teacherRoute.get("/teacherInfo", (req, res) => {
    res.send("teacher route");
});

teacherRoute.post("/teacherSave", (req, res) => {
    res.send("teacher save");
});

teacherRoute.get("/teacherDelete/:id", (req, res) => {
    res.send("teacher delete");
});

teacherRoute.get("/teacherUpdate/:id", (req, res) => {
    res.send("teacher update");
});

module.exports = teacherRoute;
