# Portfolio Website

A minimalist, monospace, developer-editorial portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Stack
- React 18
- Vite
- Tailwind CSS v3
- Framer Motion
- IBM Plex Mono via Google Fonts

## Local development

```bash
npm install
npm run dev
```

The app runs at http://localhost:5173 by default.

## Production build

```bash
npm run build
```

## Update placeholder content

Edit the content in these files:
- `src/data/site.ts` — name, handle, role, email, socials, nav labels
- `src/data/projects.ts` — project entries and metadata
- `src/data/skills.ts` — skill tags

## Deploy
- Vercel: connect the repo and deploy the default build output from Vite.
- Netlify: use `npm run build` and publish the `dist` folder.
- GitHub Pages: deploy the built static files using a Vite-compatible hosting setup.

