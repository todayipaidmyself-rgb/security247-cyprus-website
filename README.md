# 247 Security Cyprus - Vercel Deployment Guide

A production-ready static marketing website built with React 19, Vite, and Tailwind CSS. Fully optimized for Vercel deployment with zero backend dependencies.

## Quick Start

### 1. Prerequisites
- Node.js 18+ (recommended: 20 LTS)
- pnpm (or npm/yarn)

### 2. Local Development

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:5173)
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Option B: GitHub + Vercel UI (Recommended)
1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

#### Option C: Manual Vercel Configuration
If Vercel doesn't auto-detect, use these settings:

| Setting | Value |
|---------|-------|
| **Framework** | Vite |
| **Build Command** | `pnpm install && pnpm build` |
| **Output Directory** | `dist` |
| **Install Command** | `pnpm install` |
| **Node Version** | 20.x (LTS) |

### 4. Vercel Environment

No environment variables required. All assets are bundled and self-contained.

---

## Project Structure

```
.
├── client/                    # React frontend (Vite root)
│   ├── index.html            # Entry HTML
│   ├── src/
│   │   ├── App.tsx           # Main app routes
│   │   ├── main.tsx          # React entry point
│   │   ├── index.css         # Global styles (Tailwind)
│   │   ├── pages/            # Page components (Home, Services, etc.)
│   │   ├── components/       # Reusable UI components
│   │   ├── lib/              # Utilities (data, constants)
│   │   └── const.ts          # App constants
│   └── public/               # Static assets (bundled into dist/)
│       ├── favicon.ico       # Browser tab icon
│       ├── robots.txt        # Search engine crawlers
│       ├── 247logo.png       # Logo (fallback)
│       ├── images/           # All WebP images
│       └── videos/           # Hero videos and posters
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies
├── pnpm-lock.yaml            # Dependency lock file
├── vercel.json               # Vercel deployment config
└── README.md                 # This file
```

---

## Key Features

### ✅ Performance Optimized
- **Hero videos**: Compressed to 360-570 KB (H.264 MP4)
- **Images**: All converted to WebP format (93% smaller than JPG)
- **Logo**: Optimized WebP (109 KB) with PNG fallback
- **CSS**: Tailwind 4 with automatic purging
- **JS**: Minified and tree-shaken (~900 KB gzipped)

### ✅ SEO Ready
- Comprehensive meta tags (Open Graph, Twitter)
- LocalBusiness structured data (JSON-LD)
- robots.txt for search engines
- Canonical URLs
- Mobile-friendly viewport

### ✅ Animations & Interactivity
- Two-stage hero (logo intro → video) with smooth crossfades
- Infinite looping hero with 3-second logo animation
- Service cards with hover effects
- Smooth page transitions
- Responsive design (mobile-first)

### ✅ Static & Secure
- No backend server required
- No database
- No authentication
- No external APIs
- All assets self-contained
- Ready for CDN caching

---

## Asset Paths

All assets are referenced via absolute paths and bundled into `dist/`:

| Asset | Path | Size | Component |
|-------|------|------|-----------|
| **Hero Video (Home)** | `/videos/hero-video-final.mp4` | 558 KB | TwoStageHero |
| **Hero Video (Services)** | `/videos/services-hero-video.mp4` | 397 KB | TwoStageHero |
| **Hero Video (Monitoring)** | `/videos/monitoring-hero-video.mp4` | 465 KB | TwoStageHero |
| **Hero Posters** | `/videos/hero-poster.jpg` | 5.5 KB | TwoStageHero (fallback) |
| **Logo (WebP)** | `/images/247logo.webp` | 109 KB | Header, Footer, Hero |
| **Logo (PNG)** | `/247logo.png` | 2.4 MB | Fallback for old browsers |
| **Background** | `/images/hero-static-bg.webp` | 204 KB | Hero intro panel |
| **Service Images** | `/images/service-*.webp` | 20-220 KB | Service cards |
| **Favicon** | `/favicon.ico` | 3.1 KB | Browser tab |
| **Robots** | `/robots.txt` | 385 B | Search engines |

---

## Build Output

Production build generates:

```
dist/
├── index.html                (4.7 KB)
├── favicon.ico              (3.1 KB)
├── robots.txt               (385 B)
├── 247logo.png              (2.4 MB)
├── assets/
│   ├── index-{hash}.js      (901 KB minified)
│   └── index-{hash}.css     (128 KB minified)
├── images/                  (all WebP images)
└── videos/                  (all MP4 videos)

Total: ~5.5 MB (production-ready)
```

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules pnpm-lock.yaml dist
pnpm install
pnpm build
```

### Dev Server Won't Start
```bash
# Check port 5173 is not in use
lsof -i :5173

# Use different port
pnpm dev -- --port 3000
```

### Assets Not Loading in Production
- Verify all paths start with `/` (absolute paths)
- Check `dist/` folder contains all assets
- Ensure Vercel's `vercel.json` has correct rewrites

### Routes Not Working on Refresh
- Vercel automatically handles SPA rewrites
- All routes serve `index.html` (configured in `vercel.json`)

---

## Performance Metrics

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari 14+, Chrome Android)

---

## Deployment Checklist

- [ ] Push code to GitHub
- [ ] Connect GitHub repo to Vercel
- [ ] Verify build succeeds (`pnpm build`)
- [ ] Test all routes on production
- [ ] Verify videos load (check Network tab)
- [ ] Test on mobile device
- [ ] Check Lighthouse scores
- [ ] Monitor analytics

---

## Support & Maintenance

### Regular Updates
```bash
# Check for outdated packages
pnpm outdated

# Update dependencies
pnpm update
```

### Adding New Pages
1. Create component in `client/src/pages/NewPage.tsx`
2. Add route in `client/src/App.tsx`
3. Rebuild: `pnpm build`
4. Deploy: `git push` (auto-deploys on Vercel)

### Updating Assets
1. Replace files in `client/public/`
2. Rebuild: `pnpm build`
3. Deploy: `git push`

---

## License

© 2025 247 Security Cyprus. All rights reserved.

---

## Questions?

For Vercel deployment help: [vercel.com/docs](https://vercel.com/docs)
For React/Vite help: [vitejs.dev](https://vitejs.dev)
