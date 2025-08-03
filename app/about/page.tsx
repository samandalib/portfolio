"use client";

import React from 'react';
import AccentDock from '../../components/AccentDock';
import InfoSnippet from '../../components/InfoSnippet';
import aboutContent from '../../public/assets/about/content';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      {/* AccentDock */}
      <AccentDock />
      
      {/* Main Content */}
      <main className="main-content">
        {/* About Content */}
        <div className="container mx-auto px-4 py-8">
          {aboutContent.infoSnippets?.map((snippet, index) => (
            <InfoSnippet
              key={index}
              snippet={snippet}
            />
          ))}
        </div>
      </main>
    </div>
  );
} 