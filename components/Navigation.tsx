'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap-config';

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            // Scrolling down
            gsap.to(nav, { y: -100, duration: 0.3, ease: 'power2.out' });
          } else {
            // Scrolling up
            gsap.to(nav, { y: 0, duration: 0.3, ease: 'power2.out' });
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();

    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav ref={navRef} className="navigation" role="navigation" aria-label="Main navigation">
      <a
        href="#top"
        className="nav-logo hoverable"
        onClick={(e) => scrollToSection(e, '#top')}
        aria-label="Tam Le - Go to top"
      >
        TAM
      </a>

      <button
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <a
            href="#about"
            className="hoverable"
            onClick={(e) => scrollToSection(e, '#about')}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hoverable"
            onClick={(e) => scrollToSection(e, '#projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hoverable"
            onClick={(e) => scrollToSection(e, '#contact')}
          >
            Contact
          </a>
        </li>
        <li>
          <button
            className="contact-btn hoverable"
            onClick={() => {
              closeMenu();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </button>
        </li>
      </ul>
    </nav>
  );
}
