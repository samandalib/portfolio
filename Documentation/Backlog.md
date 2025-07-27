# Backlog

## ✅ COMPLETED: Case Study Routing Implementation

### Problem
- Case studies were previously displayed as sections on the landing page, limiting SEO and user experience
- No dedicated URLs for individual case studies
- Landing page became cluttered with case study content

### Solution Implemented
- **Dynamic Routes**: Created `/case-study/[slug]` dynamic routing structure
- **Client Components**: Case study pages use `"use client"` directive for proper event handling
- **Content Loading**: Content loads from TypeScript files with proper Promise handling using `React.use()`
- **Navigation**: ProjectSlider cards now navigate to dedicated pages instead of revealing sections
- **Layout Consistency**: Case study pages maintain same structure as landing page (AccentDock, ProjectDetailsDisplay, InfoSnippets)
- **Scroll Lock Fix**: Resolved scroll lock issue by matching landing page CSS structure and removing problematic `pointer-events-auto` class

### Files Modified
- `app/case-study/[slug]/page.tsx` (new file)
- `components/ProjectSlider/ProjectSlider.tsx` (navigation logic)
- `public/assets/landing/project-slider-cards.ts` (added slug property)
- Various component files with `"use client"` directives

### Result
- ✅ Individual case study URLs (e.g., `/case-study/project1`)
- ✅ Better SEO with dedicated pages
- ✅ Improved user experience with proper navigation
- ✅ Consistent layout and functionality across pages
- ✅ No scroll lock issues

---

## Issue: InfoSnippet Body Array Flattening (Mixed Content)

### Problem
- When using an array for the `body` property in InfoSnippet (e.g., `[string, string[]]`), the component receives a single string with embedded line breaks and bullets, not the original array structure.
- This causes the UI to render a single `<p>` with `<br>` and bullet characters, instead of a paragraph and a custom-styled bullet list.

### Steps Taken & Discoveries

1. **Confirmed Content Structure**
   - The original content file (`public/assets/case studies/project1/content.ts`) and the synced file (`content/case studies/project1/content.ts`) both have the correct array structure for the `body` property, including mixed arrays (string + nested array).

2. **Checked Sync Scripts**
   - The sync script (`sync-content.js`) only copies files and does not transform or flatten arrays.

3. **Inspected InfoSnippet Component**
   - Added `console.log('snippet.body:', snippet.body);` to the InfoSnippet component.
   - Found that for mixed arrays, `snippet.body` is a string with embedded line breaks and bullets, not an array.
   - For arrays with only strings, the array structure is preserved and renders correctly as a bullet list.

4. **Tested Direct Import**
   - The content file is imported directly as a TypeScript module in `app/page.tsx`:
     ```ts
     import caseStudy from "../public/assets/case studies/project1/content";
     ```
   - This should preserve the array structure, unless something else mutates the data.

5. **Hypothesis**
   - The issue likely occurs in the data flow between the content import and the InfoSnippet component, possibly due to a transformation, mapping, or joining step that flattens mixed arrays to a string.

6. **Next Steps**
   - Add a `console.log(caseStudy.infoSnippets)` in `app/page.tsx` to check if the array structure is preserved immediately after import.
   - If the array is preserved, the problem is in the rendering logic or a mutation before passing to InfoSnippet.
   - If the array is already a string, the problem is in the import or a build step.

### To Do
- Investigate the data flow from import to component.
- Ensure no transformation or flattening occurs for mixed arrays.
- Update this backlog with findings and the final fix. 