/*
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
  radius?: string; // Valid values: 'rounded', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-full'
}

export interface InfoSnippet {
  heading?: string;
  subheading?: string;
  body?: string;
  visuals?: VisualAsset[];
  layout?: {
    textColumns: number; // e.g., 4
    visualColumns: number; // e.g., 8
    textAlign?: 'top' | 'middle' | 'bottom';
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
  projectHeading: "Designing Road265: Your AI Companion for Independent Aging",
  projectSubheading: "Empowering proactive adults to stay strong, sharp, and independent through personalized self-care coaching.",
  details: {
    year: 2025,
    company: "Road265 (Personal Venture)",
    role: "Product Designer & Co-Founder",
    notes: "Led product strategy, UX/UI design, research, branding, and MVP delivery."
  },
  infoSnippets: [
    {
      heading: "The Problem",
      body: "Most wellness apps focus narrowly on fitness or reactive health tracking. Adults in midlife need a proactive, holistic guide to help them preserve long-term independence across physical, cognitive, and emotional domains.",
      visuals: [
        // VISUAL: Personas slide { type: "image", src: "personas.png", alt: "User personas", caption: "Key personas and unmet needs" }
        { 
          type: "video", 
          src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1753397333/265_dashboard_oyznbi.mp4",
          // Valid values: 'rounded', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-full'
          radius: 'rounded-2xl'
        }
      ],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'middle' }
    },
    {
      heading: "Design Approach",
      subheading: "Designing a behavior orchestration layer, not just another tracker.",
      body: "We reframed the product as a long-term independence coach, not a fitness app. Through research, we introduced concepts like 'L-Score', 'inAge', and 'Decline Curve' to visualize progress and shift mindset from reactive health to proactive self-care.",
      visuals: [
        // VISUAL: Concept framework slide { type: "image", src: "personas.png", alt: "User personas", caption: "Key personas and unmet needs" }
        
          // Existing visuals...
          {
            type: "lottie",
            src: "https://res.cloudinary.com/dehugbvmc/raw/upload/v1753404820/AppConnections_Crop_f4t0ux.json",
            alt: "App connections animation",
            //caption: "Animated connections using Lottie"
          }
        
      ],
      layout: { textColumns: 4, visualColumns: 8, textAlign: 'top' }
    },
    {
      heading: "Key Features",
      body: [
        "Personalized coaching across cardio, strength, cognition, and emotional health",
        "Smart scorecards (L-Score, inAge, Decline Curve)",
        "Unified dashboard and timeline for tracking behavior",
        "App integrations and AI chat support",
        "Deductible Support Fund (DSF) as a reward mechanism"
      ],
      visuals: [
        // VISUAL: Core screens from Figma { type: "image", src: "personas.png", alt: "User personas", caption: "Key personas and unmet needs" }
      ],
      layout: { textColumns: 4, visualColumns: 8, textAlign: 'top' }
    },
    {
      heading: "Design Process & Strategy",
      subheading: "From low-fidelity mapping to interactive prototypes",
      body: "Started with user journeys and whiteboard flows, evolved into detailed wireframes and prototypes in Figma. Validated with target users in 1:1 sessions, iterating on tone, navigation, and dashboard UX.",
      visuals: [
        // VISUAL: Early wireframes { type: "image", src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753405794/265lofi_rmvsz2.png", alt: "User personas", caption: "Key personas and unmet needs" }
        // VISUAL: High-fi prototype overview
      ],
      layout: { textColumns: 4, visualColumns: 8, textAlign: 'top' }
    },
    {
      heading: "Validation & Testing",
      subheading: "Iterative testing from ideas to interface",
      body: "I conducted multiple rounds of testing:\n• Concept validation via interviews and Notion decks\n• Usability tests of Figma prototype (60-minute sessions)\n• Onboarding flow and scoring UX tested for clarity and retention\n• Post-test surveys to refine language and framing",
      visuals: [
                { type: "image", src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753405794/265lofi_rmvsz2.png", alt: "low fidelity wireframes" }

      ],
      layout: { textColumns: 4, visualColumns: 8, textAlign: 'top' }
    },
    {
      heading: "Branding & Presentation",
      subheading: "Making longevity feel modern, friendly, and strong",
      body: "Created the brand identity, logo, and typography system. Designed the website landing page to focus on clarity, motivation, and sign-ups. Used After Effects for subtle animations in product stories. Designed IG/TikTok content to build early traction.",
      visuals: [
        // VISUAL: Style guide
        // VISUAL: Optional animation showcase
      ],
      layout: { textColumns: 4, visualColumns: 8, textAlign: 'top' }
    }
  ]
};

export default caseStudy;