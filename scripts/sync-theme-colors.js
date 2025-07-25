const fs = require('fs');
const path = require('path');

const globalSettingsPath = path.join(__dirname, '../public/GlobalSettings.ts');
const globalsCssPath = path.join(__dirname, '../app/globals.css');

// Read GlobalSettings.ts
const file = fs.readFileSync(globalSettingsPath, 'utf-8');

// Extract the themeColors object as a JSON-like string
const themeColorsMatch = file.match(/themeColors:\s*({[\s\S]*?})\s*,\s*defaultTheme:/);
if (!themeColorsMatch) {
  throw new Error('themeColors object not found in GlobalSettings.ts');
}
const themeColorsBlock = themeColorsMatch[1];

function extractNestedColor(block, key, mode = 'light') {
  // Find the color object for the key (background, foreground, accent)
  const colorBlockMatch = block.match(new RegExp(`${key}:\s*{([\s\S]*?)}[\,\n]`));
  if (!colorBlockMatch) return null;
  const colorBlock = colorBlockMatch[1];
  // Use light/dark
  const colorMatch = colorBlock.match(new RegExp(`${mode}:\s*['\"]([^'\"]+)['\"]`));
  return colorMatch ? colorMatch[1] : null;
}

const backgroundLight = extractNestedColor(themeColorsBlock, 'background', 'light') || '#ffffff';
const backgroundDark = extractNestedColor(themeColorsBlock, 'background', 'dark') || '#0a0a0a';
const foregroundLight = extractNestedColor(themeColorsBlock, 'foreground', 'light') || '#171717';
const foregroundDark = extractNestedColor(themeColorsBlock, 'foreground', 'dark') || '#ededed';
const accentLight = extractNestedColor(themeColorsBlock, 'accent', 'light') || '#16A34A';
const accentDark = extractNestedColor(themeColorsBlock, 'accent', 'dark') || '#16A34A';

console.log('Extracted colors:', {
  backgroundLight,
  backgroundDark,
  foregroundLight,
  foregroundDark,
  accentLight,
  accentDark
});

// Read globals.css
let css = fs.readFileSync(globalsCssPath, 'utf-8');

// Replace CSS variables in :root and dark mode
let replaced = false;
css = css.replace(/(:root\s*{[\s\S]*?)(--background:)[^;]+;/, function(match, p1, p2) {
  replaced = true;
  return `${p1}${p2} ${backgroundLight};`;
});
if (!replaced) throw new Error('Failed to replace --background in :root');
replaced = false;
css = css.replace(/(:root\s*{[\s\S]*?)(--foreground:)[^;]+;/, function(match, p1, p2) {
  replaced = true;
  return `${p1}${p2} ${foregroundLight};`;
});
if (!replaced) throw new Error('Failed to replace --foreground in :root');
replaced = false;
css = css.replace(/(:root\s*{[\s\S]*?)(--accent-color:)[^;]+;/, function(match, p1, p2) {
  replaced = true;
  return `${p1}${p2} ${accentLight};`;
});
if (!replaced) throw new Error('Failed to replace --accent-color in :root');
replaced = false;
css = css.replace(/(@media\s*\(prefers-color-scheme:\s*dark\)\s*{[\s\S]*?:root\s*{[\s\S]*?)(--background:)[^;]+;/m, function(match, p1, p2) {
  replaced = true;
  return `${p1}${p2} ${backgroundDark};`;
});
if (!replaced) throw new Error('Failed to replace --background in dark mode');
replaced = false;
css = css.replace(/(@media\s*\(prefers-color-scheme:\s*dark\)\s*{[\s\S]*?:root\s*{[\s\S]*?)(--foreground:)[^;]+;/m, function(match, p1, p2) {
  replaced = true;
  return `${p1}${p2} ${foregroundDark};`;
});
if (!replaced) throw new Error('Failed to replace --foreground in dark mode');
replaced = false;
css = css.replace(/(@media\s*\(prefers-color-scheme:\s*dark\)\s*{[\s\S]*?:root\s*{[\s\S]*?)(--accent-color:)[^;]+;/m, function(match, p1, p2) {
  replaced = true;
  return `${p1}${p2} ${accentDark};`;
});
if (!replaced) throw new Error('Failed to replace --accent-color in dark mode');

fs.writeFileSync(globalsCssPath, css);
console.log('Synced theme colors from GlobalSettings.ts to globals.css'); 