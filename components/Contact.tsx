'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap-config';
import { contactInfo } from '@/data/projects';

export default function Contact() {
  const gridRef = useRef<HTMLDivElement>(null);
  const cellsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Calculate grid dimensions
    const cellSize = 50;
    const cols = Math.ceil(window.innerWidth / cellSize);
    const rows = Math.ceil(window.innerHeight / cellSize);

    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    // Create grid cells
    cellsRef.current = [];
    grid.innerHTML = '';

    for (let i = 0; i < rows * cols; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      grid.appendChild(cell);
      cellsRef.current.push(cell);
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cellsRef.current.forEach((cell) => {
        const rect = cell.getBoundingClientRect();
        const cellX = rect.left + rect.width / 2;
        const cellY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(mouseX - cellX, 2) + Math.pow(mouseY - cellY, 2)
        );

        if (distance < 150) {
          const angle = Math.atan2(mouseY - cellY, mouseX - cellX);
          const force = (150 - distance) / 150;
          const moveX = Math.cos(angle) * force * 20;
          const moveY = Math.sin(angle) * force * 20;

          gsap.to(cell, {
            x: -moveX,
            y: -moveY,
            duration: 0.3,
            ease: 'power2.out',
          });

          cell.classList.add('active');
        } else {
          gsap.to(cell, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
          });

          cell.classList.remove('active');
        }
      });
    };

    const handleClick = () => {
      cellsRef.current.forEach((cell) => {
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;

        gsap.to(cell, {
          x: randomX,
          y: randomY,
          duration: 0.6,
          ease: 'power2.out',
          onComplete: () => {
            gsap.to(cell, {
              x: 0,
              y: 0,
              duration: 1,
              ease: 'elastic.out(1, 0.5)',
            });
          },
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    grid.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      grid.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <section className="contact" id="contact">
      <div ref={gridRef} className="physics-grid" aria-hidden="true" />

      <div className="contact-content">
        <div className="contact-card">
          <h2>Let&apos;s Connect</h2>
          <p className="contact-subtitle">
            Have a project in mind? Let&apos;s work together!
          </p>

          <div className="contact-links">
            <a
              href={`mailto:${contactInfo.email}`}
              className="contact-link hoverable"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-envelope"></i>
              {contactInfo.email}
            </a>

            <a
              href={contactInfo.github}
              className="contact-link hoverable"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
              GitHub
            </a>

            <a
              href={contactInfo.linkedin}
              className="contact-link hoverable"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
              LinkedIn
            </a>

            <a
              href={contactInfo.behance}
              className="contact-link hoverable"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-behance"></i>
              Behance
            </a>
          </div>

          <p className="click-prompt">Click anywhere to see the magic ✨</p>
        </div>
      </div>
    </section>
  );
}
