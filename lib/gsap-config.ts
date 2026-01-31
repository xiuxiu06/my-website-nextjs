import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register GSAP plugins (only free plugins)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(
    ScrollTrigger,
    MotionPathPlugin
  );
}

export { gsap, ScrollTrigger, MotionPathPlugin };

// Utility: Fade in animation
export const fadeIn = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay,
    ease: 'power3.out'
  });
};

// Utility: Slide in from left
export const slideInLeft = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out'
  });
};

// Utility: Slide in from right
export const slideInRight = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out'
  });
};

// Utility: Scale animation
export const scaleIn = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.from(element, {
    scale: 0,
    duration: 0.8,
    delay,
    ease: 'back.out(1.7)'
  });
};

export default gsap;
