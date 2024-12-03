import React, { useState, useEffect, useRef } from 'react';
import { FaUser } from 'react-icons/fa';
import { Container, Navbar, Nav, Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { message } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '../threejs/ParticleBackground';

const AnimatedFormControl = styled(Form.Control)`
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
`;



const Header = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({});
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(prevInput => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/users/usercheck', input);
      const { name, email } = response.data.Data[0];
      localStorage.setItem('username', name);
      localStorage.setItem('email', email);
      message.success(response.data.msg);
      handleClose();
      navigate('/admin');
    } catch (error) {
      message.error(error.response?.data?.msg || 'An error occurred');
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link onClick={handleShow}>
                <FaUser /> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <ParticleBackground formRef={formRef} />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <AnimatedFormControl
                type="email"
                placeholder="Enter email"
                name="email"
                value={input.email || ''}
                onChange={handleInput}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <AnimatedFormControl
                type="password"
                placeholder="Password"
                name="password"
                value={input.password || ''}
                onChange={handleInput}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;