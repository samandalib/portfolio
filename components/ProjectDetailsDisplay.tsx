import React from "react";

interface ProjectDetailsDisplayProps {
  projectHeading: string;
  projectSubheading?: string;
  domain?: string; // New field for domain label (e.g., "HEALTHCARE AI PLATFORM")
  projectLogo?: string; // New field for project logo URL
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
  projectLogo,
  details, 
  skills 
}) => (
  <div className="mb-20 bg-gradient-to-br from-gray-50/50 to-white/30 dark:from-gray-900/30 dark:to-gray-800/20 backdrop-blur-sm rounded-3xl p-4 lg:p-8 border border-gray-200/30 dark:border-gray-700/30 modern-shadow-lg">
    {/* Domain Label with Logo and Accent Line */}
    {domain && (
      <div className="flex items-center gap-4 mb-6">
        {projectLogo && (
          <img 
            src={projectLogo}
            alt={`${projectHeading} logo`}
            className={`w-8 h-8 lg:w-10 lg:h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 ${
              projectLogo.endsWith('.svg') ? 'svg-logo' : ''
            }`}
          />
        )}
        <div className="w-1.5 h-8 bg-accent rounded-full modern-shadow-sm"></div>
        <span 
          className="text-sm font-bold text-accent uppercase tracking-[0.15em] opacity-90"
          style={{ fontFamily: 'var(--font-manrope)' }}
        >
          {domain}
        </span>
      </div>
    )}

    {/* Main Project Heading */}
    <h1 
      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-[0.9] tracking-tight" 
      style={{ fontFamily: 'var(--font-bodoni)' }}
    >
      {projectHeading}
    </h1>

    {/* Project Subheading */}
    {projectSubheading && (
      <p 
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl"
        style={{ fontFamily: 'var(--font-manrope)' }}
      >
        {projectSubheading}
      </p>
    )}

    {/* Project Details Pills */}
    <div className="flex flex-wrap gap-3 mb-10">
      <span 
        className="rounded-full px-5 py-2.5 font-semibold border-2 font-sans text-sm transition-all duration-300 hover:scale-105 modern-shadow-sm"
        style={{ 
          borderColor: 'var(--accent-color, #16A34A)',
          backgroundColor: 'color-mix(in srgb, var(--accent-color, #16A34A) 8%, transparent)',
          color: 'var(--accent-color, #16A34A)'
        }}
        title="Year"
      >
        {details.year}
      </span>
      
      <span 
        className="rounded-full px-5 py-2.5 font-semibold border-2 font-sans text-sm transition-all duration-300 hover:scale-105 modern-shadow-sm"
        style={{ 
          borderColor: 'var(--accent-color, #16A34A)',
          backgroundColor: 'color-mix(in srgb, var(--accent-color, #16A34A) 8%, transparent)',
          color: 'var(--accent-color, #16A34A)'
        }}
        title="Company"
      >
        {details.company}
      </span>
      
      <span 
        className="rounded-full px-5 py-2.5 font-semibold border-2 font-sans text-sm transition-all duration-300 hover:scale-105 modern-shadow-sm"
        style={{ 
          borderColor: 'var(--accent-color, #16A34A)',
          backgroundColor: 'color-mix(in srgb, var(--accent-color, #16A34A) 8%, transparent)',
          color: 'var(--accent-color, #16A34A)'
        }}
        title="Role"
      >
        {details.role}
      </span>
      
      {details.team && (
        <span 
          className="rounded-full px-5 py-2.5 font-semibold border-2 font-sans text-sm transition-all duration-300 hover:scale-105 modern-shadow-sm"
          style={{ 
            borderColor: 'var(--accent-color, #16A34A)',
            backgroundColor: 'color-mix(in srgb, var(--accent-color, #16A34A) 8%, transparent)',
            color: 'var(--accent-color, #16A34A)'
          }}
          title="Team"
        >
          {details.team}
        </span>
      )}
      
      {details.notes && (
        <span 
          className="rounded-full px-5 py-2.5 font-semibold border-2 font-sans text-sm transition-all duration-300 hover:scale-105 modern-shadow-sm"
          style={{ 
            borderColor: 'var(--accent-color, #16A34A)',
            backgroundColor: 'color-mix(in srgb, var(--accent-color, #16A34A) 8%, transparent)',
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
      <div className="mt-10 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 font-sans">Skills & Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="rounded-full px-4 py-2 font-medium border font-sans text-sm bg-gray-50/80 dark:bg-gray-800/50 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 modern-shadow-sm"
              style={{ 
                fontFamily: 'var(--font-manrope)'
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