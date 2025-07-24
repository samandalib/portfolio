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
      <span className="rounded-full px-4 py-1 font-medium border" style={{ display: 'inline-block', borderColor: 'var(--accent-color, #16A34A)' }}>
        <span className="text-foreground-light dark:text-foreground-dark"><strong>Year:</strong> {details.year}</span>
      </span>
      <span className="rounded-full px-4 py-1 font-medium border" style={{ display: 'inline-block', borderColor: 'var(--accent-color, #16A34A)' }}>
        <span className="text-foreground-light dark:text-foreground-dark"><strong>Company:</strong> {details.company}</span>
      </span>
      {details.team && (
        <span className="rounded-full px-4 py-1 font-medium border" style={{ display: 'inline-block', borderColor: 'var(--accent-color, #16A34A)' }}>
          <span className="text-foreground-light dark:text-foreground-dark"><strong>Team:</strong> {details.team}</span>
        </span>
      )}
      <span className="rounded-full px-4 py-1 font-medium border" style={{ display: 'inline-block', borderColor: 'var(--accent-color, #16A34A)' }}>
        <span className="text-foreground-light dark:text-foreground-dark"><strong>Role:</strong> {details.role}</span>
      </span>
      {details.notes && (
        <span className="rounded-full px-4 py-1 font-medium border" style={{ display: 'inline-block', borderColor: 'var(--accent-color, #16A34A)' }}>
          <span className="text-foreground-light dark:text-foreground-dark"><strong>Notes:</strong> {details.notes}</span>
        </span>
      )}
    </div>
  </div>
);

export default ProjectDetailsDisplay; 