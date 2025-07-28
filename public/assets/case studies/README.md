# Case Studies Structure

This directory contains all case study content for the portfolio website.

## Directory Structure

```
case studies/
├── project-content-template.ts    # Template file (DO NOT EDIT)
├── project1/
│   └── content.ts                 # Road265 project content
├── project2/
│   └── content.ts                 # Template instance (ready to fill)
├── project3/
│   └── content.ts                 # Template instance (ready to fill)
└── project4/
    └── content.ts                 # Template instance (ready to fill)
```

## Adding New Projects

1. **Create a new directory**: `mkdir project5`
2. **Copy the template**: `cp project-content-template.ts project5/content.ts`
3. **Fill out the content**: Edit `project5/content.ts` with your project details
4. **Update the page**: Add the import and mapping in `app/case-study/[slug]/page.tsx`

## Content Structure

Each `content.ts` file contains:

- **Project metadata**: Title, subtitle, domain, logo, year, company, role
- **Skills list**: Array of relevant skills and technologies
- **Info snippets**: Array of content sections with text and visuals
- **Layout controls**: Column distribution, text alignment, stacking options

## Visual Types Supported

- `image`: Local images or Cloudinary URLs
- `video`: MP4 files or video URLs
- `embed`: Web embeds (Jumpshare, etc.)
- `lottie`: Lottie animation JSON files
- `component`: Custom React components (DesignSystemSpecs, ResearchSynthesis)

## Layout Options

- **Columns**: Total 12 columns, split between text and visuals
- **Text alignment**: `top`, `middle`, `bottom`
- **Stacking**: `stacked: true` for vertical layout, `false` for horizontal
- **Canvas position**: `canvasLeft: true` to put visuals on the left

## Example URLs

- `/case-study/project1` - Road265 project
- `/case-study/project2` - Your next project
- `/case-study/project3` - Your third project
- `/case-study/project4` - Your fourth project 