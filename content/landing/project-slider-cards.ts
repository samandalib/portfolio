// ProjectSlider card content for landing page

export interface ProjectSliderCard {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
  caseStudyIndex: number; // Index of the case study to show when clicked
  slug: string; // Add this line
}

export const projectSliderCards: ProjectSliderCard[] = [
  {
    id: 2,
    title: "Road265",
    description: "AI-powered coaching app for healthy aging",
    image: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753549363/3-devicesweb_kumypv.png",
    tags: ["AI", "UX+UI", "Health & Wellness", "Mobile app", "Prototyping"],
    color: "from-purple-500 to-pink-500",
    caseStudyIndex: 0, // Shows the first case study (Road265)
    slug: 'Road265',
  },
  {
    id: 1,
    title: "AT&T Retail POS App",
    description: "Redesigning AT&T POS app for reatail store representives.",
    image: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753547999/AccSlider_sq_web_ucxz4r.png",
    tags: ["Telecom","Commerce","iPad", "UX+UI","Prototyping"],
    color: "from-blue-500 to-cyan-500",
    caseStudyIndex: 1, // Shows the second case study (when you add it)
    slug: 'attpos',
  },
  {
    id: 4,
    title: "VO2Max Training App",
    description: "Simplifying complex financial data into clear, actionable insights for better decision making.",
    image: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753550454/vo2max4web_te6hai.png",
    tags: ["Health & Wellness", "Dashboard", "Cursor", "Programming"],
    color: "from-green-500 to-emerald-500",
    caseStudyIndex: 2, // Shows the third case study (when you add it)
    slug: 'vo2max',
  },
  {
    id: 3,
    title: "XR app for Interior Design",
    description: "Building meaningful connections through innovative social features and community-driven design.",
    image: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753545980/VR_xdnx4d.png",
    tags: ["Productivity", "Immersive", "AR/VR", "Unity", "Programming"],
    color: "from-orange-500 to-red-500",
    caseStudyIndex: 3, // Shows the fourth case study (when you add it)
    slug: 'vr',
  }
]; 