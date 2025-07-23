# Portfolio Content & Asset Structure Guide

This document explains how to edit and maintain the content and assets for your portfolio project. Follow these conventions to keep your project organized, flexible, and easy to update.

---

## Automation & Syncing

- **Automatic watcher runs on dev and build:**
  - When you run `npm run dev`, a watcher script runs in the background to keep your content and font imports in sync.
  - On every build (`npm run build`), the watcher also syncs content and fonts before building.
- **Font imports are always up to date:**
  - Any time you change font presets or default fonts in `public/GlobalSettings.ts`, the watcher will automatically update `app/fonts.ts` to import all unique fonts you use (from both `defaultFonts` and `fontPresets`).
- **Error notifications:**
  - If you add a font to your presets that is not available in Google Fonts, you’ll see a warning in the console.
  - If no custom fonts are found, you’ll see a warning as well.
- **How changes take effect:**
  - Any change to `GlobalSettings.ts` (fonts, colors, etc.) will be picked up automatically by the watcher and reflected in your app after a refresh or rebuild.

---

## 1. Global Settings

- **File:** `public/GlobalSettings.ts`
- **Purpose:** Central place for global theme, accent colors, font settings, and defaults.
- **How to use:**
  - Edit accent color options and set the default accent color.
  - Set default theme (light/dark) and font families for headings and body text.
  - Update font presets and default fonts to control which fonts are loaded and available in the UI.
  - **Note:** Any changes to this file are automatically picked up by the watcher and font sync scripts.

---

## 2. Landing Page Content

- **File:** `public/assets/landing/landing-content.ts`
- **Purpose:** Stores all text, images, and social links for the landing page.
- **How to use:**
  - Update the exported object to change the intro, heading, subheading, profile image, and social icons.
  - Add or remove fields as your design evolves.

---

## 3. Case Studies (Project Pages)

- **Folder:** `public/assets/case studies/`
- **Template:** `public/assets/case studies/project-content-template.ts`
- **How to use:**
  1. **For each new project:**
     - Copy `project-content-template.ts` into a new folder under `case studies/` (e.g., `project1/`).
     - Rename the copied file to `content.ts`.
     - Fill out the fields for your project:
       - Project heading, subheading, and details (year, company, team, role, notes).
       - Add as many information snippets as needed. Each snippet can have text, visuals (images, videos, embeds), and a custom column layout (out of 12 columns).
     - See the top of the template file for detailed instructions and an example.
  2. **Do NOT overwrite or edit the template file directly.**

---

## 4. Asset Organization

- **All images, SVGs, and other media** should be placed in the appropriate folder under `public/assets/` (e.g., `landing/`, `about/`, `case studies/{project}/`).
- **Reference asset filenames** in your content files to keep content and visuals tightly coupled.

---

## 5. General Editing Tips

- **Optional fields** in TypeScript interfaces are marked with a `?` and can be omitted if not needed.
- **Keep the structure consistent** for easier maintenance and future automation.
- **Update global settings** if you add new accent colors, fonts, or themes.
- **Use the provided templates** to ensure all content is structured and ready for dynamic rendering in your Next.js app.

---

## 6. Example Structure

```
public/
  GlobalSettings.ts
  assets/
    landing/
      landing-content.ts
      Profile2.png
      ...
    case studies/
      project-content-template.ts
      project1/
        content.ts
        screenshot1.png
        ...
      project2/
        content.ts
        ...
content/
  landing/
    landing-content.ts
  case-studies/
    project1/
      content.ts
    ...
```

---

For any questions or to extend the system, refer to this file or ask your developer/maintainer. 