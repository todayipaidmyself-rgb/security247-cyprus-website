# Static Marketing Website Rebuild - 247 Security Cyprus

## Phase 1: Remove Backend Infrastructure
- [ ] Delete server/ directory (Express, tRPC, database queries)
- [ ] Delete drizzle/ directory (database migrations, schema)
- [ ] Delete storage/ directory (S3 helpers)
- [ ] Remove server-side dependencies from package.json
- [ ] Remove environment variables for backend services

## Phase 2: Convert API Calls to Static Data
- [ ] Remove useAuth() hook and authentication logic
- [ ] Remove all tRPC client calls
- [ ] Remove SEO component (replace with static meta tags in HTML)
- [ ] Remove any form submissions that relied on backend
- [ ] Create static contact form (email link or external service)

## Phase 3: Clean Up Configuration
- [ ] Update package.json (remove server dependencies)
- [ ] Update Vite config (remove server configuration)
- [ ] Remove .env file references
- [ ] Create vercel.json for static deployment
- [ ] Update build scripts

## Phase 4: Test Static Site
- [ ] Run local build and verify no errors
- [ ] Test all pages load correctly
- [ ] Test all links and navigation
- [ ] Test video playback
- [ ] Test responsive design on mobile

## Phase 5: Prepare for Export
- [ ] Create clean project structure
- [ ] Add README.md with deployment instructions
- [ ] Create .gitignore for GitHub
- [ ] Package as ZIP for export
- [ ] Verify ZIP is ready for GitHub + Vercel
