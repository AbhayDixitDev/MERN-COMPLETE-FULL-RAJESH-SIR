import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const WatchBackground = () => {
  const mountRef = useRef(null);
  const [font, setFont] = useState(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    const createWallClock = () => {
      const clock = new THREE.Group();

      const faceGeometry = new THREE.CircleGeometry(5, 32);
      const faceMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
      const face = new THREE.Mesh(faceGeometry, faceMaterial);
      clock.add(face);

      const borderGeometry = new THREE.RingGeometry(5, 5.2, 32);
      const borderMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const border = new THREE.Mesh(borderGeometry, borderMaterial);
      clock.add(border);

      const hourHandMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
      const minuteHandMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
      
      const hourHandGeometry = new THREE.BoxGeometry(0.1, 2, 0.1);
      const hourHand = new THREE.Mesh(hourHandGeometry, hourHandMaterial);
      hourHand.position.z = 0.2;
      clock.add(hourHand);

      const minuteHandGeometry = new THREE.BoxGeometry(0.05, 3, 0.05);
      const minuteHand = new THREE.Mesh(minuteHandGeometry, minuteHandMaterial);
      minuteHand.position.z = 0.3;
      clock.add(minuteHand);

      const secondsHandGeometry = new THREE.BoxGeometry(0.05, 4, 0.05);
      const secondsHand = new THREE.Mesh(secondsHandGeometry, minuteHandMaterial);
      secondsHand.position.z = 0.4;
      clock.add(secondsHand);

      return clock;
    };

    const wallClock = createWallClock();
    scene.add(wallClock);
    camera.position.z = 15;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const loader = new FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (loadedFont) => {
      setFont(loadedFont);
    });

    const createText = (text, size, x, y, rotationAngle) => {
      if (!font) return null;
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: size,
        height: 0.1,
      });
      const textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(x, y, 0.1);
      textMesh.rotation.z = rotationAngle;
      return textMesh;
    };

    const addClockNumbers = () => {
      const numbers = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
      numbers.forEach((number, index) => {
        const angle = (index * Math.PI) / 6;
        const x = 4 * Math.sin(angle);
        const y = 4 * Math.cos(angle);
        const text = createText(number, 0.5, x, y, -angle);
        if (text) wallClock.add(text);
      });
    };

    if (font) {
      addClockNumbers();
    }

    let hourHand, minuteHand, secondsHand;

    const animate = () => {
      requestAnimationFrame(animate);

      const now = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
      const indiaTime = new Date(now);
      const hours = indiaTime.getHours();
      const minutes = indiaTime.getMinutes();
      const seconds = indiaTime.getSeconds();

      if (wallClock.children.length > 2) {
        hourHand = wallClock.children[2];
        minuteHand = wallClock.children[3];
        secondsHand = wallClock.children[4];

        hourHand.rotation.z = -((hours % 12 + minutes / 60) / 12) * Math.PI * 2;
        minuteHand.rotation.z = -(minutes / 60) * Math.PI * 2;
        secondsHand.rotation.z = -(seconds / 60) * Math.PI * 2;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [font]);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 500, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default WatchBackground;
