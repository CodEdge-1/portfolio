# Ogbe Alexander — Portfolio

One-page developer portfolio for Ogbe Alexander (Full-Stack Developer |
Web & Mobile Application Developer), built with React, TypeScript, Vite
and Tailwind CSS v4.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`, design tokens in `src/index.css`)
- Framer Motion (hero entrance animation only)
- lucide-react (icon set; GitHub icon is a custom inline SVG since
  lucide-react no longer ships brand/logo icons)

## Structure

```
src/
  components/       one component per section (Navbar, Hero, About,
                     Projects, ProjectCard, Skills, Experience, Process,
                     GitHubCTA, Contact, Footer)
  components/icons/ small custom icon components not in lucide-react
  data/portfolio.ts single source of truth for projects, skills,
                     experience, education and contact info
  lib/useReveal.ts  IntersectionObserver hook for the scroll-reveal effect
public/
  favicon.svg, icons.svg
```

All project, experience and skills content lives in `src/data/portfolio.ts`
— edit that file to update copy without touching component markup.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build   # tsc -b && vite build -> outputs to dist/
npm run preview # serve the production build locally
```

## Deployment (Netlify)

`netlify.toml` is already configured:

- Build command: `npm run build`
- Publish directory: `dist`

Connect the repo in Netlify (or drag-and-drop the `dist/` folder after a
local build) and it will deploy as-is — no environment variables or
serverless functions are required. The contact section links to
`mailto:` / GitHub rather than a custom form backend.
