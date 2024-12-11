'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const footerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = footerRef.current;
      if (!footerElement) return;

      const rect = footerElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Cuando el footer comienza a entrar en la pantalla, cambia su estado
      if (rect.top <= windowHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`${styles.footer} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.connect}>
        <h2 className={styles.heading}>Nice to meet you,</h2>
        <h2 className={styles.heading}>Let’s connect.</h2>
        <button className={styles.button}>Book a call</button>
      </div>
      <div className={styles.links}>
        <p>Find me elsewhere on web,</p>
        <div className={styles.linkGroup}>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <a href="mailto:vlockn@gmail.com">garc392004@gmail.com</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>©2024 gabriela rodriguez</p>
      </div>

      <div className={styles.circleContainer}>
        <div className={`${styles.circle} ${styles.circle1}`}></div>
        <div className={`${styles.circle} ${styles.circle2}`}></div>
      </div>
    </footer>
  );
};

export default Footer;