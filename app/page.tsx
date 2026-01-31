'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import RunningBanner from '@/components/RunningBanner';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <main id="main-content">
        <Hero />
        <RunningBanner />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
