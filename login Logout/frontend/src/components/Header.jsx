import React, { useState, useEffect, useRef } from 'react';
import { FaUser } from 'react-icons/fa';
import { Container, Navbar, Nav, Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { message } from 'antd';
import * as THREE from 'three';
import styled from 'styled-components';

const AnimatedFormControl = styled(Form.Control)`
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
`;

const Header = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({});
  const formRef = useRef(null);
  const scene = useRef(new THREE.Scene());
  const camera = useRef(new THREE.PerspectiveCamera(75, 1, 0.1, 1000));
  const renderer = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    if (show && formRef.current) {
      const formElement = formRef.current;
      if (!renderer.current) {
        renderer.current = new THREE.WebGLRenderer({ alpha: true });
      }
      renderer.current.setSize(formElement.clientWidth, formElement.clientHeight);
      formElement.appendChild(renderer.current.domElement);

      // Create particles
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];
      for (let i = 0; i < 1000; i++) {
        positions.push((Math.random() - 0.5) * 10);
        positions.push((Math.random() - 0.5) * 10);
        positions.push((Math.random() - 0.5) * 10);
        colors.push(Math.random(), Math.random(), Math.random());
      }
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: true });
      particles.current = new THREE.Points(geometry, material);
      scene.current.add(particles.current);

      camera.current.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        particles.current.rotation.x += 0.001;
        particles.current.rotation.y += 0.001;
        renderer.current.render(scene.current, camera.current);
      };

      animate();
    }

    return () => {
      if (renderer.current && renderer.current.domElement && renderer.current.domElement.parentNode) {
        renderer.current.domElement.parentNode.removeChild(renderer.current.domElement);
      }
    };
  }, [show]);

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
      message.success(response.data.msg);
      handleClose();
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