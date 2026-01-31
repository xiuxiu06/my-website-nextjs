# TAM LE - Portfolio Website

A modern, interactive portfolio website built with Next.js 15, TypeScript, and GSAP animations. This project showcases projects, skills, and professional information with smooth animations and engaging visual design.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Smooth Animations**: Powered by GSAP with ScrollTrigger and MotionPath plugins
- **Custom Cursor**: Interactive custom cursor with hover effects and click ripples
- **Horizontal Project Scroll**: Immersive project showcase with horizontal scrolling
- **Interactive Physics Grid**: Contact section with mouse-responsive grid cells
- **Running Banner**: Infinite scrolling banner with skills and technologies
- **Motion Path Animation**: Animated SVG path with moving ball in About section
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support
- **Static Export**: Configured for deployment to GitHub Pages or any static hosting

## 📁 Project Structure

```
my-website-nextjs/
├── app/
│   ├── globals.css          # Global styles with CSS variables
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── About.tsx             # About section with SVG animation
│   ├── Contact.tsx           # Contact section with physics grid
│   ├── CustomCursor.tsx      # Custom cursor component
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section with spinning images
│   ├── Navigation.tsx        # Navigation with hide/show on scroll
│   ├── Projects.tsx          # Projects with horizontal scroll
│   └── RunningBanner.tsx     # Infinite scrolling banner
├── data/
│   └── projects.ts           # Project data and contact info
├── lib/
│   └── gsap-config.ts        # GSAP configuration and utilities
├── types/
│   └── index.ts              # TypeScript type definitions
├── public/
│   └── elements/             # Images, videos, and assets
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## 🛠️ Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: CSS3 with CSS Variables
- **Animations**: GSAP 3.14.2 (ScrollTrigger, MotionPathPlugin)
- **Icons**: Boxicons
- **Fonts**: Google Fonts (Modak, Montserrat)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-website-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build

Build the application for production:

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## 🚢 Deployment

### GitHub Pages

1. Update `next.config.ts` with your repository name:
```typescript
basePath: '/your-repo-name',
assetPrefix: '/your-repo-name',
```

2. Build the project:
```bash
npm run build
```

3. Deploy the `out/` directory to GitHub Pages

### Other Static Hosts

The `out/` directory can be deployed to any static hosting service:
- Vercel
- Netlify
- Cloudflare Pages
- AWS S3
- Azure Static Web Apps

## 🎨 Customization

### Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --black: #000000;
  --cream: #fff9e9;
  --green: #9AEBA3;
}
```

### Projects

Edit `data/projects.ts` to add/modify projects:

```typescript
export const projects: Project[] = [
  {
    number: '01',
    title: 'Your Project',
    description: 'Project description...',
    videoSrc: '/elements/demo.mp4',
    posterSrc: '/elements/poster.png',
    techStack: ['React', 'Next.js'],
    liveDemo: 'https://...',
    exploreMore: 'https://...'
  }
];
```

### Contact Information

Update `data/projects.ts`:

```typescript
export const contactInfo = {
  email: 'your-email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  behance: 'https://behance.net/yourusername'
};
```

## 🎯 Key Features Explained

### Custom Cursor

- Only shows on devices with fine pointer (not touch)
- Follows mouse with smooth lerp animation
- Enlarges on hoverable elements
- Creates ripple effect on click

### Navigation

- Fixed position with backdrop blur
- Hides on scroll down, shows on scroll up
- Mobile hamburger menu
- Smooth scroll to sections

### Hero Section

- Large title with parallax character image
- Two spinning images that rotate on scroll
- Fully responsive design

### Running Banner

- Two lines scrolling in opposite directions
- Speed changes based on scroll velocity
- Infinite loop with cloned items

### About Section

- Two-column layout (content + photo)
- SVG with animated motion path
- Ball follows the path infinitely
- Call-to-action buttons

### Projects Section

- Pinned header during scroll
- Horizontal scroll triggered by vertical scroll
- Video playback with play overlay
- Tech stack cards with 3D flip on hover
- Lazy loading for videos

### Contact Section

- Interactive grid that responds to mouse
- Cells move away from cursor
- Click animation scatters and resets grid
- Contact information overlay

### Footer

- Location and contact info
- Fun facts section
- Social media links with icons

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Skip to content link
- Focus states on all interactive elements
- Screen reader friendly
- High contrast colors

## 📱 Responsive Design

Breakpoints:
- Mobile: < 480px
- Tablet: < 768px
- Desktop: > 768px

All sections adapt layouts for different screen sizes.

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (after build)

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Tam Le**

- GitHub: [@tamle](https://github.com/tamle)
- LinkedIn: [Tam Le](https://linkedin.com/in/tamle)
- Behance: [Tam Le](https://behance.net/tamle)

## 🙏 Acknowledgments

- GSAP for amazing animation library
- Next.js team for the excellent framework
- Boxicons for the icon set
- Google Fonts for typography

---

Built with ❤️ using Next.js, TypeScript, and GSAP
