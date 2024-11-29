import { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";




const Insert=()=>{
    const navigate=useNavigate();
    const [input, setInput] =useState({})


    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}))
    }

    const handleSubmit=()=>{
        let api="http://localhost:8080/students/datasave";
        axios.post(api, input).then(()=>{
        })
        alert("data save!");
        navigate("/display");

    }


    return(
        <>
          <h1 style={{textAlign:"center"}}> Insert Data page</h1>


          <Form style={{backgroundColor:"black",color:"white",width:"25%",padding:"20px",borderRadius:"10px",margin:"0 auto"}}>
          <Form.Group className="mb-3" >
        <Form.Label>Roll Number</Form.Label>
        <Form.Control type="number" placeholder="enter your roll number " name="rollno" onChange={handleInput}  />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="enter your name"  name="name" onChange={handleInput}  />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="enter your city "  name="city" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Fees</Form.Label>
        <Form.Control type="number" placeholder="enter your fess" name="fees" onChange={handleInput} />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" onClick={handleSubmit}>Data save!</Button>
        </div>

     
    </Form>
        </>
    )
}

export default Insert;