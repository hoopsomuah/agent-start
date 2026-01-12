/**
 * CopilotVSCode Configuration Module
 *
 * Exports pre-configured settings for VS Code customization
 */

const defaultSettings = {
  // Editor settings optimized for beginners
  editor: {
    fontSize: 14,
    fontFamily:
      '\'JetBrains Mono\', \'Cascadia Code\', \'Fira Code\', Consolas, \'Courier New\', monospace',
    fontLigatures: true,
    lineHeight: 1.6,
    wordWrap: 'on',
    tabSize: 2,
    insertSpaces: true,
    minimap: { enabled: false },
    formatOnSave: true,
    formatOnPaste: true,
    bracketPairColorization: { enabled: true },
    cursorBlinking: 'smooth',
    cursorSmoothCaretAnimation: 'on',
    smoothScrolling: true,
  },

  // Workbench settings for clean UI
  workbench: {
    startupEditor: 'welcomePage',
    colorTheme: 'Default Dark Modern',
    iconTheme: 'vs-seti',
    activityBar: { location: 'top' },
    editor: { showTabs: 'single' },
    layoutControl: { enabled: false },
  },

  // File settings with auto-save
  files: {
    autoSave: 'afterDelay',
    autoSaveDelay: 1000,
    trimTrailingWhitespace: true,
    insertFinalNewline: true,
  },

  // Copilot settings
  copilot: {
    enable: {
      '*': true,
      plaintext: true,
      markdown: true,
    },
    editor: {
      enableAutoCompletions: true,
    },
  },
};

const recommendedExtensions = [
  {
    id: 'github.copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programming - suggests code as you type',
    required: true,
  },
  {
    id: 'github.copilot-chat',
    name: 'GitHub Copilot Chat',
    description: 'Conversational AI assistance for coding questions',
    required: true,
  },
  {
    id: 'esbenp.prettier-vscode',
    name: 'Prettier',
    description: 'Automatic code formatting on save',
    required: false,
  },
  {
    id: 'usernamehw.errorlens',
    name: 'Error Lens',
    description: 'Shows errors inline for immediate feedback',
    required: false,
  },
];

module.exports = {
  defaultSettings,
  recommendedExtensions,
};
