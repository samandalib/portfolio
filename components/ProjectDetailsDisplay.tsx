import React from "react";

interface ProjectDetailsDisplayProps {
  projectHeading: string;
  projectSubheading?: string;
  domain?: string; // New field for domain label (e.g., "HEALTHCARE AI PLATFORM")
  details: {
    year: number;
    company: string;
    team?: string;
    role: string;
    notes?: string;
  };
  skills?: string[]; // New field for skills list
}

const ProjectDetailsDisplay: React.FC<ProjectDetailsDisplayProps> = ({ 
  projectHeading, 
  projectSubheading, 
  domain,
  details, 
  skills 
}) => (
  <div className="mb-12">
    {/* Domain Label with Accent Line */}
    {domain && (
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 bg-accent rounded-full"></div>
        <span 
          className="text-sm font-semibold text-accent uppercase tracking-wider"
          style={{ fontFamily: 'var(--font-manrope)' }}
        >
          {domain}
        </span>
      </div>
    )}

    {/* Main Project Heading */}
    <h1 
      className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100 leading-tight" 
      style={{ fontFamily: 'var(--font-bodoni)' }}
    >
      {projectHeading}
    </h1>

    {/* Project Subheading */}
    {projectSubheading && (
      <p 
        className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
        style={{ fontFamily: 'var(--font-manrope)' }}
      >
        {projectSubheading}
      </p>
    )}

    {/* Project Details Pills */}
    <div className="flex flex-wrap gap-3 mb-8">
      <span 
        className="rounded-full px-4 py-2 font-medium border font-sans"
        style={{ 
          borderColor: 'var(--accent-color, #16A34A)',
          backgroundColor: 'color-mix(in srgb, var(--accent-color, #16A34A) 10%, transparent)',
          color: 'var(--accent-color, #16A34A)'
        }}
        title="Year"
      >
        {details.year}
      </span>
      
      <span 
        className="rounded-full px-4 py-2 font-medium border font-sans"
        style={{ 
          borderColor: 'var(--accent-color, #16A34A)',
          backgroundColor: 'color-mix(in srgb, var(--accent-color, #16A34A) 10%, transparent)',
          color: 'var(--accent-color, #16A34A)'
        }}
        title="Company"
      >
        {details.company}
      </span>
      
      <span 
        className="rounded-full px-4 py-2 font-medium border font-sans"
        style={{ 
          borderColor: 'var(--accent-color, #16A34A)',
          backgroundColor: 'color-mix(in srgb, var(--accent-color, #16A34A) 10%, transparent)',
          color: 'var(--accent-color, #16A34A)'
        }}
        title="Role"
      >
        {details.role}
      </span>
      
      {details.team && (
        <span 
          className="rounded-full px-4 py-2 font-medium border font-sans"
          style={{ 
            borderColor: 'var(--accent-color, #16A34A)',
            backgroundColor: 'color-mix(in srgb, var(--accent-color, #16A34A) 10%, transparent)',
            color: 'var(--accent-color, #16A34A)'
          }}
          title="Team"
        >
          {details.team}
        </span>
      )}
      
      {details.notes && (
        <span 
          className="rounded-full px-4 py-2 font-medium border font-sans"
          style={{ 
            borderColor: 'var(--accent-color, #16A34A)',
            backgroundColor: 'color-mix(in srgb, var(--accent-color, #16A34A) 10%, transparent)',
            color: 'var(--accent-color, #16A34A)'
          }}
          title="Scope"
        >
          {details.notes}
        </span>
      )}
    </div>

    {/* Skills Section */}
    {skills && skills.length > 0 && (
      <div className="mt-8">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="rounded-full px-3 py-1.5 font-medium border font-sans"
              style={{ 
                borderColor: 'var(--accent-color, #16A34A)',
                backgroundColor: 'color-mix(in srgb, var(--accent-color, #16A34A) 10%, transparent)',
                color: 'var(--accent-color, #16A34A)'
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default ProjectDetailsDisplay; 