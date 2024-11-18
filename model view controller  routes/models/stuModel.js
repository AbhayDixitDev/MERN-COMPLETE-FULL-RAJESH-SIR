const mongoose = require ("mongoose")

const stuSchema = new mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    email:String
})

module.exports = mongoose.model("student", stuSchema)