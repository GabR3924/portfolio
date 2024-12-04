import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/Components/Nav";
import Hero from "./Hero/Hero";
import Experience from "./Exp/Exp";

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav />
      <Hero />
      <Experience />
      
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
