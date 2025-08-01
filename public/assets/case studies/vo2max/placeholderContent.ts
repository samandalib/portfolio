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
  year: number;
  company: string;
  team?: string;
  role: string;
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
      heading: "VO2Max Training App Is Live!",
      body: "The AI-powered fitness application currently in beta production. The app optimizes cardiorespiratory fitness through personalized training algorithms and performance tracking. I'm working on the complete design and development story to showcase the full process.<br><br> In the meantime, you can explore the app in production.",
      visuals: [
        {
          type: "component",
          src: "single-project-slider", // Required but not used for components
          componentName: "SingleProjectSlider",
          componentProps: {
            href: "https://www.vo2max.app/", // Direct link to the project
            customImage: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753550454/vo2max4web_te6hai.png", // Custom image for the card
            customTitle: "Explore The Web App", // Custom title
            customDescription: "Click here to view the app in production", // Custom description
            //customTags: ["AI", "Fitness", "Training", "Mobile App", "Performance"], // Custom tags
            //customColor: "from-green-500 to-emerald-500", // Custom color gradient
            alwaysShowContent: true, // Always show card content instead of on hover
            hideTags: true // Hide tags completely since no custom tags are provided
          }
        }
      ],
      layout: { textColumns: 8, visualColumns: 4, textAlign: 'middle' }
    }
  ]
};

export default caseStudy; 