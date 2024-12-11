"use client";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa"; // Añadir esta importación
import styles from "./Projects.module.css";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia 768 según el tamaño deseado
    };

    // Llamar al efecto y añadir listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpiar el listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <li>
            Diseñé e implementé una solución de pago integral utilizando PHP y
            arquitectura MVC.
          </li>
          <li>
            Desarrollé módulos para pagos móviles, tarjetas nacionales y
            tarjetas de crédito, integrando diversas APIs de pago.
          </li>
          <li>
            Diseñé e implementé una solución de pago integral utilizando PHP y
            arquitectura MVC.
          </li>
        </ul>
      </div>
      <button className={styles.viewMore}>
        {" "}
        Ver Más <FaArrowRight />
      </button>
    </section>
  );
};

export default Projects;
