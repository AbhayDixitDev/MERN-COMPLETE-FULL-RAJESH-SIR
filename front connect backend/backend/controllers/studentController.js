const StuModel=require("../models/studentModels");


const dataSave=async(req, res)=>{
const {rollno, name, city, fees}= req.body;

const data=await StuModel.create({
    rollno:rollno,
    name:name,
    city:city,
    fees:fees
})

res.send(data)

}


const dataDisplay=async(req, res)=>{
    const myData= await StuModel.find();
    res.send(myData);
}

const dataSearch=async(req,res)=>{
    const myData = await StuModel.find(req.body)
    res.send(myData)
}

const dataDelete=async(req, res)=>{
    const {id}= req.body;
    const myData= await StuModel.findByIdAndDelete(id);
    res.send(myData);
}

module.exports={
    dataSave,
    dataDisplay,
    dataSearch,
    dataDelete
}