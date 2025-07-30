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
            caption: "The legacy POS system interface.",
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
      layout: { textColumns: 3, visualColumns: 9, stacked: false }
    },
    {
      heading: "The opportunity",
      body: 
        "A new design could improve training, reduce errors, and increase upsells by supporting more natural, guided interactions.",
      
      visuals: [
        {
          type: "component",
          src: "project-stats",
          componentName: "ProjectStats",
          componentProps: {
            //title: "Market Leadership",
            //subtitle: "Powering retail excellence through strategic operations and authorized partnerships",
            stats: [
              {
                icon: "DollarSign",
                value: 28,
                label: "Billion Revenue",
                description: "Corporate retail operations",
                color: "blue",
                prefix: "$",
                suffix: "B",
                animateValue: true,
                animationDuration: 2000
              },
              {
                icon: "Store",
                value: 1509,
                label: "Stores",
                description: "Direct retail network",
                color: "blue",
                animateValue: true,
                animationDuration: 2500
              },
              {
                icon: "Users",
                value: 19000,
                label: "Employees",
                description: "Corporate workforce",
                color: "blue",
                animateValue: true,
                animationDuration: 2500
              },
              {
                icon: "DollarSign",
                value: 19,
                label: "Billion Network Revenue",
                description: "Authorized retail network",
                color: "purple",
                prefix: "$",
                suffix: "B",
                animateValue: true,
                animationDuration: 2000
              },
              {
                icon: "Store",
                value: 3823,
                label: "Partner Stores",
                description: "Authorized retail network",
                color: "purple",
                animateValue: true,
                animationDuration: 2500
              }
            ],
            layout: "corporate"
          }
        }
      ],
      layout: { textColumns: 4, visualColumns: 8, stacked: false}
    },
    {
      heading: "Design beacons",
      subheading: "Grounded in real-world observation",
      body: [
        "We conducted store visits and interviews to uncover reps' day-to-day struggles.",
        "Synthesized findings into design principles: Flexible, Intuitive, Transparent, and Clear.",
        "Tested early concepts through prototypes and evolved them through feedback."
      ],
      visuals: [
                {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753888799/Flexible_kdttwm.svg",
            heading: "Flexible",
            body: "Information and steps adapt logically to unique needs.",
            color: "blue"
          }
        },
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753888799/cognitive_zndkfq.svg",
            heading: "Intuitive",
            body: "Remove tool frictions to focus on serving customers.",
            color: "green"
          }
        },
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753888800/transparency_niba7l.svg",
            heading: "Transparent",
            body: "Provide all the info for decisions, building trust.",
            color: "purple"
          }
        },
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753888799/eye_jfjqno.svg",
            heading: "Clear",
            body: "Reps and customers have clarity during the experience.",
            color: "orange"
          }
        }
      ],
      layout: { textColumns: 6, visualColumns: 6, textAlign: "top", stacked: true, gridCols: 4, gridRows: 1 }
    },
    {
      heading: "Scenario-based design",
      body: 
        "Due to the complicated nature of this project and the need to pressure test any new decisions, I broke down the project into a few scenarios and mapped out customer journeys to get stakeholder's input and make decisions to focus on most impactful scenarios.",

      visuals: [
        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753892274/JourneyMapLight_r1tobz.png",
          alt: "Flexible",
          caption: "A high-level view of the customer journey used to map scenarios and capture stakeholder input.(FPO)",
          radius: "rounded-lg"
        }
      ],
      layout: { textColumns: 4, visualColumns: 8, stacked: false }
    },

    {

      subheading: "Phase 1: Single-line upgrades",
      body: [
        "Designed the experience that guided reps while remaining flexible for scenarios where the customer is upgrading a single line.",
        [
          "One-step-at-a-time flow with context-sensitive intelligence",
          "Guided add-on recommendations to boost attach rates",
          "Clear, editable sections that match conversation flow"
        ]
      ],
      visuals: [
        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753893317/lofi1_f9fbcn.png",
          alt: "Lo-fi explorations for layout: Left panel with detailed selections for each line and right panel with summary of the cart.",
          caption: "Layout 1: Left panel with detailed selections for each line and right panel with summary of the cart.",
          radius: "rounded-lg"
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753893317/lofi2_iwtcut.png",
          alt: "lofi explorations for layout: showing a selection card on top of the page for each line.",
          caption: "Layout 2: Showing a selection card on top of the page for each line.",
          radius: "rounded-lg"
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753893317/lofi3_rzyihy.png",
          alt: "lofi explorations for layout: showing selections in a table format on top of the page.",
          caption: "Layout 3: Showing selections in a table format on top of the page.",
          radius: "rounded-lg"
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753893317/lofi4_tegz0n.png",
          alt: "lofi explorations for layout: using modal to select a service and assign it to one of more lines.",
          caption: "Layout 4: Using modal to select a service and assign it to one of more lines.",
          radius: "rounded-lg"
        },

      ],
      layout: { textColumns: 4, visualColumns: 8, stacked: true, gridCols: 4, gridRows: 1 }
    },
    {
      subheading: "Testing prototype for phase 1",
      body:
        "After making high level decisions for the layout, I created high-fidelity components and created a prototype to test with store reps.",
      visuals: [
        {
          type: "embed",
          src: "https://jumpshare.com/embed/1BdC89DdHknVkOaPtl3e",
          alt: "Video demonstration of the interface",
          caption: "Customer profile to review account and user level details.",
          radius: "rounded-lg"
        },
        {
          type: "embed",
          src: "https://jumpshare.com/embed/KUFnZfWsvf7iCXqd62ug",
          alt: "Video demonstration of the interface",
          caption: "Cart Builder page to add customer's selections to the cart.",
          radius: "rounded-lg"
        },
        {
          type: "embed",
          src: "https://jumpshare.com/embed/TeuGIBQB3hyTPMxOLaXn",
          alt: "Video demonstration of the interface",
          caption: "Billing and final review page to confirm the customer's selections.",
          radius: "rounded-lg"
        },
 
      ],
      layout: { textColumns: 4, visualColumns: 8, stacked: true }
    },
    {
      subheading: "Phase 2: Multi-line challenges",
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