'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';

export default function Hero() {
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftImage = leftImageRef.current;
    const rightImage = rightImageRef.current;

    if (leftImage) {
      gsap.to(leftImage, {
        rotation: 360,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    if (rightImage) {
      gsap.to(rightImage, {
        rotation: -360,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === '.hero') {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <h1 className="hero-title" aria-label="Tam Le">
        TAM LE
      </h1>

      <div
        ref={leftImageRef}
        className="spinning-image left"
        data-speed="0.8"
        aria-hidden="true"
      >
        <Image
          src="/elements/i love coding.png"
          alt="I love coding badge"
          width={180}
          height={180}
          priority
          unoptimized
        />
      </div>

      <div
        ref={rightImageRef}
        className="spinning-image right"
        data-speed="0.8"
        aria-hidden="true"
      >
        <Image
          src="/elements/I love creating!.png"
          alt="I love creating badge"
          width={180}
          height={180}
          priority
          unoptimized
        />
      </div>

      <div className="hero-char" data-speed="0.5">
        <Image
          src="/elements/char 2.png"
          alt="Character illustration"
          width={400}
          height={600}
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
