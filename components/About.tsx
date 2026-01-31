'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, MotionPathPlugin, ScrollTrigger } from '@/lib/gsap-config';

export default function About() {
  const ballRef = useRef<SVGCircleElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ball = ballRef.current;
    const path = pathRef.current;

    if (ball && path) {
      gsap.to(ball, {
        duration: 8,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
        },
      });

      // Animate path opacity instead of drawing
      gsap.from(path, {
        opacity: 0,
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.about',
          start: 'top 60%',
        },
      });
    }
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>
            Hello, I&apos;m <span className="highlight">Tam!</span>
          </h2>
          <p>
            I&apos;m a full-stack developer and designer passionate about creating beautiful,
            functional web experiences. With expertise in React, Next.js, and modern web
            technologies, I bring ideas to life through clean code and thoughtful design.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
            to open-source projects, or working on creative side projects. I believe in the power
            of technology to solve real-world problems and create meaningful connections.
          </p>
          <div className="about-buttons">
            <a href="#contact" className="btn btn-primary hoverable">
              Contact Me
            </a>
            <a
              href="/elements/Le_Tam_Resume_2026.pdf"
              download
              className="btn btn-secondary hoverable"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="about-photo">
          <svg
            className="about-svg"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={pathRef}
              d="M50,200 Q50,50 200,50 T350,200 Q350,350 200,350 T50,200 Z"
              stroke="var(--green)"
              strokeWidth="3"
              fill="none"
            />
            <circle ref={ballRef} className="svg-ball" r="10" />
          </svg>
          <Image
            src="/elements/Tam.png"
            alt="Tam Le portrait"
            width={500}
            height={500}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
