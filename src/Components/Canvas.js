'use client'; // Declarar que este componente debe renderizarse en el cliente

import './stars.css';
import { useEffect } from 'react';

export default function CanvasStars() {
  useEffect(() => {
    const numStars = 300; // Número de estrellas
    const container = document.querySelector('.starry-background');

    // Crear estrellas
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
      star.style.top = `${Math.random() * 100}vh`; // Posición inicial aleatoria
      star.style.animationDuration = `${Math.random() * 5 + 5}s`; // Variar velocidad
      star.style.animationDelay = `${Math.random() * 4}s`; // Diferentes inicios
      container.appendChild(star);
    }
  }, []);

  return <div className="starry-background"></div>;
}
