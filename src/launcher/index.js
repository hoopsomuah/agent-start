/**
 * CopilotVSCode Launcher
 *
 * Downloads, configures, and launches a portable VS Code instance
 * with GitHub Copilot pre-configured and ready to use.
 *
 * @author Hoop Somuah
 * @license MIT
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// TODO: Implement auto-download feature using https module

// Configuration
const CONFIG = {
  vscodeVersion: 'stable',
  vscodeDownloadUrl:
    'https://update.code.visualstudio.com/latest/win32-x64-archive/stable',
  dataDir: path.join(__dirname, '..', '..', 'data'),
  configDir: path.join(__dirname, '..', '..', 'vscode-config'),
  extensionsToInstall: [
    'github.copilot',
    'github.copilot-chat',
    'esbenp.prettier-vscode',
    'usernamehw.errorlens',
  ],
};

/**
 * Ensures a directory exists, creating it if necessary
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

/**
 * Copies configuration files to VS Code data directory
 */
function copyConfig(source, dest) {
  if (fs.existsSync(source)) {
    const content = fs.readFileSync(source, 'utf8');
    ensureDir(path.dirname(dest));
    fs.writeFileSync(dest, content);
    console.log(`Copied config: ${path.basename(source)}`);
  }
}

/**
 * Sets up the VS Code data directory with our configuration
 */
function setupDataDirectory() {
  const userDataDir = path.join(CONFIG.dataDir, 'user-data', 'User');
  ensureDir(userDataDir);

  // Copy settings
  copyConfig(
    path.join(CONFIG.configDir, 'settings.json'),
    path.join(userDataDir, 'settings.json')
  );

  // Copy keybindings
  copyConfig(
    path.join(CONFIG.configDir, 'keybindings.json'),
    path.join(userDataDir, 'keybindings.json')
  );

  console.log('Configuration applied successfully!');
}

/**
 * Finds the VS Code executable in common locations
 */
function findVSCode() {
  const possiblePaths = [
    // Portable VS Code in data directory
    path.join(CONFIG.dataDir, 'vscode', 'Code.exe'),
    path.join(CONFIG.dataDir, 'vscode', 'bin', 'code'),
    // System VS Code (Windows)
    path.join(
      process.env.LOCALAPPDATA || '',
      'Programs',
      'Microsoft VS Code',
      'Code.exe'
    ),
    // System VS Code (macOS)
    '/Applications/Visual Studio Code.app/Contents/MacOS/Electron',
    // System VS Code (Linux)
    '/usr/bin/code',
    '/usr/share/code/code',
  ];

  for (const vscodePath of possiblePaths) {
    if (fs.existsSync(vscodePath)) {
      return vscodePath;
    }
  }

  return null;
}

/**
 * Launches VS Code with our configuration
 */
function launchVSCode(vscodePath, workspaceDir) {
  const userDataDir = path.join(CONFIG.dataDir, 'user-data');
  const extensionsDir = path.join(CONFIG.dataDir, 'extensions');

  ensureDir(userDataDir);
  ensureDir(extensionsDir);

  const args = [
    `--user-data-dir=${userDataDir}`,
    `--extensions-dir=${extensionsDir}`,
    '--new-window',
  ];

  if (workspaceDir && fs.existsSync(workspaceDir)) {
    args.push(workspaceDir);
  }

  console.log('Launching CopilotVSCode...');
  console.log(`User data: ${userDataDir}`);
  console.log(`Extensions: ${extensionsDir}`);

  const vscode = spawn(vscodePath, args, {
    detached: true,
    stdio: 'ignore',
  });

  vscode.unref();
  console.log('VS Code launched successfully!');
}

/**
 * Displays setup instructions when VS Code is not found
 */
function showSetupInstructions() {
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║                    CopilotVSCode Setup                           ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  VS Code was not found on your system.                          ║
║                                                                  ║
║  To use CopilotVSCode, you need VS Code installed:              ║
║                                                                  ║
║  1. Download VS Code from: https://code.visualstudio.com        ║
║  2. Install or extract to: ${CONFIG.dataDir}/vscode             ║
║  3. Run this launcher again                                     ║
║                                                                  ║
║  For portable setup (recommended):                              ║
║  - Download the .zip version of VS Code                         ║
║  - Extract to the 'data/vscode' directory                       ║
║  - This keeps everything self-contained                         ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
`);
}

/**
 * Main entry point
 */
async function main() {
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║                      CopilotVSCode                               ║
║           Code Without Setup • AI-Powered Coding                 ║
╚══════════════════════════════════════════════════════════════════╝
`);

  // Setup data directory and copy configs
  ensureDir(CONFIG.dataDir);
  setupDataDirectory();

  // Find VS Code
  const vscodePath = findVSCode();

  if (!vscodePath) {
    showSetupInstructions();
    process.exit(1);
  }

  console.log(`Found VS Code at: ${vscodePath}`);

  // Get workspace directory from command line args
  const workspaceDir = process.argv[2];

  // Launch VS Code
  launchVSCode(vscodePath, workspaceDir);
}

// Run the launcher
main().catch((error) => {
  console.error('Error:', error.message);
  process.exit(1);
});
