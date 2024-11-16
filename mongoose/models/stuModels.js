const mongoose = require('mongoose');

const stuSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: String
});

module.exports = mongoose.model('Student', stuSchema);