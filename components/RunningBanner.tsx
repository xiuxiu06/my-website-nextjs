'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';

export default function RunningBanner() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;

    if (line1) {
      // Clone items for infinite scroll
      const line1Items = line1.children;
      const line1Width = Array.from(line1Items).reduce(
        (width, item) => width + (item as HTMLElement).offsetWidth,
        0
      );

      // Clone and append
      line1.innerHTML += line1.innerHTML;

      gsap.to(line1, {
        x: -line1Width,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });

      ScrollTrigger.create({
        trigger: '.running-banner',
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = self.getVelocity() / 1000;
          gsap.to(line1, {
            timeScale: 1 + velocity,
            duration: 0.5,
          });
        },
      });
    }

    if (line2) {
      // Clone items for infinite scroll
      const line2Items = line2.children;
      const line2Width = Array.from(line2Items).reduce(
        (width, item) => width + (item as HTMLElement).offsetWidth,
        0
      );

      // Clone and append
      line2.innerHTML += line2.innerHTML;

      gsap.to(line2, {
        x: line2Width,
        duration: 25,
        ease: 'none',
        repeat: -1,
      });

      ScrollTrigger.create({
        trigger: '.running-banner',
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = self.getVelocity() / 1000;
          gsap.to(line2, {
            timeScale: 1 - velocity,
            duration: 0.5,
          });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === '.running-banner') {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section className="running-banner" aria-label="Skills showcase">
      <div ref={line1Ref} className="banner-line">
        <span className="banner-text">Design</span>
        <span className="banner-text">Code</span>
        <span className="banner-text">Create</span>
        <span className="banner-text">Design</span>
        <span className="banner-text">Code</span>
        <span className="banner-text">Create</span>
      </div>
      <div ref={line2Ref} className="banner-line">
        <i className="bx bxl-react banner-icon" aria-label="React"></i>
        <i className="bx bxl-javascript banner-icon" aria-label="JavaScript"></i>
        <i className="bx bxl-html5 banner-icon" aria-label="HTML5"></i>
        <i className="bx bxl-css3 banner-icon" aria-label="CSS3"></i>
        <i className="bx bxl-python banner-icon" aria-label="Python"></i>
        <i className="bx bxs-file-c banner-icon" aria-label="C"></i>
        <i className="bx bxl-figma banner-icon" aria-label="Figma"></i>
      </div>
    </section>
  );
}
