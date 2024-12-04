// components/Hero.js

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>DEVELOPER</h1>
        <p className={styles.heroSubtitle}>TRANSFORM IDEAS INTO EFFICIENT DIGITAL SOLUTIONS</p>
      </div>
    </section>
  );
};

export default Hero;
