import React from 'react';
import styles from './ExpReverse.module.css';

const ExpReverse = () => {
  return (
    <div className={styles.parent}>
      {/* Imágenes a la izquierda */}
      <div className={styles.div1}>
        <div className={styles.div2}>
          <img src="/arysapp.png" alt="Imagen 1" />
        </div>
        <div className={styles.div3}>
          <img src="/arysapp.png" alt="Imagen 2" />
        </div>
      </div>

      {/* Texto a la derecha */}
      <div className={styles.div4}>
        <h2>Experiencia Inversa</h2>
        <p>
          Esta es la sección de texto que acompaña a las imágenes mostradas a la izquierda. 
          Puedes usarla para detallar más información, logros o cualquier otro contenido relevante.
        </p>
      </div>
    </div>
  );
};

export default ExpReverse;
