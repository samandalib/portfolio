// Define the interface inline to avoid import path issues
interface ResearchSynthesisProps {
  title?: string;
  subtitle?: string;
  findings?: {
    id: string;
    title: string;
    description: string;
    category?: 'insight' | 'pain-point' | 'opportunity' | 'constraint' | 'trend';
    impact?: 'high' | 'medium' | 'low';
    evidence?: string;
    tags?: string[];
  }[];
  methods?: {
    name: string;
    description: string;
    participants?: number;
    duration?: string;
    keyOutcomes?: string[];
  }[];
  recommendations?: string[];
  processSteps?: string[];
  testimonials?: {
    quote: string;
    author: string;
    age: number;
  }[];
  stats?: {
    interviews?: number;
    duration?: string;
  };
  keyTakeaway?: string;
  participantsImageUrl?: string;
}

export const researchContent: ResearchSynthesisProps = {
  title: "From casual conversations to structured interviews",
  subtitle: "Key insights from user interviews and behavioral analysis",
  processSteps: [
    "Conversations and need verification",
    "No-code prototypes for concept validation", 
    "Iterating on concepts and testing",
    "Building Version 0 for closed beta testing",
  ],
  stats: {
    interviews: 21,
    duration: "60-80"
  },
  testimonials: [
    {
      quote: "Working with my other apps is amazing because there are many apps that I'm using and probably the AI coach can help me use them better for my health.",
      author: "Pouyan",
      age: 42,
    },
    {
      quote: "I love that it's not just about exercise. I'm so afraid of dementia and losing my cognitive functions and the holistic approach makes me plan better for other aspects.",
      author: "Tina", 
      age: 60,
    },
    {
      quote: "I want to stay independent as long as possible, but it feels like you only think about that once you're already in trouble.",
      author: "Mehran",
      age: 52,
    },
  ],
  keyTakeaway: "Holistic coaching for independence is valuable; success depends on the effective execution and delivery of the solution.",
  participantsImageUrl: "https://res.cloudinary.com/dehugbvmc/image/upload/v1753647769/Participants_emjhho.png"
};

export default researchContent; 