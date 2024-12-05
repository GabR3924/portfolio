import styles from './page.module.css';
import Nav from '@/Components/Nav';
import Hero from './Hero/Hero';
import Experience from './Exp/Exp';
import CanvasStars from '../Components/Canvas'; // Importar directamente

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav />
      <Hero />
      <Experience />

      {/* Fondo animado con estrellas */}
      <CanvasStars />

      {/* Elementos adicionales */}
      <div className={styles.circleContainer}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}
