# Deployment Guide

## Quick Start

The application is already configured for static export. To deploy:

```bash
npm run build
```

This generates the `out/` directory containing all static files.

## Deployment Options

### 1. GitHub Pages

#### Option A: Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

#### Option B: Manual Deployment

1. Update `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/your-repo-name',  // Add this
  assetPrefix: '/your-repo-name/',  // Add this
  images: {
    unoptimized: true,
  },
};
```

2. Build:
```bash
npm run build
```

3. Deploy `out/` folder to gh-pages branch

### 2. Vercel (Recommended for Next.js)

1. Connect your GitHub repository to Vercel
2. Vercel auto-detects Next.js and configures build settings
3. Deploy automatically on push

### 3. Netlify

1. Connect repository to Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
3. Deploy

### 4. Cloudflare Pages

1. Connect repository
2. Build settings:
   - Build command: `npm run build`
   - Build output: `out`
3. Deploy

### 5. AWS S3 + CloudFront

```bash
# Install AWS CLI
npm run build
aws s3 sync out/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Environment Configuration

If you need environment variables:

1. Create `.env.local` (not committed to git):
```
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_ANALYTICS_ID=your-id
```

2. Access in code:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## Custom Domain

### GitHub Pages

1. Add `CNAME` file to `public/` directory:
```
yourdomain.com
```

2. Configure DNS:
```
A record: @ -> 185.199.108.153
A record: @ -> 185.199.109.153
A record: @ -> 185.199.110.153
A record: @ -> 185.199.111.153
```

### Other Platforms

Follow platform-specific documentation for custom domain setup.

## Performance Optimization

Already implemented:
- ✅ Static export for fast loading
- ✅ Lazy loading for videos
- ✅ Optimized GSAP animations
- ✅ CSS minification
- ✅ Asset optimization

Additional optimizations:
- Use CDN for video files if they're large
- Enable Gzip/Brotli compression on server
- Add cache headers for static assets

## Testing Before Deployment

```bash
# Build
npm run build

# Serve locally to test
npx serve out

# Open http://localhost:3000
```

## Troubleshooting

### Images not loading
- Ensure all paths start with `/` 
- Check `next.config.ts` basePath matches deployment
- Verify images are in `public/` directory

### Videos not playing
- Check video format (MP4 with H.264 codec)
- Ensure poster images exist
- Test video URLs in browser directly

### Animations not working
- Check console for GSAP errors
- Verify ScrollTrigger is registered
- Test on different devices/browsers

### Blank page
- Check browser console for errors
- Verify all dependencies are installed
- Rebuild: `rm -rf .next out && npm run build`

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works (all links)
- [ ] Images display properly
- [ ] Videos play on click
- [ ] Animations are smooth
- [ ] Mobile responsive
- [ ] Custom cursor works on desktop
- [ ] Contact links work
- [ ] Resume download works
- [ ] SEO meta tags present
- [ ] Favicon displays
- [ ] No console errors

## Monitoring

Consider adding:
- Google Analytics
- Google Search Console
- Sentry for error tracking
- Vercel Analytics (if using Vercel)

## Updates

To update the site:

1. Make changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Commit and push
5. Deployment happens automatically (if CI/CD configured)

## Support

For issues:
1. Check browser console
2. Verify build succeeds locally
3. Test in production mode locally
4. Check deployment logs
