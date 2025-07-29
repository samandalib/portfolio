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
- For visuals, use type 'image' for local images, 'video' for YouTube/Vimeo links, 'embed' for other web/app embeds, 'lottie' for Lottie animations, or 'component' for custom React components.
- You can add or remove snippets as needed for your project.
- Example usage is provided below the interfaces.
*/

export interface ProjectDetails {
  year?: number;
  company?: string;
  team?: string;
  role?: string;
  notes?: string;
}

export interface VisualAsset {
  type: "image" | "video" | "embed" | "lottie" | "component";
  src: string; // path to image, video URL, or embed URL
  alt?: string; // for images
  caption?: string;
  embedType?: "youtube" | "vimeo" | "other";
  radius?: string; // Valid values: 'rounded', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-full'
  // Optional properties for layout control:
  maxWidth?: string;   // e.g., "400px" or "80%"
  maxHeight?: string;  // e.g., "300px" or "50vh"
  marginLeft?: string; // e.g., "16px"
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  // Component-specific properties:
  componentName?: string; // e.g., "DesignSystemSpecs"
  componentProps?: any;   // Props to pass to the component
}

export interface InfoSnippet {
  heading?: string;
  subheading?: string;
  body?: string | string[] | (string | string[])[];
  visuals?: VisualAsset[];
  layout?: {
    textColumns: number; // e.g., 4
    visualColumns: number; // e.g., 8
    textAlign?: 'top' | 'middle' | 'bottom';
    canvasLeft?: boolean; // true = visuals left, false = right
    stacked?: boolean;    // true = stacked, false = row
  };
}

export interface CaseStudyContent {
  projectHeading?: string;
  projectSubheading?: string;
  domain?: string;
  projectLogo?: string; // URL to project logo image
  details?: ProjectDetails;
  skills?: string[];
  infoSnippets?: InfoSnippet[];
}

// Example usage:
const caseStudy: CaseStudyContent = {
  /*
  projectHeading: "Your Project Title",
  projectSubheading: "A brief description of your project and its impact.",
  domain: "DOMAIN LABEL",
  projectLogo: "https://your-logo-url.svg",
  details: {},
  
  details: {
    year: 2024,
    company: "Company Name",
    team: "Team Name",
    role: "Your Role",
    notes: "Additional notes or collaborators"
  },
  skills: [
    "Skill 1",
    "Skill 2", 
    "Skill 3",
    "Skill 4",
    "Skill 5",
    "Skill 6"
  ],
  */
  infoSnippets: [
    {
      heading: "Thanks for checking!",
      body: "I'm currently migrating this case study from an older OTB platform and enjoying building it here using Cursor, better and faster. I'm literally working on it right now. If you check back in a week, you'll find a rich story with visuals, context, and process.\n\nIn the meantime, feel free to explore my case studies that are already live. It gives a solid glimpse into the breadth and depth of my work. The rest of the upcoming case studies focus on different domains, so stay tuned!",
      visuals: [
        {
          type: "component",
          src: "single-project-slider", // Required but not used for components
          componentName: "SingleProjectSlider"
        }
      ],
      layout: { textColumns: 4, visualColumns: 8, textAlign: 'middle' }
    }
  ]
};

export default caseStudy;