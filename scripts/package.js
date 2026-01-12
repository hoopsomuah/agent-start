/**
 * CopilotVSCode Package Script
 *
 * Creates a distributable zip package
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const packageDir = path.join(projectRoot, 'packages');

/**
 * Main package function
 */
function createPackage() {
  console.log('Creating CopilotVSCode package...\n');

  // Ensure build exists
  if (!fs.existsSync(distDir)) {
    console.log('Build not found. Running build first...');
    require('./build');
  }

  // Create packages directory
  if (!fs.existsSync(packageDir)) {
    fs.mkdirSync(packageDir, { recursive: true });
  }

  // Get version from package.json
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8')
  );
  const version = packageJson.version;

  // Create zip package name
  const zipName = `CopilotVSCode-v${version}-win64.zip`;
  const zipPath = path.join(packageDir, zipName);

  // Create zip (platform-specific)
  console.log(`Creating ${zipName}...`);

  try {
    if (process.platform === 'win32') {
      // Windows: Use PowerShell
      execSync(
        `powershell Compress-Archive -Path "${distDir}/*" -DestinationPath "${zipPath}" -Force`,
        { stdio: 'inherit' }
      );
    } else {
      // Linux/macOS: Use zip command
      execSync(`cd "${distDir}" && zip -r "${zipPath}" .`, {
        stdio: 'inherit',
      });
    }

    console.log('\n✅ Package created successfully!');
    console.log(`Output: ${zipPath}`);
  } catch (error) {
    console.error('Failed to create zip:', error.message);
    console.log('\nManual packaging instructions:');
    console.log(`1. Navigate to: ${distDir}`);
    console.log(`2. Create a zip file containing all contents`);
    console.log(`3. Name it: ${zipName}`);
  }
}

// Run packaging
createPackage();
