'use client'
import { useState, useEffect } from 'react';
import styles from '../Hero/Hero.module.css';
 
const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia 768 según el tamaño deseado
    };

    // Llamar al efecto y añadir listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Limpiar el listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{isMobile ? 'DEV' : 'DEVELOPER'}</h1>
        <p className={styles.heroSubtitle}>TRANSFORM IDEAS INTO EFFICIENT DIGITAL SOLUTIONS</p>
      </div>
    </section>
  );
};

export default Projects;
