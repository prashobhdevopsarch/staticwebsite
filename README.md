# TestSite — static test site

A tiny, dependency-free static site for testing hosting/CDNs/SSL/CI/CD.

## Structure
- `index.html`, `about.html`, `contact.html`, `404.html`
- `styles.css`, `script.js`
- `assets/` (favicons, images)
- `robots.txt`, `sitemap.xml`

## Quick Start
- Open `index.html` locally, or
- Serve: `python3 -m http.server 8080` then visit `http://localhost:8080`

## Deploy ideas
- **S3 + CloudFront** (AWS), **Azure Static Web Apps**, **Netlify**, **Cloudflare Pages**, **GitHub Pages**

## Edit brand
- Change colors in `:root` CSS variables in `styles.css`
- Update name in HTML headers and footer

© 2025-08-30 TestSite
