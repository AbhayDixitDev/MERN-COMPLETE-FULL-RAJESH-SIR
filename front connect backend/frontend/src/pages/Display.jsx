import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Display=()=>{
    const [mydata, setMydata]=useState([]);
    const loadData=()=>{
        let api="http://localhost:8080/students/datadisplay";
        axios.get(api).then((res)=>{
            setMydata(res.data)
            console.log(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    }, [])

    const ans=mydata.map((key)=>{
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
    return(
        <>
          <h1 style={{textAlign:"center"}}> Display page</h1>
          <hr/>

    <Table striped style={{border:"1px dotted black",width:"50%",padding:"20px",borderRadius:"10px",margin:"0 auto"}}>
      <thead  style={{border:"1px dotted black",width:"50%",padding:"20px",borderRadius:"10px",margin:"0 auto"}}>
        <tr  style={{border:"1px dotted black",width:"50%",padding:"20px",borderRadius:"10px",margin:"0 auto"}}>
          <th style={{backgroundColor:"black",color:"white"}}>Roll Number</th>
          <th style={{backgroundColor:"black",color:"white"}}>Name</th>
          <th style={{backgroundColor:"black",color:"white"}}>City Name</th>
          <th style={{backgroundColor:"black",color:"white"}}>Fees</th>
        </tr>
      </thead>
      <tbody  style={{border:"1px dotted black",width:"50%",padding:"20px",borderRadius:"10px",margin:"0 auto"}}>
        {ans}
      </tbody>
    </Table>
        </>
    )
}
export default Display;