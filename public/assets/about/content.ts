/*
ABOUT PAGE CONTENT

This file contains the content for the about page, using the same structure as case studies
but adapted for personal/about information.
*/

export interface AboutDetails {
  location?: string;
  experience?: string;
  education?: string;
  interests?: string[];
}

export interface VisualAsset {
  type: "image" | "video" | "embed" | "lottie" | "component";
  src: string; // path to image, video URL, or embed URL
  alt?: string; // for images
  caption?: string;
  href?: string; // URL for clickable captions or images
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

export interface AboutContent {
  pageHeading?: string;
  pageSubheading?: string;
  details?: AboutDetails;
  skills?: string[];
  infoSnippets?: InfoSnippet[];
}

// About page content
const aboutContent: AboutContent = {
  pageHeading: "About Me",
 
  infoSnippets: [
    {
      heading: "A little more about me",
      body: [
        "If you're looking for a TL;DR, here it is:",
        [
            "Creator by DNA",
            "Artist and art enthusiast (modern sculptures)",
            "Science enthusiast (currently fixated on health)",
            "Mostly on the left side of Roger's curve"

        ]
    ],
      visuals: [
        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753301861/Profile2_pb1o0o.png",
          alt: "Hesam Andalib profile photo",
          maxWidth: "300px",
          //caption: "Designing and building digital experiences"
        }
      ],
      layout: { textColumns: 8, visualColumns: 4, textAlign: 'bottom', canvasLeft: false }
    },
    {
      heading: "Here is the story",
      body:
        "If I wasn’t human, I’d probably be a Trieciou algae. Weird flex, I know, but hear me out. Discovered in 2021, this is the first known algae with three distinct sexes. Considering my [professional] self as a lovechild of art, engineering, and science, this species just feels right. I’m a hybrid who bridges silos and connects dots in ways your average nerd just can’t.",
      /*visuals: [
        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754248592/algae_jfrco1.png",
          alt: "Hesam Andalib profile photo",
          caption: "Trieciou algae under a microscope with 3 distinct sexes"
        }
      ],*/
      layout: { textColumns: 8, visualColumns: 4, textAlign: 'middle', stacked: false }
    },
    {
      //subheading: "Earlier in Life",
      body: `Growing up, curiosity drove me from electronics kits to chemistry, 
      physics, calculus, and geometry, eventually leading me to architecture school simply 
      because it seemed cool enough. Architecture turned out to be a great fit, melding creativity, 
      complexity, and purpose into something tangible. 
      </br></br>As I was building nice homes in 
      the 2010s, the world was shifting fast. The digital world became as real as the physical. 
      In 2018, I proudly learned Python and immediately thought, “I can build software now.” 
      Reality check: I tried building an app and quickly realized I knew nothing yet. 
      So I kept going—HTML, CSS, JavaScript, React, Angular, and a bunch of other things 
      I barely remember. I never finished that app, but it sparked a wild journey.
      </br></br>In 2019, I moved to the US to study Human-Computer Interaction, another hybrid 
      field perfect for someone like me. Since then, I’ve been designing, coding, and creating 
      nonstop; professionally and passionately on the side.
      </br></br>
      Oh, and I almost forgot, I still make physical stuff too, mostly wooden sculptures. 
      I leave you some here to see. If you are asking who my favorite sculptor is? Without pause,
      Constantin Brancusi.

      `,
      visuals: [
        {
          type: "image",
          src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754251490/jhng_eplf0x.jpg",
          alt: "Hesam Andalib profile photo",
          caption: "One of the residential buildings I designed and built in Iran. (Published on archdaily.com)",
          href: "https://www.archdaily.com/948375/house-n-roza-atarod-plus-hesam-andalib-plus-mohammad-kazerani?ad_source=search&ad_medium=projects_tab",
          radius: "rounded-md",
        },

    
      ],
      layout: { textColumns: 8, visualColumns: 4, textAlign: 'top', stacked: false }
    },
    {   

        visuals: [
            {
                type: "image",
                src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754254704/curve-wood-3_btjwhd.png",
                alt: "Hesam Andalib profile photo",
                caption: "The Whale",
                radius: "rounded-md",
                
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754254703/i-2_vzueeh.png",
                alt: "Hesam Andalib profile photo",
                caption: "The Convo",
                radius: "rounded-md",
                
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754254703/Hich-1_yhw9qp.png",
                alt: "Hesam Andalib profile photo",
                caption: "Hich",
                radius: "rounded-md",
                
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754254704/Holes-1_ogjyb4.png",
                alt: "Hesam Andalib profile photo",
                caption: "Inception",
                radius: "rounded-md",
                
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754254703/Deconstruction-1_epchio.png",
                alt: "Hesam Andalib profile photo",
                caption: "Broken loop",
                radius: "rounded-md",
                
                
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754254703/Lego-1_yt4u6t.png",
                alt: "Hesam Andalib profile photo",
                caption: "Endless column",
                radius: "rounded-md",
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754256048/Mouse-was-there-1_lpw4in.png",
                alt: "Hesam Andalib profile photo",
                caption: "The mouse was here",
                radius: "rounded-md",
            },
            {
                type: "image",
                src: "https://res.cloudinary.com/dehugbvmc/image/upload/v1754256135/DoubleEye_awofqo.png",
                alt: "Hesam Andalib profile photo",
                caption: "Charming eyes",
                radius: "rounded-md",
            }
        ],
        layout: { textColumns: 6, visualColumns: 6, textAlign: 'top', stacked: true, gridCols: 4, gridRows: 2 }
    }
  ]
};

export default aboutContent; 