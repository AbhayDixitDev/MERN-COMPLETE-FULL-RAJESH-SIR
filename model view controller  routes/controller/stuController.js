const StudentModel = require("../models/stuModel")

async function datasave(req, res){
    const {name, age, city, email} = req.body
    const data = await StudentModel.create(
        {
            name:name, 
            age:age, 
            city:city, 
            email:email
        }
    )
    res.send("ok")
}

async function datashow(req, res){
    const data = await StudentModel.find()
    res.send(data)
}

module.exports ={
    datasave,
    datashow
}