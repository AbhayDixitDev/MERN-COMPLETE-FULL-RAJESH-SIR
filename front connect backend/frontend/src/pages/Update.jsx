import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const Update = () => {
    const navigate=useNavigate();
    const [mydata, setMydata] = useState({});
    const { id } = useParams();
    const Loaddata=()=>{
        let api=`http://localhost:8080/students/dataupdate/?id=${id}`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        Loaddata();
    },[])

    const handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata(values=>({...values, [name]:value}))
    }

    const handleUpdate=()=>{
        let api=`http://localhost:8080/students/dataupdate/?id=${id}`;
        axios.post(api, mydata).then(()=>{
            // alert("data update!");
        })
        navigate("/actions");

    }
   
    return (
        <>
            <h1 style={{textAlign: "center"}}>Update Student (ID: {id})</h1>
            <Form style={{width: "50%", margin: "0 auto", padding: "20px"}}>
                <Form.Group className="mb-3">
                    <Form.Label>Roll Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter roll number" name="rollno" value={mydata.rollno} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" value={mydata.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" name="city" value={mydata.city} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Fees</Form.Label>
                    <Form.Control type="number" placeholder="Enter fees" name="fees" value={mydata.fees} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={()=>{handleUpdate()}}>Update Student</Button>
            </Form>

            
        </>
    );
};

export default Update;