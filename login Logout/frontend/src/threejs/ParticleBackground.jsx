
import * as THREE from 'three';
import { useRef, useEffect } from 'react';

const ParticleBackground = ({ formRef }) => {
    const scene = useRef(new THREE.Scene());
    const camera = useRef(new THREE.PerspectiveCamera(75, 1, 0.1, 1000));
    const renderer = useRef(null);
    const particles = useRef(null);
  
    useEffect(() => {
      const formElement = formRef.current;
      if (!formElement) return;
  
      if (!renderer.current) {
        renderer.current = new THREE.WebGLRenderer({ alpha: true });
      }
      renderer.current.setSize(formElement.clientWidth, formElement.clientHeight);
      formElement.appendChild(renderer.current.domElement);
  
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
        if (particles.current) {
          particles.current.rotation.x += 0.001;
          particles.current.rotation.y += 0.001;
        }
        renderer.current.render(scene.current, camera.current);
      };
  
      animate();
  
      return () => {
        if (renderer.current && renderer.current.domElement && renderer.current.domElement.parentNode) {
          renderer.current.domElement.parentNode.removeChild(renderer.current.domElement);
        }
      };
    }, [formRef]);
  
    return null;
  };

  export default ParticleBackground;