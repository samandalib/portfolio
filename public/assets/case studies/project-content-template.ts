/*
PROJECT CONTENT TEMPLATE

!! IMPORTANT: !!
- Copy this file into your project folder under /public/assets/case studies/{project}/ and rename it to content.ts.
- Do NOT overwrite or edit this template file directly.
- Each project should have its own copy of this file, filled out with project-specific content.

INSTRUCTIONS FOR CASE STUDY CONTENT TEMPLATE

- Fill out this file for each project under /public/assets/case studies/{project}/.
- All fields marked with a ? are optional; you can leave them out if not needed.
- 'projectHeading' and 'details' are required for every project.
- 'infoSnippets' is an array: each snippet can have text, visuals, and a custom layout (columns for text/visuals, total 12).
- For visuals, use type 'image' for local images, 'video' for YouTube/Vimeo links, or 'embed' for other web/app embeds.
- You can add or remove snippets as needed for your project.
- Example usage is provided below the interfaces.
*/

export interface ProjectDetails {
  year: number;
  company: string;
  team?: string;
  role: string;
  notes?: string;
}

export interface VisualAsset {
  type: "image" | "video" | "embed";
  src: string; // path to image, video URL, or embed URL
  alt?: string; // for images
  caption?: string;
  embedType?: "youtube" | "vimeo" | "other";
}

export interface InfoSnippet {
  heading?: string;
  subheading?: string;
  body?: string;
  visuals?: VisualAsset[];
  layout?: {
    textColumns: number; // e.g., 4
    visualColumns: number; // e.g., 8
  };
}

export interface CaseStudyContent {
  projectHeading: string;
  projectSubheading?: string;
  details: ProjectDetails;
  infoSnippets: InfoSnippet[];
}

// Example usage:
const caseStudy: CaseStudyContent = {
  projectHeading: "Redesigning the Acme Dashboard",
  projectSubheading: "A modern, user-centric analytics platform",
  details: {
    year: 2023,
    company: "Acme Corp",
    team: "Product Design",
    role: "Lead Designer",
    notes: "Collaborated with engineering and product teams."
  },
  infoSnippets: [
    {
      heading: "Problem Statement",
      body: "The old dashboard was cluttered and hard to use...",
      layout: { textColumns: 6, visualColumns: 6 }
    },
    {
      heading: "Solution",
      subheading: "A clean, modular interface",
      body: "We introduced a card-based layout...",
      visuals: [
        { type: "image", src: "dashboard_mockup.png", alt: "Dashboard mockup", caption: "New dashboard design" }
      ],
      layout: { textColumns: 4, visualColumns: 8 }
    },
    {
      heading: "Demo Video",
      visuals: [
        { type: "video", src: "https://vimeo.com/123456789", embedType: "vimeo", caption: "Feature walkthrough" }
      ],
      layout: { textColumns: 3, visualColumns: 9 }
    }
  ]
};

export default caseStudy; 