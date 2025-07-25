// ProjectSlider card content for landing page

export interface ProjectSliderCard {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
}

export const projectSliderCards: ProjectSliderCard[] = [
  {
    id: 1,
    title: "Road265",
    description: "A mobile app to plan and prevent the decline that comes with aging",
    image: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753467220/265chat_vmns8y.png",
    tags: ["UI/UX", "Health & Wellness", "Mobile"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Healthcare App",
    description: "Redesigning healthcare accessibility through thoughtful digital experiences and user-centered design.",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Healthcare", "Mobile", "Accessibility"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Simplifying complex financial data into clear, actionable insights for better decision making.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Fintech", "Dashboard", "Data Viz"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Social Platform",
    description: "Building meaningful connections through innovative social features and community-driven design.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Social", "Community", "Mobile"],
    color: "from-orange-500 to-red-500"
  }
]; 