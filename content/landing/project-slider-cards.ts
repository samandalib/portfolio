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
    tags: ["AI", "UI/UX", "Health & Wellness", "Mobile app"],
    color: "from-purple-500 to-pink-500",
    caseStudyIndex: 0, // Shows the first case study (Road265)
    slug: 'Road265',
  },
  {
    id: 3,
    title: "AT&T Retail POS App",
    description: "Redesigning healthcare accessibility through thoughtful digital experiences and user-centered design.",
    image: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753547999/AccSlider_sq_web_ucxz4r.png",
    tags: ["Healthcare", "Mobile", "Accessibility"],
    color: "from-blue-500 to-cyan-500",
    caseStudyIndex: 1, // Shows the second case study (when you add it)
    slug: 'attpos',
  },
  {
    id: 1,
    title: "VO2Max Training App",
    description: "Simplifying complex financial data into clear, actionable insights for better decision making.",
    image: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753550454/vo2max4web_te6hai.png",
    tags: ["Fintech", "Dashboard", "Data Viz"],
    color: "from-green-500 to-emerald-500",
    caseStudyIndex: 2, // Shows the third case study (when you add it)
    slug: 'vo2max',
  },
  {
    id: 4,
    title: "AR/VR for Interior Design",
    description: "Building meaningful connections through innovative social features and community-driven design.",
    image: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753545980/VR_xdnx4d.png",
    tags: ["Social", "Community", "Mobile"],
    color: "from-orange-500 to-red-500",
    caseStudyIndex: 3, // Shows the fourth case study (when you add it)
    slug: 'vr',
  }
]; 