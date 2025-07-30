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

const caseStudy: CaseStudyContent = {
  projectHeading: "AT&T Retail POS Redesign",
  projectSubheading: "Improving efficiency and flexibility for a $47B retail operation by reimagining the Salesforce-powered POS experience.",
  domain: "RETAIL SALES PLATFORM",
  details: {
    year: 2023,
    company: "AT&T",
    role: "Lead Designer for Retail POS",
    notes: "Collaborated with research, prototyping, and Salesforce development teams"
  },
  skills: [
    "UX Design",
    "Prototyping",
    "Design Systems",
    "Interaction Design",
    "Enterprise UX",
    "Salesforce Lightning"
  ],
  infoSnippets: [
    {
      heading: "The problem",
      body: 
        "AT&T's legacy POS system was difficult to learn, rigid, and error-prone. It required retail reps to bounce between multiple systems to complete a sale, leading to inefficiencies and poor customer experiences. </br></br>Despite a major investment in Salesforce, the out-of-the-box experience wasn't enough. The new system needed a thoughtful redesign from the ground up to support real-world sales conversations."
      ,
      visuals: [
        {

          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753831635/OPUS_ubnow8.png", // Not used for components
        
            alt: "Before and after comparison of POS interface",
            caption: "The existing POS system interface.",
            radius: "rounded-2xl"
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753831634/ACC-After_je5kvl.png", // Not used for components
            alt: "Before and after comparison of POS interface",
            caption: "The new POS system design.",
            radius: "rounded-2xl"
          }
      ],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    },
    {
      heading: "The opportunity",
      body: [
        "$28B corporate retail operation across 1,509 stores and 19,000 employees.",
        "$19B authorized retail network across 3,823 stores.",
        "A new design could improve training, reduce errors, and increase upsells by supporting more natural, guided interactions."
      ],
      visuals: [],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    },
    {
      heading: "Design process",
      subheading: "Grounded in real-world observation",
      body: [
        "We conducted store visits and interviews to uncover reps' day-to-day struggles.",
        "Synthesized findings into design principles: Flexible, Intuitive, Transparent, and Clear.",
        "Tested early concepts through prototypes and evolved them through feedback."
      ],
      visuals: [],
      layout: { textColumns: 6, visualColumns: 6, textAlign: "top", stacked: false }
    },
    {
      heading: "Phase 1: Single-line upgrades",
      body: [
        "Mapped out upgrade journey for individual customers.",
        "Designed a POS cart experience that guided reps while remaining flexible.",
        [
          "One-step-at-a-time flow with context-sensitive intelligence",
          "Guided add-on recommendations to boost attach rates",
          "Clear, editable sections that match conversation flow"
        ]
      ],
      visuals: [],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    },
    {
      heading: "Phase 2: Multi-line challenges",
      subheading: "Scaling the experience for family plans",
      body: [
        "With multi-line accounts, complexity multiplies. Each line may have unique upgrade paths, trade-ins, and offers.",
        "We tested concepts in low fidelity before building a high-fidelity prototype using Salesforce Lightning components."
      ],
      visuals: [],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    },
    {
      heading: "Key wins & pain points",
      body: [
        "Top wins:",
        [
          "Reduced clicks with everything on one page",
          "Support for both linear and non-linear workflows",
          "Ability to edit without rebuilding"
        ],
        "Top losses:",
        [
          "Difficult to see how decisions affect other lines",
          "Unclear account-level summaries",
          "Lack of visibility into current plan status"
        ]
      ],
      visuals: [],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    },
    {
      heading: "Measuring success",
      body: [
        "To evaluate success, I created a novel interaction analysis method to compare our design against the legacy system.",
        "This method helped quantify efficiency, accuracy, and clarity improvements.",
        "I later published this method as an article on Medium to share insights with the broader design community."
      ],
      visuals: [

      ],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    }
  ]
};

export default caseStudy; 