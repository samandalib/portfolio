# Case Study Routing Implementation

## Overview

The portfolio now uses dynamic routing for individual case studies, providing dedicated URLs and better user experience compared to the previous approach of displaying case studies as sections on the landing page.

## Architecture

### Dynamic Routes
- **Route Pattern**: `/case-study/[slug]`
- **File Location**: `app/case-study/[slug]/page.tsx`
- **Component Type**: Client Component (`"use client"`)

### Content Loading
- **Source**: TypeScript files in `public/assets/case studies/[project]/content.ts`
- **Promise Handling**: Uses `React.use()` to unwrap params Promise
- **Content Mapping**: Static mapping of slugs to content files

### Navigation
- **Trigger**: ProjectSlider card clicks
- **Method**: `useRouter().push()` to navigate to case study pages
- **Slug Property**: Added to project slider cards for navigation

## Implementation Details

### Page Structure
```tsx
"use client";

import React from 'react';
import AccentDock from '@/components/AccentDock';
import ProjectDetailsDisplay from '@/components/ProjectDetailsDisplay';
import InfoSnippet from '@/components/InfoSnippet';

const ProjectPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = React.use(params);
  // ... content loading and rendering
};
```

### Content Mapping
```tsx
const projectContentMap: Record<string, any> = {
  project1: project1Content,
  // Add more projects here
};
```

### Navigation Integration
```tsx
// In ProjectSlider component
const router = useRouter();
onCardClick={(index) => {
  const slug = projects[index].slug;
  if (slug) router.push(`/case-study/${slug}`);
}}
```

## Key Features

### 1. Layout Consistency
- Case study pages maintain the same structure as the landing page
- AccentDock at the top for global controls
- ProjectDetailsDisplay for project information
- InfoSnippets for detailed content

### 2. Event Handling
- Client Component ensures proper event handling
- No scroll lock issues (resolved by matching landing page CSS structure)
- All interactive features work correctly

### 3. SEO Benefits
- Dedicated URLs for each case study
- Better search engine indexing
- Improved social sharing capabilities

### 4. User Experience
- Clean navigation between projects
- Consistent interface across pages
- Proper browser back/forward functionality

## Adding New Case Studies

### 1. Create Content File
```tsx
// public/assets/case studies/project2/content.ts
export default {
  projectHeading: "Project Name",
  projectSubheading: "Project Description",
  domain: "Design",
  details: { /* project details */ },
  skills: ["Skill 1", "Skill 2"],
  infoSnippets: [ /* InfoSnippet data */ ]
};
```

### 2. Update Content Mapping
```tsx
// In app/case-study/[slug]/page.tsx
import project2Content from '../../../public/assets/case studies/project2/content';

const projectContentMap: Record<string, any> = {
  project1: project1Content,
  project2: project2Content, // Add this line
};
```

### 3. Add to Project Slider
```tsx
// In public/assets/landing/project-slider-cards.ts
{
  // ... other properties
  slug: 'project2', // Add this property
}
```

## Technical Considerations

### Client Component Requirements
- Case study pages must be Client Components due to:
  - Interactive features (AccentDock, InfoSnippet controls)
  - Event handling (scroll, mouse events)
  - State management

### Promise Handling
- Next.js 15+ requires `React.use()` to unwrap params Promise
- Ensures proper async data handling

### CSS Structure
- Must match landing page structure to avoid scroll lock issues
- Use `main-content` class and proper section structure
- Avoid `pointer-events-auto` class that can interfere with scrolling

### Performance
- Content is loaded statically at build time
- No server-side rendering for dynamic content
- Efficient client-side navigation

## Troubleshooting

### Scroll Lock Issues
- **Cause**: Mismatched CSS structure between landing page and case study page
- **Solution**: Ensure case study page uses same CSS classes and structure as landing page

### Navigation Issues
- **Cause**: Missing slug property in project slider cards
- **Solution**: Add `slug` property to all project objects in `project-slider-cards.ts`

### Content Not Loading
- **Cause**: Incorrect import path or missing content mapping
- **Solution**: Check import paths and ensure content is mapped in `projectContentMap`

## Future Enhancements

### Potential Improvements
1. **Static Generation**: Add `generateStaticParams()` for better performance (requires Server Component conversion)
2. **Loading States**: Add loading indicators during navigation
3. **Error Boundaries**: Add error handling for missing content
4. **Metadata**: Add dynamic metadata for SEO
5. **Analytics**: Track case study page views

### Scalability
- Current structure supports unlimited case studies
- Easy to add new projects without code changes
- Content-driven approach for easy maintenance 