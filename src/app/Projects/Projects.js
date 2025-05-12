"use client";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Projects.module.css";
import { Grid, Box } from "@mui/material";

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

  const experienceData = [
    {
      companyName: "GOCAST",
      position: "Full Stack Dev",
      date: "MAY 2024 - ACTUALIDAD",
      location: "CARACAS - VENEZUELA",
      responsibilities: [
        "Diseñé e implementé una solución de pago integral utilizando PHP y arquitectura MVC.",
        "Desarrollé módulos para pagos móviles, tarjetas nacionales y tarjetas de crédito, integrando diversas APIs de pago.",
        "Optimicé el rendimiento general de la plataforma mediante refactorización del backend.",
      ],
    },
    {
      companyName: "TechCorp",
      position: "Backend Developer",
      date: "JAN 2023 - MAY 2024",
      location: "REMOTE",
      responsibilities: [
        "Creé microservicios escalables para procesamiento de datos.",
        "Desarrollé y documenté APIs RESTful para integraciones de terceros.",
        "Implementé autenticación segura con OAuth2.",
      ],
    },
  ];

  const images = [
    {
      src: "https://via.placeholder.com/600x400", // Imagen de ejemplo
      alt: "Project 1",
      cols: 1,
      rows: 2,
    },
    {
      src: "https://via.placeholder.com/400x600", // Imagen de ejemplo
      alt: "Project 2",
      cols: 2,
      rows: 1,
    },
    {
      src: "https://via.placeholder.com/600x600", // Imagen de ejemplo
      alt: "Project 3",
      cols: 2,
      rows: 2,
    },
    {
      src: "https://via.placeholder.com/400x400", // Imagen de ejemplo
      alt: "Project 4",
      cols: 1,
      rows: 1,
    },
  ];
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
              {/* <p>{experience.location}</p>            */}
            </div>

            <ul className={styles.responsibilities}>
              {experience.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Contenedor de grid */}
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center", // Centra horizontalmente el grid
                width: "100%", // Asegura que ocupe el ancho completo
                margin: "0 auto", // Centra el contenedor dentro de su padre
              }}
            >
              {images.map((image, index) => (
                <Grid
                  item
                  key={index}
                  xs={12} // Ocupa el ancho completo en dispositivos pequeños
                  sm={6} // Ocupa la mitad del ancho en dispositivos medianos
                  md={4} // Distribución en 1/3 del ancho en pantallas medianas
                  lg={image.cols * 3} // Uso personalizado en pantallas grandes
                  sx={{
                    gridRow: `span ${image.rows}`,
                    zIndex: "3",
                  }}
                >
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
