// Content switcher utility for development vs production
import road265Content from '../public/assets/case studies/Road265/content';

// Import placeholder content
import attposPlaceholder from '../public/assets/case studies/attpos/placeholderContent';
import vo2maxPlaceholder from '../public/assets/case studies/vo2max/placeholderContent';
import vrPlaceholder from '../public/assets/case studies/vr/placeholderContent';

// Import main content (will be created when ready)
import attposContent from '../public/assets/case studies/attpos/content';
//import vo2maxContent from '../public/assets/case studies/vo2max/content';
import vrContent from '../public/assets/case studies/vr/content';

const isDev = process.env.NODE_ENV === 'development';

export const getProjectContent = (projectSlug: string) => {
  switch (projectSlug) {
    case 'Road265':
      return road265Content;
    
    case 'attpos':
      // In dev mode, you can uncomment the main content import above
      // and switch this to use attposContent instead
      return attposContent;
    
    case 'vo2max':
      return vo2maxPlaceholder;
    
    case 'vr':
      return vrContent;
    
    default:
      return null;
  }
};

// Helper to check if we're using placeholder content
export const isUsingPlaceholder = (projectSlug: string) => {
  return ['attpos', 'vo2max', 'vr'].includes(projectSlug);
}; 