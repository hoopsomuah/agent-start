# CopilotVSCode Configuration Guide

This document explains all the pre-configured settings in CopilotVSCode and how to customize them if needed.

## Settings Overview

CopilotVSCode comes with carefully chosen defaults optimized for:

1. **Simplicity** - Clean interface without clutter
2. **Productivity** - Smart features enabled by default
3. **Comfort** - Eye-friendly colors and fonts
4. **Safety** - Auto-save and backup features

## Editor Settings

### Font Configuration

```json
{
  "editor.fontSize": 14,
  "editor.fontFamily": "'JetBrains Mono', 'Cascadia Code', 'Fira Code', Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.lineHeight": 1.6
}
```

- **Font Size 14**: Readable without squinting
- **JetBrains Mono**: A beautiful coding font with ligatures
- **Line Height 1.6**: Comfortable spacing between lines

### Code Editing

```json
{
  "editor.wordWrap": "on",
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.bracketPairColorization.enabled": true
}
```

- **Word Wrap**: Long lines wrap instead of scrolling
- **Tab Size 2**: Standard for most modern code
- **Format on Save**: Code is automatically formatted
- **Bracket Colors**: Matching brackets are colored for clarity

## Workbench Settings

### Clean Interface

```json
{
  "workbench.activityBar.location": "top",
  "workbench.editor.showTabs": "single",
  "workbench.layoutControl.enabled": false,
  "editor.minimap.enabled": false
}
```

- **Activity Bar on Top**: More vertical space for code
- **Single Tab**: Focus on one file at a time
- **No Layout Control**: Fewer buttons to confuse
- **No Minimap**: Cleaner right side of editor

### Theme and Icons

```json
{
  "workbench.colorTheme": "Default Dark Modern",
  "workbench.iconTheme": "vs-seti"
}
```

- **Default Dark Modern**: Easy on the eyes, modern look
- **Seti Icons**: Clear file type indicators

## File Settings

### Auto-Save

```json
{
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "files.trimTrailingWhitespace": true
}
```

- **Auto-save after 1 second**: Never lose work
- **Trim Whitespace**: Keep files clean

## GitHub Copilot Settings

### AI Assistance

```json
{
  "github.copilot.enable": {
    "*": true,
    "plaintext": true,
    "markdown": true
  },
  "github.copilot.editor.enableAutoCompletions": true
}
```

- **Enabled Everywhere**: AI help in all file types
- **Auto Completions**: Suggestions appear as you type

## Customizing Settings

To customize any setting:

1. Press `Ctrl+Shift+P`
2. Type "Preferences: Open User Settings (JSON)"
3. Add your customizations

Example customizations:

```json
{
  // Use a different theme
  "workbench.colorTheme": "One Dark Pro",

  // Larger font size
  "editor.fontSize": 16,

  // Show minimap
  "editor.minimap.enabled": true
}
```

## Resetting to Defaults

To reset all settings to CopilotVSCode defaults:

1. Close the application
2. Delete the `data/user-data/User/settings.json` file
3. Restart the application

---

For more information, see the [VS Code documentation](https://code.visualstudio.com/docs/getstarted/settings).
