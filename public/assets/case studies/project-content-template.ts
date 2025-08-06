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
  width?: string;      // e.g., "400px" or "80%"
  height?: string;     // e.g., "300px" or "50vh"
  marginLeft?: string; // e.g., "16px"
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
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
    gridCols?: number;    // Custom number of columns for visual grid
    gridRows?: number;    // Custom number of rows for visual grid
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
  projectHeading: "Your Project Title",
  projectSubheading: "A brief description of your project and its impact.",
  domain: "DOMAIN LABEL", // e.g., "HEALTHCARE AI PLATFORM", "FINANCIAL APP", etc.
  projectLogo: "https://your-logo-url.svg", // Optional: Add your project logo URL here (SVG format recommended)
  details: {
    year: 2024,
    company: "Company Name",
    team: "Team Name", // Optional
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
  infoSnippets: [
    {
      heading: "The problem",
      body: "Describe the problem your project solves...",
      visuals: [
        // Add visuals here if needed
        // { type: "image", src: "problem-image.png", alt: "Problem visualization", caption: "Problem description" }
      ],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'middle', stacked: true }
    },
    {
      heading: "The solution",
      body: [
        "Main solution description...",
        [
        "Key feature 1",
        "Key feature 2",
        "Key feature 3",
        ]
      ],
      visuals: [
        // { type: "embed", src: "https://your-embed-url", embedType: "other", caption: "Solution demo" }
      ],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'middle' }
    },
    {
      heading: "Design process",
      subheading: "How you approached the design",
      body: "Describe your design process, methodology, and key decisions...",
      visuals: [
        // { type: "image", src: "process-image.png", alt: "Design process", caption: "Process visualization" }
      ],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'top' }
    },
    {
      heading: "Final outcome",
      subheading: "Results and impact",
      body: "Describe the final outcome, results, and impact of your work...",
      visuals: [
        // { type: "video", src: "https://your-video-url.mp4", caption: "Final demo" }
      ],
      layout: { textColumns: 4, visualColumns: 8, textAlign: 'top', stacked: true }
    }
  ]
};

export default caseStudy; 