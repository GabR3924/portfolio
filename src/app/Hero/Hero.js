"use client";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import styles from "./Hero.module.css";

const Hero = () => {
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
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div>
          <h1 className={styles.heroTitle}>
            I&apos;m Gabriela <br /> Rodriguez.
          </h1>
          <p className={styles.heroSubtitle}>
            Designing purposeful products with meticulous detail, shaping the
            future of after-school virtual spaces at Ender.
          </p>
        </div>

        <div className={styles.projects}>
          <h3 className={styles.projectsTitle}>Selected Projects</h3>
          <ul className={styles.projectsList}>
            <li>StartGlobal</li>
            <li>Payper</li>
            <li>Vipline</li>
            <li>Metafy</li>
            <li>Fleetsu</li>
          </ul>
        </div>
      </div>

      {/* Galería deslizante */}
      <Box className={styles.heroFooter} component="div">
        <div className={styles.slider}>
          <div className={styles.sliderTrack}>
            <span>Based in Caracas, Venezuela</span>
            <span>Currently Tech at Gocast</span>
            <span>2+ years of experience</span>
            <span>Pushing pixels remotely</span>
            <span>Passionate about innovative tech solutions</span>
            <span>Expert in front-end development</span>
            <span>Advocate for clean and efficient code</span>
            <span>Collaborating with global teams</span>
            <span>Always learning and evolving</span>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Hero;
