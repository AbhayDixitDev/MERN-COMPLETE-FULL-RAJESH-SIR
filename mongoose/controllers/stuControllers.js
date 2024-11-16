const mongoose = require ("./stuControllers.js")
const stumodel=require("../models/stuModels")


const about = (req, res) => {
  const stu = stumodel.create({
    name: "Abhay Dixit",
    age: 23,
    address: "Indore"
  })
  res.send("data saved");
}

module.exports = {
    about
}

