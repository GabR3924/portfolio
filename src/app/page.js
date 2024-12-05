'use client';

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import styles from "./page.module.css";
import Nav from "@/Components/Nav";
import Hero from "./Hero/Hero";
import Experience from "./Exp/Exp";

function AnimatedStars() {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      // Hacemos que las estrellas roten lentamente
      starsRef.current.rotation.y += 0.0005;
      starsRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
    </group>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav />
      <Hero />
      <Experience />

      {/* Fondo animado 3D con estrellas */}
      <Canvas style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
        <AnimatedStars />
      </Canvas>

      {/* Agregamos los divs circulares para el efecto de luz */}
      <div className={styles.circleContainer}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}
