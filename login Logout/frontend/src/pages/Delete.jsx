import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Delete = () => {
    const navigate = useNavigate();
    const [mydata, setMydata] = useState([]);

    const loadData = () => {
        let api = "http://localhost:8080/students/datadisplay";
        axios.get(api).then((res) => {
            setMydata(res.data);
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = (id) => {
        let api = `http://localhost:8080/students/datadelete`;
        axios.post(api,{id:id}).then(() => {
            alert("Data deleted!");
            loadData();
        });
    };

    return (
        <>
            <h1 style={{textAlign: "center"}}>Delete Data</h1>
            <Table striped bordered hover style={{width: "80%", margin: "0 auto"}}>
                <thead>
                    <tr>
                        <th>Roll Number</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Fees</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mydata.map((item) => (
                        <tr key={item.rollno}>
                            <td>{item.rollno}</td>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>{item.fees}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(item._id)}>
                                    Delete
                                </Button>
                                <Button variant="success" onClick={() => navigate(`/update/${item._id}`)} style={{marginLeft: "10px"}}>
                                    Update
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default Delete;
