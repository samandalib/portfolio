const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const SOURCE_DIRS = [
  'public/assets/landing',
  'public/assets/case studies',
];
const GLOBAL_SETTINGS = 'public/GlobalSettings.ts';
const DEST_ROOT = 'content';

function shouldInclude(file) {
  return file.endsWith('.ts') && !file.includes('template');
}

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (shouldInclude(file)) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

function getDestPath(srcPath) {
  // Remove 'public/assets/' and prepend DEST_ROOT
  const rel = srcPath.replace(/^public\/assets\//, '');
  return path.join(DEST_ROOT, rel);
}

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log(`Copied: ${src} -> ${dest}`);
}

function removeFile(dest) {
  if (fs.existsSync(dest)) {
    fs.unlinkSync(dest);
    console.log(`Removed: ${dest}`);
  }
}

function syncAll() {
  const allSrcFiles = SOURCE_DIRS.flatMap(dir => getAllFiles(dir));
  allSrcFiles.forEach(src => {
    const dest = getDestPath(src);
    copyFile(src, dest);
  });
}

// Initial sync
syncAll();

// Exit immediately after sync in production (including Vercel)
if (process.env.NODE_ENV === 'production' || process.env.VERCEL === '1') {
  process.exit(0);
}

// Only start the watcher in development (not in production or on Vercel)
if (process.env.NODE_ENV !== 'production' && process.env.VERCEL !== '1') {
  const watcher = chokidar.watch([...SOURCE_DIRS, GLOBAL_SETTINGS], { ignored: /template.*\.ts$/ });

  watcher.on('add', src => {
    if (shouldInclude(src)) {
      const dest = getDestPath(src);
      copyFile(src, dest);
    }
  });

  watcher.on('change', src => {
    if (shouldInclude(src)) {
      const dest = getDestPath(src);
      copyFile(src, dest);
    }
    if (src === GLOBAL_SETTINGS) {
      // Run the font sync script
      exec('node scripts/sync-font-imports.js', (err, stdout, stderr) => {
        if (err) console.error(stderr);
        else console.log(stdout);
      });
    }
  });

  watcher.on('unlink', src => {
    if (shouldInclude(src)) {
      const dest = getDestPath(src);
      removeFile(dest);
    }
  });
} 