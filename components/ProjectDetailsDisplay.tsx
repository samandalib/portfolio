import React from "react";

interface ProjectDetailsDisplayProps {
  projectHeading: string;
  projectSubheading?: string;
  details: {
    year: number;
    company: string;
    team?: string;
    role: string;
    notes?: string;
  };
}

const ProjectDetailsDisplay: React.FC<ProjectDetailsDisplayProps> = ({ projectHeading, projectSubheading, details }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold mb-1 text-gray-900 dark:text-gray-100" style={{ fontFamily: 'var(--font-bodoni)' }}>{projectHeading}</h2>
    {projectSubheading && <h3 className="text-xl font-medium mb-4 text-gray-700 dark:text-gray-300" style={{ fontFamily: 'var(--font-manrope)' }}>{projectSubheading}</h3>}
    <div className="flex flex-wrap gap-x-4 gap-y-2 text-base" style={{ fontFamily: 'var(--font-manrope)' }}>
      <span className="relative rounded-full px-4 py-1 font-medium overflow-hidden" style={{ display: 'inline-block' }}>
        <span className="absolute inset-0" style={{ background: 'var(--accent-color, #16A34A)', opacity: 0.12, zIndex: 0, borderRadius: '9999px' }}></span>
        <span className="relative z-10 text-foreground-light dark:text-foreground-dark"><strong>Year:</strong> {details.year}</span>
      </span>
      <span className="relative rounded-full px-4 py-1 font-medium overflow-hidden" style={{ display: 'inline-block' }}>
        <span className="absolute inset-0" style={{ background: 'var(--accent-color, #16A34A)', opacity: 0.12, zIndex: 0, borderRadius: '9999px' }}></span>
        <span className="relative z-10 text-foreground-light dark:text-foreground-dark"><strong>Company:</strong> {details.company}</span>
      </span>
      {details.team && (
        <span className="relative rounded-full px-4 py-1 font-medium overflow-hidden" style={{ display: 'inline-block' }}>
          <span className="absolute inset-0" style={{ background: 'var(--accent-color, #16A34A)', opacity: 0.12, zIndex: 0, borderRadius: '9999px' }}></span>
          <span className="relative z-10 text-foreground-light dark:text-foreground-dark"><strong>Team:</strong> {details.team}</span>
        </span>
      )}
      <span className="relative rounded-full px-4 py-1 font-medium overflow-hidden" style={{ display: 'inline-block' }}>
        <span className="absolute inset-0" style={{ background: 'var(--accent-color, #16A34A)', opacity: 0.12, zIndex: 0, borderRadius: '9999px' }}></span>
        <span className="relative z-10 text-foreground-light dark:text-foreground-dark"><strong>Role:</strong> {details.role}</span>
      </span>
      {details.notes && (
        <span className="relative rounded-full px-4 py-1 font-medium overflow-hidden" style={{ display: 'inline-block' }}>
          <span className="absolute inset-0" style={{ background: 'var(--accent-color, #16A34A)', opacity: 0.12, zIndex: 0, borderRadius: '9999px' }}></span>
          <span className="relative z-10 text-foreground-light dark:text-foreground-dark"><strong>Notes:</strong> {details.notes}</span>
        </span>
      )}
    </div>
  </div>
);

export default ProjectDetailsDisplay; 