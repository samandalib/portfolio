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

import MobileFrame from "@/components/MobileFrame";
import { filter } from "framer-motion/client";

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
  // Video-specific properties for poster and timing:
  poster?: string;     // URL to poster image (shows before video plays)
  startTime?: number;  // Time in seconds to start the video at (e.g., 5.5 for 5.5 seconds)
  // Component-specific properties:
  componentName?: string; // e.g., "DesignSystemSpecs"
  componentProps?: any;   // Props to pass to the component
  aspectRatio?: string;   // e.g. "16/9", "4/3", "1/1"
  // Horizontal alignment for visuals within their grid cells
  align?: 'left' | 'center' | 'right';
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
  
  projectHeading: "VO2Max Training App",
  projectSubheading: "How to train for VO2Max improvement and achieve high cardiorespiratory fitness",
  domain: "Health & Fitness",
 //projectLogo: "https://your-logo-url.svg",

  
  details: {
    year: 2025,
    company: "Personal Project",
    //team: "",
    role: "Designer, Researcher, Developer",
    notes: "AI-assisted full-stack design and development"
  },
  skills: [
    "AI-assisted design: Builder.io, Cursor",
    "AI-assisted development: Cursor", 
    "AI-assisted research: ChatGPT",
    "Frontend stack: React, Tailwind, Shadcn, Framer Motion",
    "Backend stack: Supabase, Vercel, OpenAI API",
  ],
  
  infoSnippets: [
    {
      heading: "Context and background",
      body: `VO2max is a key measure of cardiorespiratory fitness, often tracked through wearables 
      but hard to improve without the right training. This app simplifies the science and provides 
      practical tools to train effectively.
      </br></br>
      This project started as a detour to explore a hypothesis to see why I couldn't get the traction that 
      I hoped for the Road265 project despite seeing good signs in user testing. The hypothesis was that the
      outcome of that app was not measurable and clear to users. So I decided to narrow down on a specific health metric
      that is measurable and already established.
      </br></br>
      </br></br>
      <strong>Interact with the live app right here → </strong></br>
      <i>The visual in this section is not a mockup or prototype. It is the live app. 
      If you don't want to sign up, you can use the credentials below to login and
      see full features.</i>
      <br></br>
      <i>Username: <strong>devteam162@gmail.com</strong></i>
      <br>
      <i>Password: <strong>Samand10</strong></i>
      `,
      visuals: [
        {
          type: "component",
          src: "https://www.vo2max.app/",
          componentName: "MobileFrame",
          componentProps: {
            src: "https://www.vo2max.app/",
            alt: "VO2Max Training App",
            caption: "Live VO2Max Training App",
            deviceType: "iphone",
            borderRadius: "extra-large",
            showNotch: false,
            showHomeIndicator: false,
            width: "390px",
            height: "850px",
            allowFullScreen: true,
          }
        },


      ],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'top', stacked: false, }
    },
    {
      heading: "Product generation process",
      subheading: "An emerging workflow: AI-assisted integrated design and development",
      body: `With the rise of AI-powered tools, the ability to integrate design and development for fast iteration of 
      product becomes possible and practically removes the need for prototyping in a traditional sense. This method provides
      the opportunity to bring ideas to life quickly and pressure test them with real user in real market. 
      `,
      


      visuals: [
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754410718/openai_fh7tyl.svg",
            heading: "PRD",
            body: "Summarizing the research into one or more concise product briefs using ChatGPT",
            disableIconFilter: true,
            fullHeight: true,
            contentAlign: "top"
            //href: "https://medium.com/ux-planet/interaction-footprint-a-new-tool-for-measuring-design-cbfad164c4ca",
            //external: true
          }
        },
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754410718/cursor_jataxo.svg",
            heading: "Design and development",
            body: "Providing a primary tech-stack document to Cursor to generate basic scaffolding to iterate fast.",
            disableIconFilter: true,
            fullHeight: true,
            contentAlign: "top"
            //href: "https://medium.com/ux-planet/interaction-footprint-a-new-tool-for-measuring-design-cbfad164c4ca",
            //external: true
          }
        },
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754410718/terminal_pkkegv.svg",
            heading: "Iteration setup",
            body: "Setting up a local machine to iterate faster on the product with Cursor",
            disableIconFilter: true,
            fullHeight: true,
            contentAlign: "top"
            //href: "https://medium.com/ux-planet/interaction-footprint-a-new-tool-for-measuring-design-cbfad164c4ca",
            //external: true
          }
        },
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754410718/github_syrf4t.svg",
            heading: "Version control",
            body: "Pushing the code to Github to keep track of product versions.",
            disableIconFilter: true,
            fullHeight: true,
            contentAlign: "top"
            //href: "https://medium.com/ux-planet/interaction-footprint-a-new-tool-for-measuring-design-cbfad164c4ca",
            //external: true
          }
        },
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754411205/Vercel_nbo3o4.svg",
            heading: "Deployment",
            body: "Setting up a Vercel project to deploy the product and share it with the world.",
            disableIconFilter: true,
            fullHeight: true,
            contentAlign: "top"
            //href: "https://medium.com/ux-planet/interaction-footprint-a-new-tool-for-measuring-design-cbfad164c4ca",
            //external: true
          }
        },  
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754410718/reddit_techgf.svg",
            heading: "Feedback loop",
            body: "Sharing on Reddit and similar communities for testing and user feedback",
            disableIconFilter: true,
            fullHeight: true,
            contentAlign: "top"
            //href: "https://medium.com/ux-planet/interaction-footprint-a-new-tool-for-measuring-design-cbfad164c4ca",
            //external: true
          }
        },

      ],
      layout: { textColumns: 4, visualColumns: 8, textAlign: 'top', stacked: false, gridCols: 3, gridRows: 1 }
    },
    {
      heading: "The first iteration",
      //subheading: "The new way to design: AI-assisted design",
      body: `In my research, I compiled a list of questions that people usually ask on various platforms about VO2max (pain points)
      as well as the science of VO2max.
      After doing some back and forth with ChatGPT and other AI tools, I came up with a list of features that I wanted to include in the app.
      I was able to create a working product in less than a week. 
      `,
      visuals: [
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754414715/O2_wt69rp.svg",
            heading: "Testing protocols",
            body: ` Many people ask about the accuracy of wearable measurements and how to test for VO2max.
            `,
            disableIconFilter: false,
            fullHeight: true,
            contentAlign: "top"
            //href: "https://medium.com/ux-planet/interaction-footprint-a-new-tool-for-measuring-design-cbfad164c4ca",
            //external: true
          }
        },
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754414716/sprint_q1g7jy.svg",
            heading: "Training protocols",
            body: `Many people ask how they can improve their VO2max and they struggle to find the right training methods.`,
            disableIconFilter: false,
            fullHeight: true,
            contentAlign: "top"
          }
        },
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754414715/assist_walker_hxfjw1.svg",
            heading: "VO2max projections",
            body: `Many people wonder why tracking VO2max is important and what does it have to do with their health and aging journey.`,
            disableIconFilter: false,
            fullHeight: true,
            contentAlign: "top"
          }
        },
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754414715/devices_other_ironaj.svg",
            heading: "Training and tracking",
            body: "Other than knowledge sources, providing a specialized platform to plan and track VO2max training seems to be an unaddressed need.",
            disableIconFilter: false,
            fullHeight: true,
            contentAlign: "top"
          }
        }
        
      ],
      layout: { textColumns: 4, visualColumns: 8, textAlign: 'top', stacked: true, gridCols: 4, gridRows: 1 }
    },
    {
      //heading: "The first iteration",
      body: `The first iteration was a simple web app with a landing page and a dashboard.
      I used the tech-stack that I had in mind and the features that I wanted to include.
      `,
      visuals: [
        {
          type: "video",
          src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1754414949/Landing_vkudyn.mp4",
          alt: "VO2Max Training App",
          caption: "The landing page of the first iteration",
          autoplay: true,
          loop: true,
          muted: true,
          radius: "rounded-lg"
        },
        
      ],
      layout: { textColumns: 4, visualColumns: 8, textAlign: 'middle', stacked: false }
    },
    {
      heading: "Early signs of Product-Market fit",
      //subheading: "Early signs of traction",
      body: `I started to share the link to the product and some screenshots to relevant Reddit subreddits.
      To my surprise, the product got a lot of attention and I was able to get some feedback from the community.
      I saw people signing up for the app to get to their dashboard and that was a great sign of product-market fit for me to iterate more.
      
      Also on the database, I saw that people were signing up and picking protocols for training faster than I expected.
      `,
      visuals: [

        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754415753/IMG_4740_lk4e6b.png",
          alt: "VO2Max Training App shared in Reddit",
          caption: "Example of reactions to` app on Reddit",
          maxWidth: "250px",
          radius: "rounded-2xl",
          align: "right",
        }
      ],
      layout: { textColumns: 8, visualColumns: 4, textAlign: 'middle', stacked: false }
    },
    {
      heading: "Adding Specialized AI Chatbot",
      subheading: "RAG pipeline and its challenges",
      //subheading: "The new way to design: AI-assisted design",
      body: `Users can have a lot of other questions that I'm not covering in the app. 
      Having an AI chat that is specialized in the science of cardiorespiratory fitness
      seems necessary. So I gathered all the research papers and articles on VO2max training 
      and created a RAG (Retrieval-Augmented Generation) pipeline for the app.
      </br></br>
      Adding a specialized AI chat added some layers of complexity to the work. I created a RAG pipeline
      and to keep this pipeline up to date and maintainable,
      I decided to create a dashboard so that
      instead of going through the codebase and updating the endpoints, or manually uploading new resources,
      I do all through this interface.
      `,
      visuals: [
        {
          type: "embed",
          src: "https://jumpshare.com/embed/4kiD2tVizgNkfr2FITBr",
          alt: "AI chatbot demo",
          caption: "Specialized AI chat",
          embedType: "other",
          radius: "rounded-lg",
          align: "center",
        },


      ],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'top', stacked: false }
    },
    {
      visuals: [        {
        type: "video",
        src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1754441807/AdminDashboardHiRes_1_imdxp1.mp4",
        alt: "RAG pipeline dashboard",
        caption: "RAG pipeline dashboard",
        autoplay: true,
        loop: true,
        muted: true,
        radius: "rounded-lg"
      }],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'middle', stacked: true}
    },
    /*
    {
      subheading: "But that wasn't enough",
      body: `A RAG is as good as the quality of the embeddings and for a research paper-based RAG, I created a specialized parser with
      a Python standalone app with Streamlit to parse the research papers and create embeddings for the RAG.
      `,
      visuals: []
        
    },*/
    {
      heading: "Hallucinations",
      subheading: "The pitfall of AI-assisted tools",
      body: `
      From the very beginning, I realized that these AI tools that I'm using mix up and easily lose track of the context.
      So I started to create documentation on the go. In every milestone, I asked the tool to create/update the documentation related to the 
      decisions I made and the context of the product.
      On every new start, the first thing I do is to ask the AI to read the documentation and understand the context of the product and ground it in
      reality to avoid hallucinations.
      `,
      visuals: [
        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754425970/Documentation_e24gcz.png",
          alt: "Documentation of the app",
          caption: "The grounding documention for the AI agents",
          radius: "rounded-lg",
          maxWidth: "300px",
          align: "right" // Example: left-align this image within its grid cell
        }
      ],
      layout: { textColumns: 8, visualColumns: 4, textAlign: 'middle', stacked: false, canvasLeft: false}
        
    },
    {
      heading: "This is just the beginning",
      //subheading: "This is just the beginning",
      body: `I'm constantly iterating on the product's functionality, aesthetics, UX and interactions.
      The product that you see here today might be different tomorrow. Hopefully for the better but you know
      exactly how I'm doing it. Stay tuned for the next iteration!
      `,
      visuals: [],
      layout: { textColumns: 6, visualColumns: 6, textAlign: 'middle', stacked: true, canvasLeft: true}
    },

        
  ]
};

export default caseStudy;