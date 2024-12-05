"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir y cerrar el menú

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) {
        setHidden(true); // Ocultar navbar cuando se hace scroll hacia abajo
      } else {
        setHidden(false); // Mostrar navbar cuando se hace scroll hacia arriba
      }

      if (window.scrollY > 50) {
        setScrolled(true); // Cambiar fondo y texto al hacer scroll
      } else {
        setScrolled(false); // Restaurar los estilos originales al estar arriba
      }

      setPrevScrollY(window.scrollY); // Actualizar la posición del scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  // Función para alternar el menú
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <nav
      className={`${styles.navbar} ${hidden ? styles.hidden : ""} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      
      <div className={styles.logo}>
        <img src="./logo.png" alt="Logo" className={styles.logoImage} />
      </div>
      {/* Icono de hamburguesa o X */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className={styles.closeIcon}>X</span> // Cuando el menú está abierto
        ) : (
          <span className={styles.hamburgerIcon}>☰</span> // Icono de hamburguesa
        )}
      </div>
      <div className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
        {isMenuOpen && ( // Mostrar el ícono de cerrar dentro del menú
          <span className={styles.closeIcon} onClick={toggleMenu}>
            X
          </span>
        )}
        <Link href="#experiencia" className={styles.link}>
          Experiencia
        </Link>
        <Link href="#experiencia" className={styles.link}>
          /
        </Link>
        <Link href="#proyectos" className={styles.link}>
          Proyectos
        </Link>
        <Link href="#experiencia" className={styles.link}>
          /
        </Link>
        <Link href="#contacto" className={styles.link}>
          Contacto
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
