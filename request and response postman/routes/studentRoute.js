const stuRoute = require('express').Router();

stuRoute.get('/stuInfo', (req, res) => {
    res.send('student route');
});

stuRoute.post('stuSave',(req,res)=>{
    res.send("student save");
})

stuRoute.get('/stuDelete/:id',(req,res)=>{
    res.send("student delete");
})

module.exports = stuRoute;