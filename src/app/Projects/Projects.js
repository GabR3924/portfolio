"use client";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Projects.module.css";
import { Grid, Box } from "@mui/material";
import { experienceData } from "./experienceData";
import Link from "next/link";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.experience}>
      <div className={styles.header}>
        <h2 className={styles.title}>EXPERIENCE</h2>
        {/* <h3 className={styles.subtitle}>HISTORY</h3> */}
      </div>
      <div className={styles.experienceGrid}>
        {experienceData.map((experience, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.companyInfo}>
              <h4 className={styles.companyName}>{experience.companyName}</h4>
              <p className={styles.position}>{experience.position}</p>
            </div>
            <div className={styles.dateLocation}>
              <p>{experience.date}</p>
              {/* <p>{experience.location}</p> */}
            </div>
            <ul className={styles.responsibilities}>
              {experience.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Botón de enlace */}
            {experience.link && (
              <div className={styles.linkContainer}>
                <a 
                  href={experience.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.linkButton}
                >
                  Ver proyecto <FaArrowRight style={{ marginLeft: '5px' }} />
                </a>
              </div>
            )}

            {/* Contenedor de grid para imágenes */}
            {experience.images && experience.images.length > 0 && (
              <Grid
                container
                spacing={1}
                sx={{
                  display: "flex",
                  justifyContent: "center", // Centra horizontalmente el grid
                  width: "100%", // Asegura que ocupe el ancho completo
                  margin: "0 auto", // Centra el contenedor dentro de su padre
                }}
              >
                {experience.images.map((image, imgIndex) => (
                  <Grid
                    item
                    key={imgIndex}
                    xs={12} // Ocupa el ancho completo en dispositivos pequeños
                    sm={6} // Ocupa la mitad del ancho en dispositivos medianos
                    md={4} // Distribución en 1/3 del ancho en pantallas medianas
                    lg={image.cols ? image.cols * 3 : 4} // Uso personalizado en pantallas grandes
                    sx={{
                      gridRow: `span ${image.rows || 1}`,
                      zIndex: "3",
                    }}
                  >
                    <Box
                      component="img"
                      src={image.src}
                      alt={image.alt || "Project image"}
                      sx={{
                        width: "130%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "8px",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;