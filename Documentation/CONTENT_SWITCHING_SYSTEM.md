# Content Switching System

## Overview

The content switching system allows you to work on main content files in development mode while keeping placeholder content for production until you're ready to publish.

## How It Works

### File Structure
```
public/assets/case studies/
├── project1/
│   └── content.ts (real content - always active)
├── project2/
│   ├── content.ts (main content - for development)
│   └── placeholderContent.ts (placeholder - for production)
├── project3/
│   ├── content.ts (main content - for development)
│   └── placeholderContent.ts (placeholder - for production)
└── project4/
    ├── content.ts (main content - for development)
    └── placeholderContent.ts (placeholder - for production)
```

### Core Files

#### `utils/contentSwitcher.ts`
The main utility that controls which content files are loaded:

```typescript
export const getProjectContent = (projectSlug: string) => {
  switch (projectSlug) {
    case 'project1':
      return project1Content; // Always shows real content
    
    case 'project2':
      return project2Content; // or project2Placeholder
    case 'project3':
      return project3Content; // or project3Placeholder
    case 'project4':
      return project4Content; // or project4Placeholder
    
    default:
      return null;
  }
};
```

## How to Switch Content

### To Work on Main Content (Development Mode)

1. **Edit `utils/contentSwitcher.ts`**
2. **Uncomment the main content import:**
   ```typescript
   import project2Content from '../public/assets/case studies/project2/content';
   ```
3. **Change the return statement:**
   ```typescript
   case 'project2':
     return project2Content; // Instead of project2Placeholder
   ```

### To Use Placeholder Content (Production Mode)

1. **Comment out the main content import:**
   ```typescript
   // import project2Content from '../public/assets/case studies/project2/content';
   ```
2. **Change the return statement:**
   ```typescript
   case 'project2':
     return project2Placeholder;
   ```

## Creating New Content Files

### Step 1: Create the Main Content File
```bash
cp "public/assets/case studies/project2/placeholderContent.ts" "public/assets/case studies/project2/content.ts"
```

### Step 2: Update the Content Switcher
1. Uncomment the import in `utils/contentSwitcher.ts`
2. Change the return statement to use the main content

### Step 3: Edit Your Content
Edit the `content.ts` file with your real project content.

## Current Status

| Project | Main Content | Placeholder | Status |
|---------|-------------|-------------|---------|
| project1 | ✅ Active | N/A | Always shows real content |
| project2 | ✅ Available | ✅ Available | Can switch between both |
| project3 | ✅ Available | ✅ Available | Can switch between both |
| project4 | ✅ Available | ✅ Available | Can switch between both |

## Benefits

- ✅ **Development**: Work on real content files
- ✅ **Production**: Show placeholders until ready
- ✅ **Easy switching**: Edit one file to change behavior
- ✅ **No duplication**: Single source of truth
- ✅ **Safe deployment**: Placeholders prevent showing incomplete content

## Best Practices

1. **Always keep placeholders** for unfinished projects
2. **Test both modes** before deploying
3. **Use descriptive commit messages** when switching content
4. **Document major content changes** in this file

## Troubleshooting

### Module Not Found Error
If you get a "Module not found" error:
1. Check that the `content.ts` file exists in the project folder
2. Verify the import path in `contentSwitcher.ts`
3. Create the file if it doesn't exist:
   ```bash
   cp "placeholderContent.ts" "content.ts"
   ```

### TypeScript Errors
If you get TypeScript errors:
1. Make sure all required properties are defined in your content
2. Check that optional properties are properly handled
3. Verify interface compatibility between content files

## Example Workflow

1. **Start with placeholder** for new projects
2. **Create main content file** when ready to work
3. **Switch to main content** in development
4. **Work on content** and test changes
5. **Switch back to placeholder** for production
6. **Repeat until content is complete**
7. **Keep main content active** when ready to publish 