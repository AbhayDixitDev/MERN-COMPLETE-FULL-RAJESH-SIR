import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { useEffect, useState } from "react";

const Search=()=>{
    const [rollno, setRollno] = useState("");
    const [mydata, setMydata]=useState([]);
    const [searchCheck, setSearchCheck]=useState(false);

const handleSearch=async()=>{
        let api="http://localhost:8080/students/datasearch";
        await axios.post(api, {rollno}).then((res)=>{
            console.log(res.data);
            setMydata(res.data);
        })
        setRollno("");
        setSearchCheck(false);
    }

    useEffect(()=>{
        handleSearch();
    }, [])


   const ans= mydata.map((key)=>{
        return(
            <>
              <tr  style={{border:"1px dotted black",width:"50%",padding:"20px",borderRadius:"10px",margin:"0 auto"}}>
                <td style={{backgroundColor:"black",color:"white"}}> {key.rollno} </td>
                <td style={{backgroundColor:"black",color:"white"}}> {key.name} </td>
                <td style={{backgroundColor:"black",color:"white"}}> {key.city} </td>
                <td style={{backgroundColor:"black",color:"white"}}> {key.fees} </td>
              </tr>
            </>
        )
    })

    return (
        <>
          <h1 style={{textAlign:"center"}}> Search page</h1>
          <Form className="d-flex" style={{width:"50%",margin:"0 auto"}}>
            <Form.Control
              type="number"
              placeholder="Search"
              className="me-2"
              name="rollno"
              aria-label="Search"
              value={rollno}
              onChange={(e)=>{
                setRollno(e.target.value);
              }}
            />
            <Button variant="outline-success" onClick={handleSearch}>Search</Button>
          </Form>

          <hr height="80px" style={{width:"80%",margin:"0 auto",marginTop:"50px",color:"red"}}/>

          { mydata.length>0?
          <Table>
          <thead>
            <tr>
              <th>Roll Number</th>
              <th>Name</th>
              <th>City</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {ans}
          </tbody>
        </Table> : searchCheck? <h1 style={{textAlign:"center"}}>No Data Found</h1> : ""}
         
          

        </>
    )
}

export default Search;