import React from 'react';
import styles from './Exp.module.css';

const Exp = () => {
  return (
    <div className={styles.parent}>
      {/* Lado izquierdo: texto (ocupa .div1) */}
      <div className={styles.div1}>
        <h2>Experiencia</h2>
        <p>
          Aquí va el contenido textual que describe tu experiencia, logros,
          proyectos importantes o cualquier otra cosa que quieras resaltar.
        </p>
      </div>

      {/* Lado derecho: imágenes */}
      <div className={styles.div2}>
        <img src="/cryptoWeb.png" alt="Imagen 1" />
      </div>
      <div className={styles.div3}>
        <img src="/cryptoapp.png" alt="Imagen 2" />
      </div>
    </div>
  );
};

export default Exp;
