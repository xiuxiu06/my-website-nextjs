'use client';

import { contactInfo } from '@/data/projects';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Location</h3>
          <p>San Francisco, CA</p>
          <p>Available for remote work worldwide</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            <a href={`mailto:${contactInfo.email}`} className="hoverable">
              {contactInfo.email}
            </a>
          </p>
          <p>Open to new opportunities</p>
        </div>

        <div className="footer-section">
          <h3>Fun Fact</h3>
          <p>I can solve a Rubik&apos;s cube in under 2 minutes! 🎲</p>
          <p>Also, I make a mean cup of coffee ☕</p>
        </div>

        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a
              href={contactInfo.linkedin}
              className="social-link hoverable"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href={contactInfo.behance}
              className="social-link hoverable"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
            >
              <i className="bx bxl-behance"></i>
            </a>
            <a
              href={contactInfo.github}
              className="social-link hoverable"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Tam Le. All rights reserved. Built with Next.js & GSAP ✨</p>
      </div>
    </footer>
  );
}
