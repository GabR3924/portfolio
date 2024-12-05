'use client'
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Nav from '@/Components/Nav';
import Hero from './Hero/Hero';
import Experience from './Exp/Exp';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar si está cargando

  useEffect(() => {
    // Simula un retraso en la carga de la página
    const timer = setTimeout(() => {
      setIsLoading(false); // Después de 2 segundos, marca la carga como completada
    }, 2000);

    return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta
  }, []);

  return (
    <div className={styles.page}>
      {/* Mostrar la animación de carga mientras isLoading es true */}
      {isLoading ? (
        <div className={styles.loader}>
          <img src="/logo.png" alt="Cargando..." className={styles.spinner} />
        </div>
      ) : (
        <>
          <Nav />
          <Hero />
          <Experience />

          {/* Fondo animado con círculos */}
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
