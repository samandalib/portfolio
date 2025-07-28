// Content switcher utility for development vs production
import project1Content from '../public/assets/case studies/project1/content';

// Import placeholder content
import project2Placeholder from '../public/assets/case studies/project2/placeholderContent';
import project3Placeholder from '../public/assets/case studies/project3/placeholderContent';
import project4Placeholder from '../public/assets/case studies/project4/placeholderContent';

// Import main content (will be created when ready)
import project2Content from '../public/assets/case studies/project2/content';
import project3Content from '../public/assets/case studies/project3/content';
import project4Content from '../public/assets/case studies/project4/content';

const isDev = process.env.NODE_ENV === 'development';

export const getProjectContent = (projectSlug: string) => {
  switch (projectSlug) {
    case 'project1':
      return project1Content;
    
    case 'project2':
      // In dev mode, you can uncomment the main content import above
      // and switch this to use project2Content instead
      return project2Content;
    
    case 'project3':
      return project3Content;
    
    case 'project4':
      return project4Content;
    
    default:
      return null;
  }
};

// Helper to check if we're using placeholder content
export const isUsingPlaceholder = (projectSlug: string) => {
  return ['project2', 'project3', 'project4'].includes(projectSlug);
}; 