import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import DiamondBackground from '../threejs/DiamondBackground';


const Registration = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = "http://localhost:8080/users/registration";
      await axios.post(api, formData);
      alert("You are successfully registered!!");
      setShowForm(false);
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  }

  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      <DiamondBackground />
      <MDBContainer className="my-5 d-flex justify-content-center align-items-center" style={{minHeight: '50vh'}}>
        {!showForm ? (
          <MDBBtn onClick={toggleForm}>Register Now</MDBBtn>
        ) : (
          <MDBRow>
            <MDBCol md="12">
              <MDBCard>
                <MDBCardBody>
                  <form onSubmit={handleSubmit}>
                    <MDBInput className='mb-4' type='text' name='name' label='Name' onChange={handleInput} />
                    <MDBInput className='mb-4' type='text' name='mobile' label='Mobile' onChange={handleInput} />
                    <MDBInput className='mb-4' type='email' name='email' label='Email address' onChange={handleInput} />
                    <MDBInput className='mb-4' type='password' name='password' label='Password' onChange={handleInput} />
                    <MDBBtn type='submit' block className='mb-4'>Register</MDBBtn>
                    <MDBBtn color='secondary' onClick={toggleForm} block>Cancel</MDBBtn>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        )}
      </MDBContainer>
    </>
  );
}

export default Registration;
