const studentHome=(req,res)=>{  
    res.send("hello student")
}


const studentAbout=(req,res)=>{  
    res.send("student About page")
}
const studentContact=(req,res)=>{  
    res.send("student Contact page")
}

const studentService=(req,res)=>{  
    res.send("student Service page")
}

export {
    studentHome,
    studentAbout,
    studentContact,
    studentService
}