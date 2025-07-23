const fs = require('fs');
const path = require('path');

const globalSettingsPath = path.join(__dirname, '../public/GlobalSettings.ts');
const fontsTsPath = path.join(__dirname, '../app/fonts.ts');

// Helper to extract only the primary font name (before first comma)
function getPrimaryFont(fontString) {
  if (!fontString) return null;
  return fontString.split(',')[0].replace(/['"]/g, '').trim();
}

// 1. Extract font family names from GlobalSettings.ts
const file = fs.readFileSync(globalSettingsPath, 'utf-8');
const fontPresetRegex = /fontPresets:\s*\[([\s\S]*?)\]/m;
const defaultFontsRegex = /defaultFonts:\s*{([\s\S]*?)}[\,\n]/m;
const match = file.match(fontPresetRegex);
const defaultFontsMatch = file.match(defaultFontsRegex);

if (!match) {
  console.error('Could not find fontPresets in GlobalSettings.ts');
  process.exit(1);
}

const presetsBlock = match[1];
const fontNames = new Set();
const fontWeights = {};
const presetObjRegex = /{([^}]*)}/g;
let presetMatch;
while ((presetMatch = presetObjRegex.exec(presetsBlock))) {
  const presetStr = presetMatch[1];
  let weightMatch = presetStr.match(/weight\s*:\s*([0-9\[\], ]+)/);
  let weight = weightMatch ? weightMatch[1].replace(/\[|\]/g, '').split(',').map(w => w.trim()).filter(Boolean) : ['400'];
  if (weight.length === 0) weight = ['400'];
  // Extract heading and body font names only
  let headingMatch = presetStr.match(/heading\s*:\s*['"]([^'"]+)['"]/);
  let bodyMatch = presetStr.match(/body\s*:\s*['"]([^'"]+)['"]/);
  [headingMatch, bodyMatch].forEach(match => {
    if (match && match[1]) {
      const fontName = getPrimaryFont(match[1]);
      if (fontName && !['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy'].includes(fontName.toLowerCase())) {
        fontNames.add(fontName);
        fontWeights[fontName] = weight;
      }
    }
  });
}

// Extract from defaultFonts
if (defaultFontsMatch) {
  const defaultFontsBlock = defaultFontsMatch[1];
  // Extract heading and body font names only
  let headingMatch = defaultFontsBlock.match(/heading\s*:\s*['"]([^'"]+)['"]/);
  let bodyMatch = defaultFontsBlock.match(/body\s*:\s*['"]([^'"]+)['"]/);
  [headingMatch, bodyMatch].forEach(match => {
    if (match && match[1]) {
      const fontName = getPrimaryFont(match[1]);
      if (fontName && !['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy'].includes(fontName.toLowerCase())) {
        fontNames.add(fontName);
        fontWeights[fontName] = ['400']; // Default weight for defaultFonts
      }
    }
  });
}

if (fontNames.size === 0) {
  console.warn('Warning: No custom fonts found in fontPresets. Only generic families detected.');
}

// List of Google Fonts available in next/font/google (partial, for warning)
const knownGoogleFonts = [
  'Roboto', 'Inter', 'Manrope', 'Bodoni Moda', 'Playfair Display', 'Montserrat', 'Lato', 'Oswald', 'Merriweather', 'Comic Sans MS', 'Courier New', 'Arial', 'Open Sans', 'Poppins', 'Nunito', 'Raleway', 'Work Sans', 'Fira Sans', 'Source Sans Pro', 'PT Serif', 'PT Sans', 'Muli', 'Rubik', 'Quicksand', 'Lora', 'Cabin', 'Barlow', 'Bebas Neue', 'Dancing Script', 'Pacifico', 'Merriweather Sans', 'Archivo', 'Space Grotesk', 'Space Mono', 'IBM Plex Sans', 'IBM Plex Serif', 'IBM Plex Mono', 'DM Sans', 'DM Serif Display', 'DM Mono', 'Handjet', 'Orbitron', 'Permanent Marker', 'Shadows Into Light', 'Zilla Slab', 'Abel', 'Anton', 'Bangers', 'Bebas Neue', 'Caveat', 'Chivo', 'Cinzel', 'Cormorant', 'Crimson Text', 'Dosis', 'Exo', 'Fira Code', 'Fjalla One', 'Inconsolata', 'Josefin Sans', 'Karla', 'Libre Baskerville', 'Libre Franklin', 'Lobster', 'Maven Pro', 'Mukta', 'Nanum Gothic', 'Nunito Sans', 'Old Standard TT', 'Orbitron', 'PT Mono', 'Quattrocento', 'Quicksand', 'Righteous', 'Roboto Condensed', 'Roboto Mono', 'Saira', 'Satisfy', 'Signika', 'Slabo 27px', 'Source Code Pro', 'Titillium Web', 'Varela Round', 'Vollkorn', 'Yanone Kaffeesatz'
];

fontNames.forEach(font => {
  if (!knownGoogleFonts.includes(font)) {
    console.warn(`Warning: Font "${font}" may not be available in next/font/google. Check the font name or add it manually if needed.`);
  }
});

// 2. Generate import/export lines for next/font/google
const importLines = [];
const exportLines = [];
fontNames.forEach(font => {
  // Convert to valid identifier (e.g., Playfair_Display)
  const varName = font.replace(/\s+/g, '_').replace(/[^A-Za-z0-9_]/g, '');
  importLines.push(
    `import { ${varName} } from 'next/font/google';`
  );
  // Build options object with only valid properties
  let options = [];
  if (fontWeights[font] && fontWeights[font][0] !== undefined) {
    options.push(`weight: [${fontWeights[font].map(w => `'${w}'`).join(', ')}]`);
  }
  // Always include variable for CSS var
  options.push(`variable: '--font-${varName.toLowerCase()}'`);
  // Only include display if present (default to 'swap')
  options.push(`display: 'swap'`);
  // Only include subsets for Bodoni Moda and Manrope (or other known fonts that support it)
  if (["Bodoni Moda", "Manrope"].includes(font)) {
    options.unshift(`subsets: ['latin']`);
  }
  exportLines.push(
    `export const ${varName.toLowerCase()} = ${varName}({ ${options.join(', ')} });`
  );
});

// 3. Write to fonts.ts (overwrite with only the used fonts)
const output = `// AUTO-GENERATED BY scripts/sync-font-imports.js
${importLines.join('\n')}

${exportLines.join('\n')}
`;

fs.writeFileSync(fontsTsPath, output);
console.log('Synced app/fonts.ts with the following fonts:', [...fontNames]); 