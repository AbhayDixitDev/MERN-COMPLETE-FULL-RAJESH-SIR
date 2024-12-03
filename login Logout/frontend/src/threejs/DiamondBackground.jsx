import * as THREE from 'three';
import { useRef, useEffect } from 'react';

const DiamondBackground = () => {
    const mountRef = useRef(null);
  
    useEffect(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
  
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current?.appendChild(renderer.domElement);
  
      const geometry = new THREE.IcosahedronGeometry(10, 0);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(Math.random(), Math.random(), Math.random()),
        specular: new THREE.Color(Math.random(), Math.random(), Math.random()),
        shininess: 100,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide
      });
      const diamond = new THREE.Mesh(geometry, material);
  
      scene.add(diamond);
      camera.position.z = 30;
  
      const light1 = new THREE.PointLight(0xff0000, 1, 100);
      light1.position.set(20, 0, 20);
      scene.add(light1);
  
      const light2 = new THREE.PointLight(0x00ff00, 1, 100);
      light2.position.set(-20, 0, 20);
      scene.add(light2);
  
      const light3 = new THREE.PointLight(0x0000ff, 1, 100);
      light3.position.set(0, 20, 20);
      scene.add(light3);
  
      const animate = () => {
        requestAnimationFrame(animate);
        diamond.rotation.x += 0.005;
        diamond.rotation.y += 0.005;
        renderer.render(scene, camera);
      };
  
      animate();
  
      return () => {
        mountRef.current?.removeChild(renderer.domElement);
      };
    }, []);
  
    return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
  };

  export default DiamondBackground