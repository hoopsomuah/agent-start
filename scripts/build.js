/**
 * CopilotVSCode Build Script
 *
 * Creates a distributable package of CopilotVSCode
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

/**
 * Ensures a directory exists
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Copies a directory recursively
 */
function copyDir(src, dest) {
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Main build function
 */
function build() {
  console.log('Building CopilotVSCode...\n');

  // Clean dist directory
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true });
  }
  ensureDir(distDir);

  // Copy source files
  console.log('Copying source files...');
  copyDir(path.join(projectRoot, 'src'), path.join(distDir, 'src'));

  // Copy VS Code config
  console.log('Copying VS Code configuration...');
  copyDir(
    path.join(projectRoot, 'vscode-config'),
    path.join(distDir, 'vscode-config')
  );

  // Copy package.json (filtered for production)
  console.log('Creating production package.json...');
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8')
  );

  const prodPackageJson = {
    name: packageJson.name,
    version: packageJson.version,
    description: packageJson.description,
    main: packageJson.main,
    scripts: {
      start: 'node src/launcher/index.js',
    },
    author: packageJson.author,
    license: packageJson.license,
  };

  fs.writeFileSync(
    path.join(distDir, 'package.json'),
    JSON.stringify(prodPackageJson, null, 2)
  );

  // Copy README and LICENSE
  console.log('Copying documentation...');
  fs.copyFileSync(
    path.join(projectRoot, 'README.md'),
    path.join(distDir, 'README.md')
  );
  fs.copyFileSync(
    path.join(projectRoot, 'LICENSE'),
    path.join(distDir, 'LICENSE')
  );

  // Create data directory placeholder
  ensureDir(path.join(distDir, 'data'));
  fs.writeFileSync(
    path.join(distDir, 'data', '.gitkeep'),
    '# This directory will contain VS Code and user data\n'
  );

  console.log('\n✅ Build complete!');
  console.log(`Output: ${distDir}`);
}

// Run build
build();
