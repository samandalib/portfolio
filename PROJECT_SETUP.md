# Project Setup Record

## Project Structure

- **app/**
  - Main application pages and layouts
  - Subfolders:
    - `work/` (case studies grid)
    - `about/` (bio, experience, links)
    - `contact/` (email/social links)
    - `case-study/` (individual case study pages)
- **components/**
  - For reusable UI components (currently empty)
- **content/**
  - For MDX/markdown content (currently empty)

## Key Configurations

- **Tailwind CSS**
  - Installed and configured (v3.3.3)
  - Imports added to `app/globals.css`
  - `tailwind.config.js` scans all relevant folders for class names
- **Framer Motion & Lottie**
  - Installed for microinteractions and animations
- **MDX Support**
  - Installed and enabled in `next.config.js` for markdown-based content
- **PostCSS**
  - Configured for Tailwind and autoprefixer

## Next.js App Directory
- Using the new app directory structure (Next.js 13+)

---

> This file will be updated as the project evolves. Add new sections for features, content, or configuration changes as needed. 