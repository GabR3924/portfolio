'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './page.module.css';
import Nav from '@/Components/Nav';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [widthPercentage, setWidthPercentage] = useState(50);
  const projectsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Marca la carga como completada después de 2 segundos
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const projectsElement = projectsRef.current;
      if (!projectsElement) return;

      const rect = projectsElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight;
      const end = windowHeight / 2;

      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

      const newWidth = 50 + progress * 50;
      setWidthPercentage(newWidth);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
              width: `${widthPercentage}%`,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Projects />
          </div>

          {/* Div envoltorio del Footer */}
          <div className={styles.footerWrapper}>
            <Footer />
          </div>

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
