const userModel= require("../models/userModel");



const userSave=async(req, res)=>{
    const {name, mobile, email, password}=req.body;
    const user = await userModel.create(
        {
            name: name, 
            mobile: mobile, 
            email: email, 
            password: password

        }
    );
    console.log(user);
    

    res.send("OK");
}

const userCheck=async(req, res)=>{
    const {email, password}=req.body;
    const user = await userModel.find({email: email});
    console.log(user);
    if(user.length>=1){
        if(user[0].password!==password){
            res.status(401).send({msg:"Invalid Password!"});
    }else{
        res.send({Data:user, msg:"Login Successfull!"});
    }
    }
    else{
        res.status(401).send({msg:"Invalid Email!"});
    }
}


module.exports={
    userSave,
    userCheck
}