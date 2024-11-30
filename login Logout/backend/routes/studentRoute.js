const express= require("express");
const route= express.Router();
const stuController= require("../controllers/studentController");


route.post("/datasave", stuController.dataSave);
route.get("/datadisplay", stuController.dataDisplay);
route.post("/datasearch", stuController.dataSearch);
route.post("/datadelete", stuController.dataDelete);
route.get("/dataupdate", stuController.dataShowUpdate);
route.post("/dataupdate", stuController.dataUpdate);



module.exports=route;