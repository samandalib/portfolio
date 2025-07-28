/*
INSTRUCTIONS FOR CASE STUDY CONTENT TEMPLATE

- Fill out this file for each project under /public/assets/case studies/{project}/.
- All fields marked with a ? are optional; you can leave them out if not needed.
- 'projectHeading' and 'details' are required for every project.
- 'infoSnippets' is an array: each snippet can have text, visuals, and a custom layout (columns for text/visuals, total 12).
- For visuals, use type 'image' for local images, 'video' for YouTube/Vimeo links, 'embed' for other web/app embeds, or 'component' for custom React components.
- You can add or remove snippets as needed for your project.
- Example usage is provided below the interfaces.
*/

import { researchContent } from './ResearchContent';

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
  // New optional properties for layout control:
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
  projectHeading: string;
  projectSubheading?: string;
  domain?: string;
  projectLogo?: string; // URL to project logo image
  details: ProjectDetails;
  skills?: string[];
  infoSnippets: InfoSnippet[];
}

// Example usage:
const caseStudy: CaseStudyContent = {
  projectHeading: "Road265: AI Companion for Independent Aging",
  projectSubheading: "Empowering proactive adults to stay strong, sharp, and independent through personalized self-care coaching.",
  domain: "WELLNESS PLATFORM",
  projectLogo: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753668690/265logo_ue7nig.svg", // Optional: Add your project logo URL here (SVG format recommended)
  details: {
    year: 2025,
    company: "Road265 (Personal Venture)",
    role: "Product Designer & Co-Founder",
    notes: "Engineering co-founder:Amir Mostafavi"
  },
  skills: [
    "Product Strategy",
    "UX Research", 
    "UX/UI Design",
    "Branding",
    "Prototyping",
    "Design Systems",
    "Motion Design",
    "AI Design"
  ],
  infoSnippets: [
    {
      heading: "The problem",
      body: "Functional decline is preventable. As the leading cause of lost independence, chronic conditions gradually reduce mobility, strength, cognitive clarity, and energy, complicating daily tasks. Notably, 80% of midlife Americans have one, often due to lifestyle choices.",
      visuals: [
        // VISUAL: Personas slide { type: "image", src: "personas.png", alt: "User personas", caption: "Key personas and unmet needs" }
      ],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'middle' , stacked: true}
    },

    {
        heading: "The solution",
        body: [
          "An AI-powered wellness app to turn scattered wellness data into insights to build healthy lifestyle routine – to stay functionally independent in old ages.",
          [
          "Focuses on holistic wellbeing",
          "Provides personalized coaching",
          "Gives freedom of tool and choice ",
          ]
          
        
        ],

        visuals: [
          // VISUAL: Personas slide { type: "image", src: "personas.png", alt: "User personas", caption: "Key personas and unmet needs" }
          { 
            type: "video", 
            src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1753397333/265_dashboard_oyznbi.mp4",
            // Valid values: 'rounded', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-full'
            radius: 'rounded-2xl',
            caption: "A view of the Aging dashboard",
            autoplay: true,
            loop: true,
            muted: true
          }
        ],
        layout: { textColumns: 6, visualColumns: 6, textAlign: 'middle' }
      },
    {
      heading: "Unique strategic differentiator",
      subheading: "Designing a behavior orchestration layer, not just another tracker.",
      body: "We reframed the product as a long-term independence coach, not a fitness app. Through research, we introduced concepts like 'L-Score', 'inAge', and 'Decline Curve' to visualize progress and shift mindset from reactive health to proactive self-care.",
      visuals: [
        // VISUAL: Concept framework slide { type: "image", src: "personas.png", alt: "User personas", caption: "Key personas and unmet needs" }
        
          // Existing visuals...
          {
            type: "lottie",
            src: "https://res.cloudinary.com/dehugbvmc/raw/upload/v1753404820/AppConnections_Crop_f4t0ux.json",
            alt: "App connections animation",
            loop: false,
            //caption: "Animated connections using Lottie"
          }
        
      ],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'top' }
    },
    {
      heading: "Demo videos for the app",
      subheading: "I created these demo videos to showcase the app to the end users, investors and developers.",
      body: [
        "Personalized coaching across cardio, strength, cognition, and emotional health",
        "Smart scorecards (L-Score, inAge, Decline Curve)",
        "Unified dashboard and timeline for tracking behavior",
        "App integrations and AI chat support",
      
      ],
      visuals: [
        { 
          type: "video", 
          src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1753472987/ScaledUpTour_1_1_jjvzbm.mp4",
          // Valid values: 'rounded', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-full'
          radius: 'rounded-2xl',
          caption: "App tour video"
        },
        { 
          type: "video", 
          src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1753473235/chatdemo_bgpqqv.mp4",
          // Valid values: 'rounded', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-full'
          radius: 'rounded-2xl',
          caption:"AI chat demo"
        }
        // VISUAL: Core screens from Figma { type: "image", src: "personas.png", alt: "User personas", caption: "Key personas and unmet needs" }
      ],
      layout: {
        textColumns: 6,
        visualColumns: 6,
        textAlign: 'top',
        canvasLeft: false, // Visuals on the left
        stacked: false    // Side-by-side (row)
      }
    },
    {
      heading: "Design process & strategy",
      subheading: "From low-fidelity mapping to interactive prototypes",
      body: "Started with user journeys and whiteboard flows, evolved into detailed wireframes and prototypes in Figma. Validated with target users in 1:1 sessions, iterating on tone, navigation, and dashboard UX.",
      visuals: [
        { type: "image", src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753405794/265lofi_rmvsz2.png", alt: "low fidelity wireframes" }
        // VISUAL: High-fi prototype overview
      ],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'top' }
    },
    {
      heading: "Validation & testing",
      subheading: "Iterative testing from ideas to interface",
      body: [
        "I conducted multiple rounds of testing:",
        [
        "Concept validation via interviews and Notion decks",
        "Usability tests of Figma prototype (60-minute sessions)",
        "Onboarding flow and scoring UX tested for clarity and retention",
        "Post-test surveys to refine language and framing",
        ]
      
      ],

      visuals: [
        {
          type: "component",
          src: "research-synthesis", // Required but not used for components
          componentName: "ResearchSynthesis",
          componentProps: researchContent
        }

      ],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'top', stacked: true }
    },
    {
      heading: "Design for production",
      subheading: "Preparing the Hi-fidelity prototype for final round of user testing and production handoff",
      body: "I design the hi-fidelity user testing with all the colors, fonts, and visual elements before making the design ready for production and development handoff.",
     visuals: [
      {
        type: "embed",
        src: "https://jumpshare.com/embed/FDuliqoPNStIEuAZens3",
        caption: "Setting goal for wellness planning and seeing immediate impact of planning decisions on aging trajectory.",
        radius: 'rounded-2xl',
        maxWidth: "800px",
        maxHeight: "450px" // 16:9 ratio (800 * 9/16 = 450)
      },
      {
        type: "embed",
        src: "https://jumpshare.com/embed/wH6KdL9ykq72VpCR53bu",
        caption: "Planning a comprehensive wellness routine for healthy aging.",
        radius: 'rounded-2xl'
      },
      {
          type: "embed",
          src: "https://jumpshare.com/embed/htwJm58nicCfUJSmM479",
          caption: "Walkthrough of the various parts of the app, including the dashboard, the AI chat, and the scoring system, etc.",
          radius: 'rounded-2xl'
        },

      ],
      layout: { textColumns: 4, visualColumns: 8, textAlign: 'top', stacked: true }
    },

    {
      heading: "Design system & branding",
      subheading: "Making longevity feel modern, friendly, and strong",
      body: "Created the brand identity, logo, and typography system. Designed the website landing page to focus on clarity, motivation, and sign-ups. Used After Effects for subtle animations in product stories. Designed IG/TikTok content to build early traction.",
      visuals: [
        // VISUAL: Style guide
        // VISUAL: Optional animation showcase
      ],
      layout: { textColumns: 4, visualColumns: 8, textAlign: 'top', stacked: true }
    },
    {
      //heading: "Design System Specifications",
      subheading: "Design system handoff to the development team",
      body: "Our comprehensive design system includes color palettes, typography scales, icon libraries, and spacing guidelines to ensure consistency across all touchpoints.",
      visuals: [
        {
          type: "component",
          src: "design-system-specs", // Required but not used for components
          componentName: "DesignSystemSpecs"
          // Uses all default data including the full color palette
        }
      ],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'top' }
    },
    {
      //heading: "Design Approach",
      subheading: "Branding & presentation assets",
      body: "I created a lot of lottie animations for the waiting and loading states of the app using Adobe After Effects.",

      visuals: [
        // VISUAL: Concept framework slide { type: "image", src: "personas.png", alt: "User personas", caption: "Key personas and unmet needs" }
        
          // Existing visuals...
          /*{
            type: "lottie",
            src: "https://res.cloudinary.com/dehugbvmc/raw/upload/v1753563435/MainMovingShapes_lyggao.json",
            //alt: "App connections animation",
            loop: true,
            //caption: "Animated connections using Lottie"
          },*/
          {
            type: "lottie",
            src: "https://res.cloudinary.com/dehugbvmc/raw/upload/v1753563433/JumpSplash_jptkm9.json",
            //alt: "App connections animation",
            loop: true,
            //caption: "Animated connections using Lottie"
          },
          {
            type: "lottie",
            src: "https://res.cloudinary.com/dehugbvmc/raw/upload/v1753563432/Appear3Direction_rizzys.json",
            //alt: "App connections animation",
            loop: true,
            //caption: "Animated connections using Lottie"
          },
          {
            type: "lottie",
            src: "https://res.cloudinary.com/dehugbvmc/raw/upload/v1753563419/ShapesFillup_gxpque.json",
            //alt: "App connections animation",
            loop: true,
            //caption: "Animated connections using Lottie"
          },
          {
            type: "lottie",
            src: "https://res.cloudinary.com/dehugbvmc/raw/upload/v1753563409/Transformers_w5vzog.json",
            //alt: "App connections animation",
            loop: true,
            //caption: "Animated connections using Lottie"
          },
          {
            type: "lottie",
            src: "https://res.cloudinary.com/dehugbvmc/raw/upload/v1753563419/RotationlShapes_msetpw.json",
            //alt: "App connections animation",
            loop: true,
            //caption: "Animated connections using Lottie"
          },
          {
            type: "lottie",
            src: "https://res.cloudinary.com/dehugbvmc/raw/upload/v1753563410/subtleOvershootAppearance_fpurhr.json",
            //alt: "App connections animation",
            loop: true,
            //caption: "Animated connections using Lottie"
          },
        
      ],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'top' }
    },
    {
      subheading: "Set the tone for the app wtih the onboarding visuals",
      body: "I created some fund animations for the onboarding flow related to healthy and happy moments of life.",
      
      visuals: [
        /*
        {
          type: "lottie",
          src: "https://res.cloudinary.com/dehugbvmc/raw/upload/v1753576325/Onboarding_1_osfpjk.json",
          loop: false,
          maxWidth: "45%",
          maxHeight: "200px"
        },
        {
          type: "lottie",
          src: "https://res.cloudinary.com/dehugbvmc/raw/upload/v1753577276/Onboarding_2_anykxe.json",
          loop: false,
          maxWidth: "45%",
          maxHeight: "200px"
        },
        {
          type: "lottie",
          src: "https://res.cloudinary.com/dehugbvmc/raw/upload/v1753577419/Onboarding_3_t7ge4x.json",
          loop: false,
          maxWidth: "45%",
          maxHeight: "200px"
        },
        {
          type: "lottie",
          src: "https://res.cloudinary.com/dehugbvmc/raw/upload/v1753576785/Onboarding_4_b9x8ee.json",
          loop: false,
          maxWidth: "45%",
          maxHeight: "200px"
        },*/
        
        {
            type: "embed",
            src: "https://jumpshare.com/embed/1eB4DaG5D1dvDtMbwhRX",
            caption: "Incorporating animations to the onboarding flow.",
            radius: 'rounded-2xl',
            maxWidth: "800px",
            maxHeight: "450px" // 16:9 ratio (800 * 9/16 = 450)
        },
        
      
      ],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'top' }
    }
  ]
};

export default caseStudy;