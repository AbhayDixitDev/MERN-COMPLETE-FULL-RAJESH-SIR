import React, { useState, useEffect, useRef } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import * as THREE from 'three';
import axios from "axios";
import { message } from "antd";

const Registration = () => {
  const [input, setInput] = useState({});
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    if (sceneRef.current) {
      sceneRef.current.appendChild(renderer.domElement);
    }

    const formWidth = 400;
    const formHeight = 500;
    const lineCount = 100;
    let color = new THREE.Color();

    const createDiamondLine = () => {
      const geometry = new THREE.BufferGeometry();
      const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-formWidth/2, 0, 0),
        new THREE.Vector3(0, formHeight/2, (Math.random() - 0.5) * 100),
        new THREE.Vector3(0, -formHeight/2, (Math.random() - 0.5) * 100),
        new THREE.Vector3(formWidth/2, 0, 0)
      );
      const points = curve.getPoints(50);
      geometry.setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.5 });
      return new THREE.Line(geometry, material);
    };

    const lines = [];
    for (let i = 0; i < lineCount; i++) {
      const line = createDiamondLine();
      lines.push(line);
      scene.add(line);
    }

    camera.position.z = 500;

    const animate = () => {
      requestAnimationFrame(animate);
      color.setHSL((Date.now() % 400) / 1000, 1, 0.2);
      lines.forEach(line => {
        line.material.color = color;
        line.rotation.x += 0.003;
        line.rotation.y += 0.003;
        line.rotation.z += 0.003;
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (sceneRef.current && rendererRef.current) {
        sceneRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://localhost:8080/users/registration";
    axios.post(api, input).then(() => {
      message.success("You are successfully registered!");
    });
  };

  return (
    <MDBContainer fluid className="p-0 position-relative" style={{ overflow: 'hidden' }}>
      <div ref={sceneRef} style={{ position: 'absolute', top: "-10%", left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
      <MDBRow className='justify-content-center align-items-center min-vh-100'>
        <MDBCol md='6' className='position-relative'>
          <div className='bg-dark bg-opacity-25 p-4 mx-5 rounded-5' style={{ marginTop: '-150px', border: '2px solid #ff0000', boxShadow: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000' }}>
            <h3 className="fw-bold mb-4 text-center text-light">Diamond Registration</h3>
            <form onSubmit={handleSubmit} style={{margin: '50px 100px', maxWidth: '400px'}}>
              <MDBInput wrapperClass='mb-3' label='Name' type='text' name='name' value={input.name || ''} onChange={handleInput} contrast />
              <MDBInput wrapperClass='mb-3' label='Mobile' type='text' name='mobile' value={input.mobile || ''} onChange={handleInput} contrast />
              <MDBInput wrapperClass='mb-3' label='Email' type='email' name='email' value={input.email || ''} onChange={handleInput} contrast />
              <MDBInput wrapperClass='mb-3' label='Password' type='password' name='password' value={input.password || ''} onChange={handleInput} contrast />
              <MDBBtn className='w-100 mb-3' size='sm' type='submit' color='danger'>Register</MDBBtn>
            </form>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Registration;