'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './page.module.css';
import Nav from '@/Components/Nav';
import Hero from './Hero/Hero';
import Experience from './Exp/Exp';
import Projects from './Projects/Projects';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar si está cargando
  const [widthPercentage, setWidthPercentage] = useState(50); // Ancho inicial del componente Projects
  const projectsRef = useRef(null); // Referencia para el componente Projects

  useEffect(() => {
    // Simula un retraso en la carga de la página
    const timer = setTimeout(() => {
      setIsLoading(false); // Después de 2 segundos, marca la carga como completada
    }, 2000);

    return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const projectsElement = projectsRef.current;
      if (!projectsElement) return;
  
      const rect = projectsElement.getBoundingClientRect(); // Obtén las dimensiones del componente
      const windowHeight = window.innerHeight;
  
      // Detecta cuando el componente empieza a ser visible (entra desde el borde inferior)
      const start = windowHeight; // Punto en que el componente empieza a entrar (parte inferior de la ventana)
      const end = windowHeight / 2; // Punto en que el efecto debe completarse (mitad de la ventana)
      
      // Calcula el progreso en función de cuánto ha subido el componente
      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
  
      // Ancho dinámico: de 50% a 100% durante el rango de progreso
      const newWidth = 50 + progress * 50; // De 50% a 100%
      setWidthPercentage(newWidth);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Limpia el evento
  }, []);
  

  return (
    <div className={styles.page}>
      {isLoading ? (
        <div className={styles.loader}>
          <img src="/logo.png" alt="Cargando..." className={styles.spinner} />
        </div>
      ) : (
        <>
          <Nav />
          <div className={styles.hero}>
            <Hero />
          </div>
          <div
            ref={projectsRef}
            className={styles.projects}
            style={{
              width: `${widthPercentage}%`, // Ancho progresivo
              marginLeft: 'auto',
              marginRight: 'auto', // Mantener centrado
            }}
          >
            <Projects />
          </div>
          <Experience />
          <div className={styles.circleContainer}>
            <div className={`${styles.circle} ${styles.circle1}`}></div>
            <div className={`${styles.circle} ${styles.circle2}`}></div>
            <div className={`${styles.circle} ${styles.circle3}`}></div>
            <div className={`${styles.circle} ${styles.circle4}`}></div>
            <div className={`${styles.circle} ${styles.circle5}`}></div>
            <div className={`${styles.circle} ${styles.circle6}`}></div>
            <div className={`${styles.circle} ${styles.circle7}`}></div>
          </div>
        </>
      )}
    </div>
  );
}
