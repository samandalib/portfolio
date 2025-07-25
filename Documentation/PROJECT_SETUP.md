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

## Global Font Usage

- **Only two fonts are used sitewide:**
  - **Bodoni Moda**: For all headings and large text (applied via `font-heading` utility and CSS variable `--font-bodoni`).
  - **Manrope**: For all body, small, and default text (applied via `font-sans` utility and CSS variable `--font-manrope`).
- **How to change:**
  - Update the font settings in `public/GlobalSettings.ts` under both `defaultFonts` and `fontPresets`.
  - The automation will ensure all unique fonts listed in either `defaultFonts` or `fontPresets` are imported and available in `app/fonts.ts`.
  - Update the Tailwind `fontFamily` config in `tailwind.config.js` if you add new font variables.
  - All typography across the site will update automatically.

## Global Color Usage

- **Background Colors:**
  - `background-light`: Used for light mode backgrounds (e.g., #f7f7f7)
  - `background-dark`: Used for dark mode backgrounds (e.g., #262626)
- **Font Colors:**
  - `foreground-light`: Used for text on light backgrounds (e.g., #222222)
  - `foreground-dark`: Used for text on dark backgrounds (e.g., #ffffff)
- **Accent Color:**
  - `accent-light` and `accent-dark`: Used for highlights, links, and UI elements (e.g., #16A34A)
- **How to change:**
  - Update the color variables in `tailwind.config.js` and (optionally) in `globals.css`.
  - All backgrounds, text, and accent elements across the site will update automatically.

## Global Font Size Slider (Body Text Scaling)

- The vertical slider in the AccentDock sets the CSS variable `--body-font-size` (range: 12px–18px).
- The `.main-content` class applies this variable as the base font size for all body text.
- **To make text resizable by the slider:**
  - Use the `font-sans` class on any body text element (e.g., `<p className="font-sans ...">`).
  - **Do NOT** use Tailwind text size utilities (e.g., `text-sm`, `text-xs`, `text-lg`, etc.) on resizable text, as they override the variable.
- **Headings and large text:**
  - Use the `font-heading` class and/or explicit text size utilities for headings and large text. These are not affected by the slider.
- **Result:**
  - All body/small text (default < 16px) is resizable via the slider.
  - Headings and intentionally large text remain fixed for visual hierarchy.

---

## Theme Color Sync

- Any changes to theme color values in `public/GlobalSettings.ts` are now automatically synced to CSS variables in `app/globals.css` via the `scripts/sync-theme-colors.js` script, which runs before every build.
  - This ensures your CSS variables always match your global settings for background, foreground, and accent colors.
  - No manual update of CSS variables is needed—just edit `GlobalSettings.ts` and rebuild.

## Core Architectural & Design Decisions (Impacting Future Development)

- **Font Policy:**
  - Only two user-provided fonts are used sitewide: Bodoni Moda (headings) and Manrope (body/small text) by default. All typography must use these via Tailwind utilities and CSS variables for easy global changes.
  - If you add or change fonts in `defaultFonts` or `fontPresets` in `public/GlobalSettings.ts`, the automation will import and make them available for use throughout the project.

- **Color & Theming:**
  - Strict light/dark mode support using Tailwind's `darkMode: 'class'` and CSS variables for background, foreground, and accent colors. All color changes are managed globally for consistency.

- **Accent Color System:**
  - Accent color is set via a global CSS variable (`--accent-color`) and can be changed at runtime using the AccentDock. All accent usages (text, borders, SVGs, etc.) must use the provided utility classes (e.g., `.text-accent`, `.accent-fill`, `.accent-stroke`).

- **Font Size Slider:**
  - The vertical slider in the AccentDock controls the global body font size via the `--body-font-size` CSS variable. Only text using `font-sans` and not using explicit Tailwind text size utilities will respond to this slider.

- **Asset Organization:**
  - All assets are organized by page/section in `public/assets/{page}/`. This ensures clarity and scalability as more assets are added.

- **SVG/Icon Usage:**
  - SVGs for logos and social icons are inlined in components for full CSS color control (using `currentColor`). Avoid using SVGs with baked-in backgrounds; only the glyph should be colored. Use utility classes for color and hover effects.

- **Layout Structure:**
  - The project uses Next.js App Router with the app directory at the project root (not in `src/`). Layouts and headers are defined in `app/layout.tsx` for global consistency.

- **Componentization:**
  - All interactive UI (theme toggle, accent dock, project slider, etc.) is implemented as reusable client components in `components/`.
  - The `InfoSnippet` component is used to display project/case study information in a flexible, responsive, and theme-aware layout. Each instance manages its own Docker bar (floating control panel) and state independently, allowing multiple InfoSnippets per page.
  - The Docker bar provides controls for layout, pointer overlay, text alignment, and more. It is hidden on mobile screens and can be toggled open/closed on desktop.
  - The `ProjectSlider` component is linked to case studies: clicking a card reveals the corresponding InfoSnippet section(s) and automatically scrolls to them for a smooth user experience.
  - Case study content is sourced from TypeScript files (e.g., `public/assets/case studies/project1/content.ts`) and rendered dynamically. To add a new case study, add a new content file and update the case studies array in `app/page.tsx`.
  - When a project card is clicked, the page scrolls to the revealed InfoSnippet section.

- **No Scroll on Landing (Large Screens):**
  - The landing page is designed to fit the viewport on large screens, with social icons pinned to the bottom and no vertical scroll.

- **Version Control:**
  - All changes are tracked in Git and pushed to GitHub for collaboration and history.

> These decisions are foundational and should be considered before making future changes to typography, theming, layout, or asset management.

> This file will be updated as the project evolves. Add new sections for features, content, or configuration changes as needed. 

# Project Setup & Automation

## Automated Content & Font Sync

- **Watcher runs automatically on dev and build:**
  - When you run `npm run dev`, a watcher script runs in the background to keep your content and font imports in sync.
  - On every build (`npm run build`), the watcher also syncs content and fonts before building.
- **Font imports are always up to date:**
  - Any time you change font presets or default fonts in `public/GlobalSettings.ts`, the watcher will automatically update `app/fonts.ts` to import all unique fonts you use (from both `defaultFonts` and `fontPresets`).
- **Error notifications:**
  - If you add a font to your presets or defaults that is not available in Google Fonts, you’ll see a warning in the console.
  - If no custom fonts are found, you’ll see a warning as well.
- **How changes take effect:**
  - Any change to `GlobalSettings.ts` (fonts, colors, etc.) will be picked up automatically by the watcher and reflected in your app after a refresh or rebuild.

## Hands-off Workflow

- You do not need to manually run any sync scripts for content or fonts.
- Just edit your content files and font presets as needed; the system will keep everything in sync in the background.
- For more details, see `PORTFOLIO_EDIT.md`. 

## Asset Hosting and Usage

- **All visual assets (profile images, project screenshots, etc.) are now hosted on Cloudinary (or a similar external service).**
- **How to use:**
  - Reference the full external URL (e.g., https://res.cloudinary.com/...) in your content files (such as `landing-content.ts`).
  - The sync-content script will use these URLs to keep downstream files in sync.
  - Local asset files in `public/assets/` are no longer required unless you have a specific reason to keep them.
  - This approach ensures faster deploys, easier asset management, and avoids large binary files in the repo.
- **If you add new assets:**
  - Upload them to your Cloudinary account (or similar service) and use the resulting URL in your content/config files.
  - Avoid adding large images or binaries directly to the repo. 