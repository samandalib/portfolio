const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

// Create a file to stream archive data to
const output = fs.createWriteStream('portfolio-project.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', function() {
  console.log(`Archive created successfully: ${archive.pointer()} total bytes`);
  console.log('File: portfolio-project.zip');
});

// Handle warnings
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.warn(err);
  } else {
    throw err;
  }
});

// Handle errors
archive.on('error', function(err) {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add files to archive, excluding certain directories
const excludeDirs = ['node_modules', '.next', '.git', 'dist', 'build'];

function addDirectory(dirPath, archivePath = '') {
  const items = fs.readdirSync(dirPath);
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const archiveItemPath = path.join(archivePath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!excludeDirs.includes(item)) {
        addDirectory(fullPath, archiveItemPath);
      }
    } else {
      archive.file(fullPath, { name: archiveItemPath });
    }
  });
}

// Add all files from current directory
addDirectory('.');

// Finalize the archive
archive.finalize();