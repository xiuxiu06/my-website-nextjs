import { Project } from '@/types';

export const projects: Project[] = [
  {
    number: '01',
    title: 'EcoCart – AI Shopping Extension',
    description: 'A browser extension with AI-powered features that helps users make sustainable shopping decisions by providing eco-friendly alternatives and carbon footprint estimates.',
    videoSrc: '/elements/demo1.mp4',
    posterSrc: '/elements/demo1-poster.png',
    techStack: ['React', 'TypeScript', 'Python', 'TensorFlow', 'Chrome API'],
    liveDemo: '#',
    exploreMore: '#'
  },
  {
    number: '02',
    title: 'Potato Disease AI Classifier',
    description: 'Machine learning application that identifies potato plant diseases from images using convolutional neural networks, helping farmers detect issues early.',
    videoSrc: '/elements/demo2.mp4',
    posterSrc: '/elements/demo2-poster.png',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Docker'],
    liveDemo: '#',
    exploreMore: '#'
  },
  {
    number: '03',
    title: 'Movie Discovery App',
    description: 'A modern web application for discovering and tracking movies with personalized recommendations, reviews, and watchlists powered by TMDB API.',
    videoSrc: '/elements/demo3.mp4',
    posterSrc: '/elements/demo3-poster.png',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'TMDB API'],
    liveDemo: '#',
    exploreMore: '#'
  },
  {
    number: '04',
    title: 'My Personal Portfolio Website',
    description: 'A modern, interactive portfolio showcasing my projects and skills with smooth animations, custom cursor, and engaging visual design.',
    videoSrc: '/elements/demo4.mp4',
    posterSrc: '/elements/demo4-poster.png',
    techStack: ['Next.js', 'TypeScript', 'GSAP', 'CSS3', 'Responsive Design'],
    liveDemo: '#',
    exploreMore: '#'
  },
  {
    number: '05',
    title: 'Recipe-sharing platform',
    description: 'A social platform for food enthusiasts to share, discover, and rate recipes with features like ingredient lists, step-by-step instructions, and community reviews.',
    posterSrc: '/elements/demo5-poster.png',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS S3'],
    liveDemo: '#',
    exploreMore: '#'
  }
];

export const contactInfo = {
  email: 'tamle@example.com',
  github: 'https://github.com/tamle',
  linkedin: 'https://linkedin.com/in/tamle',
  behance: 'https://behance.net/tamle'
};
