# Backlog

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