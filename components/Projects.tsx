'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';
import { projects } from '@/data/projects';

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const section = sectionRef.current;

    if (!scrollContainer || !section) return;

    const cards = scrollContainer.querySelectorAll('.project-card');
    const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollWidth + window.innerHeight}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(scrollContainer, {
      x: -scrollWidth,
      ease: 'none',
    });

    // Animate cards on scroll
    cards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const cardProgress = (progress - index * 0.15) / 0.3;
            const clampedProgress = Math.max(0, Math.min(1, cardProgress));
            gsap.set(card, {
              opacity: clampedProgress,
              y: 100 * (1 - clampedProgress),
            });
          },
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="projects" id="projects">
      <div className="projects-header">
        <h2>My Projects</h2>
      </div>

      <div ref={scrollContainerRef} className="projects-scroll-container">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <article className="project-card">
      <div className="project-number">{project.number}</div>
      <h3 className="project-title">{project.title}</h3>

      <div className="project-media">
        {project.videoSrc ? (
          <>
            <video
              ref={videoRef}
              className="project-video"
              poster={project.posterSrc}
              onEnded={handleVideoEnd}
              preload="none"
              playsInline
              controls={isPlaying}
            >
              <source src={project.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div
                className="play-overlay hoverable"
                onClick={handlePlayVideo}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handlePlayVideo();
                  }
                }}
                aria-label="Play video"
              />
            )}
          </>
        ) : (
          <Image
            src={project.posterSrc}
            alt={`${project.title} screenshot`}
            fill
            className="project-poster"
            unoptimized
          />
        )}
      </div>

      <div className="tech-stack">
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-card hoverable">
            {tech}
          </span>
        ))}
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-buttons">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            className="project-btn hoverable"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
        {project.exploreMore && (
          <a
            href={project.exploreMore}
            className="project-btn hoverable"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore More
          </a>
        )}
      </div>
    </article>
  );
}
