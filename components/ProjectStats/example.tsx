import React from 'react';
import ProjectStats from './ProjectStats';
import { Building2, Store, Users, DollarSign, Network, TrendingUp } from 'lucide-react';

// Example usage with the attpos data
const attposStats = [
  {
    icon: "DollarSign",
    value: 28,
    label: "Billion Revenue",
    description: "Corporate retail operations",
    color: "blue" as const,
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
    color: "blue" as const,
    animateValue: true,
    animationDuration: 2500
  },
  {
    icon: "Users",
    value: 19000,
    label: "Employees",
    description: "Corporate workforce",
    color: "blue" as const,
    animateValue: true,
    animationDuration: 2500
  },
  {
    icon: "DollarSign",
    value: 19,
    label: "Billion Network Revenue",
    description: "Authorized retail network",
    color: "purple" as const,
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
    color: "purple" as const,
    animateValue: true,
    animationDuration: 2500
  }
];

// Example component showing different layouts
const ProjectStatsExample: React.FC = () => {
  return (
    <div className="space-y-16 p-8">
      {/* Grid Layout */}
      <div>
        <h3 className="text-2xl font-heading font-bold mb-8">Grid Layout</h3>
        <ProjectStats
          title="Market Leadership"
          subtitle="Powering retail excellence through strategic operations and authorized partnerships"
          stats={attposStats}
          layout="grid"
        />
      </div>

      {/* Cards Layout */}
      <div>
        <h3 className="text-2xl font-heading font-bold mb-8">Cards Layout</h3>
        <ProjectStats
          title="Corporate Overview"
          subtitle="Direct retail network and authorized partnerships"
          stats={attposStats.slice(0, 2)} // Show first 2 stats for cards layout
          layout="cards"
        />
      </div>

      {/* Combined Layout */}
      <div>
        <h3 className="text-2xl font-heading font-bold mb-8">Combined Layout</h3>
        <ProjectStats
          title="Combined Network Impact"
          subtitle="Total reach across all operations and partnerships"
          stats={[
            {
              icon: <DollarSign className="w-8 h-8" />,
              value: 47,
              label: "Billion Total Revenue",
              description: "Combined operations",
              color: "green" as const,
              prefix: "$",
              suffix: "B",
              animateValue: true,
              animationDuration: 3000
            },
            {
              icon: <Store className="w-6 h-6" />,
              value: 5332,
              label: "Total Stores",
              description: "Global footprint",
              color: "orange" as const,
              animateValue: true,
              animationDuration: 3000
            },
            {
              icon: <Users className="w-6 h-6" />,
              value: 19000,
              label: "Direct Employees",
              description: "Corporate workforce",
              color: "indigo" as const,
              suffix: "+",
              animateValue: true,
              animationDuration: 3000
            }
          ]}
          layout="combined"
        />
      </div>

      {/* Without Header */}
      <div>
        <h3 className="text-2xl font-heading font-bold mb-8">Without Header</h3>
        <ProjectStats
          stats={attposStats.slice(0, 3)}
          showHeader={false}
          layout="grid"
        />
      </div>
    </div>
  );
};

export default ProjectStatsExample; 