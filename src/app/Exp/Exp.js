// components/Experience.js
import { FaArrowRight } from 'react-icons/fa';
import styles from './Exp.module.css';

const Experience = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.header}>
        <h2 className={styles.title}>EXPERIENCE</h2>
        <h3 className={styles.subtitle}>HISTORY</h3>
      </div>

      <div className={styles.experienceDetails}>
        <div className={styles.companyInfo}>
          <h4 className={styles.companyName}>GOCAST</h4>
          <p className={styles.position}>Full Stack Dev</p>
        </div>

        <div className={styles.dateLocation}>
          <p className={styles.date}>MAY 2024 - ACTUALIDAD</p>
          <p className={styles.location}>CARACAS - VENEZUELA</p>
        </div>

        <ul className={styles.responsibilities}>
          <li>Diseñé e implementé una solución de pago integral utilizando PHP y arquitectura MVC.</li>
          <li>Desarrollé módulos para pagos móviles, tarjetas nacionales y tarjetas de crédito, integrando diversas APIs de pago.</li>
          <li>Diseñé e implementé una solución de pago integral utilizando PHP y arquitectura MVC.</li>
        </ul>

      </div>
        <button className={styles.viewMore}>  Ver Más <FaArrowRight />
        </button>
    </section>
  );
};

export default Experience;
