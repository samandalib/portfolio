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
  projectHeading: "VR Interior Design Tool",
  projectSubheading: "A prototyping tool to help interior designers evaluate and iterate their work in immersive 3D.",
  domain: "IMMERSIVE DESIGN TOOLS",
  details: {
    year: 2022,
    company: "Independent Project",
    role: "Product Designer & Developer",
    notes: "End-to-end design and prototyping using Unity and XR Interaction Toolkit"
  },
  skills: [
    "XR Design",
    "Unity",
    "Interaction Design",
    "Rapid Prototyping",
    "User Testing",
    "C# Programming"
  ],
  infoSnippets: [
    {
      heading: "The Context",
      body: 
        "Interior designers often rely on imagination or 3D renderings to evaluate spatial qualities, but these tools fall short.</br></br>Design decisions made without fully understanding space can lead to costly mistakes in materials and labor.",
      visuals: [
        {
          type: "video",
          src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1753840042/VR_y3zfoh.mp4", // Not used for components
          alt: "The final app in action",
          radius: "rounded-2xl"
        }
      ],
      layout: { textColumns: 3, visualColumns: 9, stacked: false }
    },
    {
      heading: "Design goal",
      body: "Build a VR tool that empowers designers to experience and iterate on their designs in real scale and space.",
      visuals: [],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    },
    {
      heading: "Overview",
      body: [
        "The tool allows interior designers to explore and edit their designs in a fully interactive VR environment.",
        "Users can manipulate objects, test lighting, and iterate quickly using natural interactions."
      ],
      visuals: [],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    },
    {
      heading: "Approach",
      body: [
        "Interviewed 5 interior designers to define essential interactions.",
        "Built low-fi and hi-fi prototypes in Unity to test object manipulation, lighting, and spatial layout.",
        "Tested each iteration with target users and refined based on feedback."
      ],
      visuals: [],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    },
    {
      heading: "Prototyping",
      body: [
        "Divided the experience into 4 phases: 2D interface design, 3D object interaction, spatial behavior, and debugging.",
        "Created a minimum viable Unity prototype with the following capabilities:",
        [
          "Move, rotate, duplicate, and remove objects",
          "Adjust lighting and change time of day",
          "Toggle hand-held menus and HUD interfaces"
        ]
      ],
      visuals: [],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    },
    {
      heading: "Feedback and iteration",
      body: [
        "Shared the first version with VR experts from YouTube and Microsoft.",
        "Improved UI by moving menus to hand-held positions and making interactions less modal.",
        "Second iteration featured grid snapping, custom rotation presets, and a simplified interaction model."
      ],
      visuals: [],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    },
    {
      heading: "Interaction walkthrough",
      body: [
        "Each interaction was recorded in-context and reviewed with users:",
        [
          "Move, rotate, and duplicate objects",
          "Turn lights on/off and change ambient lighting",
          "Use hand-held menu for tool switching"
        ]
      ],
      visuals: [],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    },
    {
      heading: "Reflection",
      body: [
        "Learned how to prototype immersive experiences and navigate the constraints of VR development.",
        "Improved documentation helped me maintain momentum between long gaps in development.",
        "Developed an efficient way to support testing, feedback loops, and iteration in Unity."
      ],
      visuals: [],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    }
  ]
};

export default caseStudy;