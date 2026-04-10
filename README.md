
## Creative Portfolio Website (Shreya)

A fast, modern, single-page portfolio built with **React + Vite + Tailwind CSS**, featuring:

- **Fixed top navigation** with active-section highlight
- **Smooth anchor scrolling** between sections
- **Animated hero** (terminal vibe) + subtle background motion
- Optional **cursor FX** (auto-disabled on touch + reduced motion)

### Tech stack

- **Vite 6** + **React 18**
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **Motion** (`motion/react`)
- **Lucide** icons

### Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

### Customize content

Most portfolio content lives in:

- `src/app/data/portfolio.ts`

Update your:
- name/title/location
- experience entries
- projects
- certifications
- links

### Navigation / section anchors

The navbar links scroll to section `id`s. Sections are defined in:

- `src/app/components/*`

If you add a new section, give it an `id` and add a corresponding link in:

- `src/app/components/Navbar.tsx`

### Deploying (GitHub Pages)

This repo is set up like a typical GitHub Pages site (served from the `main` branch in many setups).
Your site URL will look like:

- `https://<username>.github.io/<repo>/`

If you use a different Pages configuration (e.g., `gh-pages` branch or `/docs`), update it in the GitHub repo settings.

### Credits

Initial design source (Figma): `https://www.figma.com/design/UJu4nA4SRPW864aMUH47qZ/Creative-Portfolio-Website`
  