"use client";

import React from 'react';
import AccentDock from '@/components/AccentDock';
import ProjectDetailsDisplay from '@/components/ProjectDetailsDisplay';
import InfoSnippet from '@/components/InfoSnippet';
import { getProjectContent } from '../../../utils/contentSwitcher';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const { slug } = React.use(params);
  const content = getProjectContent(slug || '');

  if (!content) {
    notFound();
  }

  const { projectHeading, projectSubheading, details, infoSnippets, domain, skills, projectLogo } = content || {};

  return (
    <main className="main-content flex flex-col min-h-screen px-8 py-16">
      <section className="w-full max-w-6xl mx-auto">
        <div className="w-full px-4 mb-8">
          <AccentDock />
          {details && projectHeading && (
            <ProjectDetailsDisplay
              projectHeading={projectHeading}
              projectSubheading={projectSubheading}
              domain={domain}
              projectLogo={projectLogo}
              details={details}
              skills={skills}
            />
          )}
        </div>
        {/* Main project content (InfoSnippets) */}
        <div className="w-full px-4">
          {infoSnippets && infoSnippets.map((snippet: any, idx: number) => (
            <div key={idx} className="relative mb-32 last:mb-20">
              <InfoSnippet snippet={snippet} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectPage; 