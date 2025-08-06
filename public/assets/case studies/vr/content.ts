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
      heading: "Design objective",
      body: [
        "Build a VR tool that empowers designers to experience and iterate on their designs in real scale and space.",
        [
        "The tool should allow interior designers to explore and edit their designs in a fully interactive VR environment.",
        "Designers should be able to manipulate objects in the space, set lighting, and iterate quickly using natural interactions."
        ]
      ],
      visuals: [],
      layout: { textColumns: 6, visualColumns: 6, stacked: true }
    },

    {
      heading: "Approach",
      body: [
        "Interviewed 5 interior designers to define essential interactions.",
        "Built low-fi and hi-fi prototypes in Unity to test object manipulation, lighting, and spatial layout.",
        "Tested each iteration with target users and refined based on feedback."
      ],
      visuals: [
        {
          type: "video",
          src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1753919059/VR0_lavikp.mp4",
          alt: "Design objectives",
          caption: "Early testing of the basic functionalities.",
          radius: "rounded-xl",
        }
      ],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    },
    {
      heading: "Prototyping",
      body: [
        "Divided the experience into 4 phases to get to a minimum viable Unity prototype with the following capabilities:",
        [
          "Move, rotate, duplicate, and remove objects",
          "Adjust lighting and change time of day",
          "Toggle hand-held menus and HUD interfaces"
        ]
      ],
      visuals: [
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753919638/layout_alkoeb.svg",
            heading: "2D Interface Design",
            body: "Designed user interface elements and menu systems for VR interaction.",
            color: "blue"
          }
        },
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753919638/3D_kaa1cp.svg",
            heading: "3D Object Interaction",
            body: "Implemented move, rotate, duplicate, and remove object functionality.",
            color: "green"
          }
        },
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753919639/VR_kn8s0l.svg",
            heading: "Spatial Behavior",
            body: "Developed spatial awareness and navigation systems for VR environment so that the user can move around the space.",
            color: "purple"
          }
        },
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753919637/Debug_cyluwc.svg",
            heading: "Debugging & Testing",
            body: "Created debugging tools and testing frameworks for VR interactions.",
            color: "orange"
          }
        }
      ],
      layout: { textColumns: 6, visualColumns: 6, stacked: false, gridCols: 2, gridRows: 2 }
    },
    {
      heading: "Feedback and iteration",
      body: [
        "I created a first version and cold messaged industry XR experts for feedback. Some of them responded with detailed feedback and suggestions. Next:",
        [
        "Improved UI by moving menus to hand-held positions and making interactions less modal.",
        "Second iteration featured grid snapping, custom rotation presets, and a simplified interaction model."
        ]
      ],
      visuals: [
        {
          type: "video",
          src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1753920248/VRInteriorApp_uomubi.mp4",
          alt: "First iteration of the app",
          caption: "The first version shared with experts for feedback.",
          radius: "rounded-xl",
          muted: true,
        }
      ],
      layout: { textColumns: 6, visualColumns: 6, stacked: false }
    },
          {
        subheading: "Experts' feedback",
        visuals: [
          {
            type: "component",
            src: "info-tile",
            componentName: "InfoTile",
            componentProps: {
              icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753920979/icons8-google_xgsiyg.svg",
              heading: "Mike Alger",
              body: "Interior design is definitely one of the most valuable use cases for headsets, as well as architecture... Regarding the interface, I'd recommend moving the buttons you've got from the face to the non-dominant hand. Then you can hold up the menu with one hand and point at it with the other. Tilt-brush is an example of one of many apps that do this.",
              color: "blue",
              disableIconFilter: true,
              italicBody: true,
              fullHeight: true,
            }
          },
          {
            type: "component",
            src: "info-tile",
            componentName: "InfoTile",
            componentProps: {
              icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753920978/icons8-microsoft_j94xng.svg",
              heading: "Ricardo Acosta",
              body: "My only feedback will be trying to make the tool less modal. Right now it seems like the user needs to switch between modes (translate, rotate, scale, etc..) very often. That'd probably make a slow workflow for him. Rather than that, I think your tool is super neat! Congrats! ",
              italicBody: true,
              disableIconFilter: true,
              fullHeight: true,
            }
          },
          {
            type: "component",
            src: "info-tile",
            componentName: "InfoTile",
            componentProps: {
              icon: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753920978/icons8-microsoft_j94xng.svg",
              heading: "Sanghee Oh",
              body: "What I recommend to increase the affordance/reduce friction are: 1) provide a grid system to know where your object is placed (especially a symmetry is required). 2) pre-configured rotation to make it simpler (custom rotation option can be provided as well). I would also consider more UI feedback on object selection and what editing mode the user is in. It was difficult for me to tell what object is being copied, etc",
              italicBody: true,
              disableIconFilter: true,
              fullHeight: true,
            }
          }
        ],
        layout: { textColumns: 6, visualColumns: 6, stacked: true, gridCols: 3, gridRows: 1 }
      },
      {
        heading: "Final iteration",
        body: [
          "After receiving feedback, I iterated on the app to address the most important issues. I added some new features and improved the existing ones.",
          [
            "Grid snapping for precise placement",
            "Improved UI feedback for object selection and editing mode"
          ]
        ],
        visuals: [
          {
            type: "video",
            src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1753922304/Grid_On_Off_bo8hpi.mp4",
            alt: "Grid feature",
            caption: "Spatial grid snapping for precise placement.",
            radius: "rounded-xl",
            muted: true,
            autoplay: true,
            loop: true,
          },
          {
            type: "video",
            src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1753922302/Change_Daylight_ros49k.mp4",
            alt: "Grid feature",
            caption: "Changing the time of day for lighting purposes.",
            radius: "rounded-xl",
            muted: true,
            autoplay: true,
            loop: true,
          },
          {
            type: "video",
            src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1753922301/Swap_Hands_nki1tk.mp4",
            alt: "Grid feature",
            caption: "Swaping dominant hand for menu interaction.",
            radius: "rounded-xl",
            muted: true,  
            autoplay: true,
            loop: true,
          },
          {
            type: "video",
            src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1753922304/duplicate_object_isc5at.mp4",
            alt: "Grid feature",
            caption: "Duplicating an object.",
            radius: "rounded-xl",
            muted: true,
            autoplay: true,
            loop: true,
          },
          {
            type: "video",
            src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1753922305/Rotate_azgelh.mp4",
            alt: "Grid feature",
            caption: "Rotating an object on allowable axes.",
            radius: "rounded-xl",
            muted: true,  
            autoplay: true,
            loop: true,
          },
          {
            type: "video",
            src: "https://res.cloudinary.com/dehugbvmc/video/upload/v1753922304/Remove_Object_tpwo66.mp4",
            alt: "Grid feature",
            caption: "Removing and object from the space.",
            radius: "rounded-xl",
            muted: true,  
            autoplay: true,
            loop: true,
          },
        ],
        layout: { textColumns: 6, visualColumns: 6, stacked: true, gridCols: 2, gridRows: 3 }
      },


    {
      heading: "In Retrospect",
      body: [
        "This project definitely pushed me out of my comfort zone. I learned a lot about planning, architecture of an app and programming that I wouldn't have learned otherwise and to be honest, I didn't think I would be able to solve many of the challenges that I faced. Aside from that, I wrote about my findings and shared with the community and had some conversations that were very valuable.",
        [
          "Improved documentation helped me maintain momentum between long gaps in development.",
          "Developed an efficient way to support testing, feedback loops, and iteration in Unity.",
          "Learned that VR is only going to serve a niche user sector and probably wouldn't be something mainstream even for perfect use cases like interior design."
        ]
      ],
      visuals: [
        {
          type: "component",
          src: "info-tile",
          componentName: "InfoTile",
          componentProps: {
            icon: "/assets/landing/social/Medium.svg",
            heading: "Read my article",
            body: "Click to read the full article on UX prototyping challenges for XR",
            href: "https://medium.com/design-bootcamp/ux-prototyping-for-ar-vr-is-still-a-challenge-for-the-industry-fd4a1a9b9db2",
            external: true
          }
        }
      ],
      layout: { textColumns: 8, visualColumns: 4, stacked: false, canvasLeft:true }
    }
  ]
};

export default caseStudy;