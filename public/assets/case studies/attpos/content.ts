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
  componentProps?: any;   // Props to pass to the component (InfoTile, ProjectStats, etc.)
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
  projectHeading: "AT&T Retail POS Design",
  projectSubheading: "Improving efficiency and flexibility for a $47B retail operation by designing an efficient POS system.",
  domain: "RETAIL SALES PLATFORM",
  details: {
    year: 2023,
    company: "AT&T",
    role: "Lead Designer for Retail POS",
    notes: "Collaborated with research, business partners, and development teams"
  },
  skills: [
    "UX+UI Design",
    "Prototyping",
    "Design Systems",
    "Interaction Design",
    "Enterprise UX",
    
  ],
  infoSnippets: [
    {
      heading: "The problem",
      body: 
        `AT&T's legacy POS system was difficult to learn, rigid, and error-prone. 
        It required retail reps to bounce between multiple systems to complete a sale, 
        leading to inefficiencies and poor customer experiences.`
      ,
      visuals: [
        {

          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754513101/OPUSlight_rmtwuk.png", // Not used for components
        
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
      layout: { textColumns: 4, visualColumns: 8, stacked: false, gridCols: 2, gridRows: 1 }
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
          radius: "rounded"
        }
      ],
      layout: { textColumns: 3, visualColumns: 9, stacked: false }
    },

    {

      heading: "Phase 1: Single-line upgrades",
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
          alt: "Lo-fi explorations: Left panel with detailed selections for each line and right panel with summary of the cart.",
          caption: "Layout 1: Left panel with detailed selections and right panel with summary of the cart.",
          radius: "rounded-lg"
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753893317/lofi2_iwtcut.png",
          alt: "Lo-fi explorations for layout: showing a selection card on top of the page for each line.",
          caption: "Layout 2: Showing a selection card on top of the page for each line.",
          radius: "rounded-lg"
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753893317/lofi3_rzyihy.png",
          alt: "Lo-fi explorations for layout: showing selections in a table format on top of the page.",
          caption: "Layout 3: Showing selections in a table format on top of the page.",
          radius: "rounded-lg"
        },
        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753893317/lofi4_tegz0n.png",
          alt: "Lo-fi explorations for layout: using modal to select a service and assign it to one or more lines.",
          caption: "Layout 4: Using modal to select a service and assign it to one or more lines.",
          radius: "rounded-lg"
        },

      ],
      layout: { textColumns: 4, visualColumns: 8, stacked: true, gridCols: 4, gridRows: 1 }
    },
    {
      subheading: "Testing prototype for phase 1",
      body:
        "After making high-level decisions for the layout, I created high-fidelity components and created a prototype to test with store reps.",
      visuals: [
        {
          type: "embed",
          src: "https://jumpshare.com/embed/1BdC89DdHknVkOaPtl3e",
          alt: "Video demonstration of the interface",
          caption: "Customer profile to review account and user level details.",
          radius: "rounded-lg",
          width: "1000px",
          height: "900px"
        },
        {
          type: "embed",
          src: "https://jumpshare.com/embed/KUFnZfWsvf7iCXqd62ug",
          alt: "Video demonstration of the interface",
          caption: "Cart Builder page to add customer's selections to the cart.",
          radius: "rounded-lg",
          width: "1000px",
          height: "900px"
        },
        {
          type: "embed",
          src: "https://jumpshare.com/embed/TeuGIBQB3hyTPMxOLaXn",
          alt: "Video demonstration of the interface",
          caption: "Billing and final review page to confirm the customer's selections.",
          radius: "rounded-lg",
          width: "1000px",
          height: "900px"
        },
 
      ],
      layout: { textColumns: 4, visualColumns: 8, stacked: true , gridCols: 1, gridRows: 3}
    },
    {

      visuals: [
        {
          type: "component",
          src: "research-synthesis",
          componentName: "ResearchSynthesis",
          componentProps: {
            title: "UXR with store reps",
            subtitle: "Key insights from observations and interviews",
            processSteps: [
              "Click-through prototype on an iPad",
              "Role played the scenario as if it were a real customer",
              "Reps were asked to review the content and give impressions before role playing",
              "Collected final impressions and ratings."
            ],
            stats: {
              interviews: 12,
              duration: "45min"
            },
            testimonials: [
              {
                quote: "Learning OPUS right now, it’s intimidating because there are so many tabs, it’s easy to get lost. You have to toggle back and forth to find tools for flow. This is super easy to walk through. I would love to have this more than learning OPUS. This is very easy.",
                author: "New hire store rep",
              
              },
              {
                quote: "[I like] How clear and simple it is to use. It's very informative. It doesn’t let you forget anything. It tells you what you need to read verbatim. This is what the customer needs to know.",
                author: "Tenured store rep",
                
              },
              {
                quote: "You can see everything together, what they’re currently paying for, what’s available. You don’t have to look at the bill or hit features.",
                author: "Tenured store rep",
                
              },
            ],
            keyTakeaway: "The new design provides a faster, more transparent, guided, and informative experience.",
            participantsImageUrl: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753903602/StoreTest_wja3wj.png"
          }
        }
      ],
      layout: { textColumns: 6, visualColumns: 6, stacked: true }
    },
    {
      heading: "Phase 2: Multi-line challenges",
      body: 
        "With multi-line accounts, complexity multiplies. Each line may have unique upgrade paths, trade-ins, and offers. Store reps need to be able to navigate the experience with assurance that they are making the right changes either on the account level or line level. </br></br>I introduced a left panel so that reps can easily navigate the account and have a clear view of the changes to each line.",
      visuals: [
        {
          type: "embed",
          src: "https://jumpshare.com/embed/BWQ04sQkErEihcfXBbXS",
          alt: "Making changes to a line.",
          caption: "Start to build an order for a multi-line account.",
          radius: "rounded-lg",
          width: "1000px",
          height: "900px"
        }, 
        {
          type: "embed",
          src: "https://jumpshare.com/embed/qfC3LQ9Z8JmY1iC9Atll",
          alt: "Integrating online inventory with in-store experience.",
          caption: "Integrating online inventory with in-store purchase experience.",
          radius: "rounded-lg",
          width: "1000px",
          height: "900px"
        }, 
        {
          type: "embed",
          src: "https://jumpshare.com/embed/owTUrD3NpHbxrSYbvXPQ",
          alt: "Reviewing multi-line changes.",
          caption: "Reviewing multi-line changes.",
          width: "1000px",
          height: "900px"
        },

      ],
      layout: { textColumns: 6, visualColumns: 6, stacked: true, gridCols: 1, gridRows: 3}
    },
    {
      subheading: "Under the hood",
      body: 
        "Creating a well-crafted prototype for handoff requires making a lot of precise components. I created a component library to help with this process.",
      visuals: [
        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753910372/Library_Atoms_Molecules_fpmkzl.png",
          alt: "component library snapshot",
          caption: "Snapshot of components for prototyping.",
          radius: "rounded-2xl"
        }
      ],
      layout: { textColumns: 6, visualColumns: 6, stacked: true }
    },
    {
      heading: "Measuring success",
      subheading: "How did I assure the business partners that the new design works better than the legacy system, and not just aesthetically better?",
      body: 
        "There are very few methods that can show how designing an E2E flow can be impactful. I created a novel interaction analysis method to compare our design against the legacy system. This method helped business partners to see the full picture of the impact of the design.",
      visuals: [
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "/assets/landing/social/Medium.svg",
            heading: "Read my article",
            body: "Click to read the full article on the Interaction Footprint method.",
            href: "https://medium.com/ux-planet/interaction-footprint-a-new-tool-for-measuring-design-cbfad164c4ca",
            external: true
          }
        }
      ],
      layout: { textColumns:8, visualColumns: 4, stacked: false , canvasLeft: true}
    },
    {
      visuals: [
        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753912033/IXN_vxy9tx.svg",
          alt: "Interaction Footprint",
          caption: "Interaction Footprint",
        }
      ],
      layout: { textColumns: 6, visualColumns: 6, stacked: true }
    },
    {
      visuals: [
        {
          type: "component",
          src: "project-stats",
          componentName: "ProjectStats",
          componentProps: {
            stats: [
              {
                label: "Fewer steps to take",
                value: "↓19",
                description: "Steps to complete a task correlate with the time taken. Fewer steps can prevent errors.",
                color: "purple"
              },
              {
                label: "Fewer pages to navigate",
                value: "↓15",
                description: "Each page needs new info to load, so the number of pages and steps can be significant.",
                color: "purple"
              },
              {
                label: "Fewer Transitions",
                value: "↓15",
                description: "A page transition happens when the user moves to another page and waits for it to load.",
                color: "purple"
              }
            ],
            
          }
        },
        {
          type: "component",
          src: "project-stats",
          componentName: "ProjectStats",
          componentProps: {
            stats: [
              {
                label: "Unnatural transitions",
                value: "↓2",
                description: "Transitions result from hard-to-find interaction points on the next page, often unexpected.",
                color: "purple"
              },
              {
                label: "Below benchmark",
                value: "↓11",
                description: "Points above the benchmark line are accessible to most users. Those below may be hard to interact with.",
                color: "purple"
              },
              {
                label: "Difficult interactions",
                value: "↓12",
                description: "These interactions have a degree of difficulty higher than 5 on scale of 1 to 10.",
                color: "purple"
              }
            ],
            
          }
        }
      ],
      layout: { textColumns: 6, visualColumns: 6, stacked: true, gridCols: 1, gridRows: 1 }
    },
    {
      visuals: [
        {
          type: "component",
          src: "case-study-footer",
          componentName: "CaseStudyFooter",
          componentProps: {
            nextProject: {
              title: "VR Interior Design Tool",
              slug: "vr"
            }
          }
        }
      ],
      layout: { textColumns: 12, visualColumns: 0, stacked: true }
    }
  ]
};

export default caseStudy; 