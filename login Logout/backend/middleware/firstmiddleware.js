const express = require("express");
const app = express();
const firstmiddleware = (req, res, next) => {
    console.log("firstmiddleware");
    next();
};
module.exports = firstmiddleware;