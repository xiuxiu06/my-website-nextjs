export interface Project {
  number: string;
  title: string;
  description: string;
  videoSrc?: string;
  posterSrc: string;
  techStack: string[];
  liveDemo?: string;
  exploreMore?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  behance: string;
}
