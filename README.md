# CopilotVSCode: Code Without Setup

**One click. Zero friction. AI-powered coding for everyone.**

A single executable that delivers a fully-configured Visual Studio Code environment with GitHub Copilot—no installation, no configuration, no confusion. Built for people who want to **start coding, not start learning tools**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Windows-blue.svg)

---

## The Problem

VSCode is powerful but overwhelming for beginners. Extensions, settings, themes, configuration files—it's a barrier before the first line of code is written. Non-technical users give up before they begin.

## The Solution

Download `CopilotVSCode.exe`. Click it. Code.

Everything just works:
- ✅ **Simplified UI** - Decluttered interface, only what matters
- ✅ **AI-Powered** - GitHub Copilot pre-configured and ready
- ✅ **Zero Setup** - No installation, no admin rights, runs anywhere
- ✅ **Auto-Updates** - Always current, never outdated
- ✅ **Beautiful** - Clean theme, perfect fonts, ready to inspire

## Who It's For

- 👧 Kids learning to code for the first time
- 👨‍🏫 Teachers distributing to classrooms
- 🎓 Bootcamp students who need to focus on learning, not tooling
- 🌟 Anyone intimidated by developer environments
- 👨‍👩‍👧 Parents wanting to give their kids a head start

## Quick Start

### For Users

1. Download `CopilotVSCode.exe` from the [Releases](../../releases) page
2. Double-click to run
3. Start coding!

### For Developers

```bash
# Clone the repository
git clone https://github.com/hoopsomuah/agent-start.git
cd agent-start

# Install dependencies
npm install

# Build the executable
npm run build

# Run in development mode
npm run dev
```

## Project Structure

```
agent-start/
├── src/                    # Source files
│   ├── launcher/           # Main executable launcher
│   └── config/             # Pre-configured settings
├── vscode-config/          # VS Code configuration
│   ├── settings.json       # Default settings
│   ├── keybindings.json    # Custom keybindings
│   └── extensions.json     # Pre-installed extensions
├── scripts/                # Build and utility scripts
├── docs/                   # Documentation
└── package.json            # Node.js project configuration
```

## Features

### Simplified Interface
- Minimal toolbar with only essential actions
- Clean activity bar with focused icons
- Distraction-free editing mode ready

### Pre-configured Extensions
- **GitHub Copilot** - AI pair programming
- **GitHub Copilot Chat** - Conversational AI assistance
- **Error Lens** - Inline error highlighting
- **Prettier** - Automatic code formatting

### Beautiful Defaults
- Modern, eye-friendly theme
- JetBrains Mono font for code
- Optimized contrast and colors
- Comfortable line spacing

### Zero Friction
- No installation required
- No admin privileges needed
- Portable - runs from USB drives
- Isolated - doesn't affect system VS Code

## Configuration

The pre-configured settings prioritize:

1. **Simplicity** - Hidden complexity, visible simplicity
2. **Focus** - Remove distractions, enable flow
3. **Safety** - Auto-save, crash recovery, backup
4. **Beauty** - Aesthetically pleasing defaults

## Building

### Prerequisites

- Node.js 18+
- npm 9+
- Windows (for building Windows executables)

### Build Commands

```bash
# Install dependencies
npm install

# Build for Windows
npm run build:win

# Create portable package
npm run package
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## The Vision

**Remove every obstacle between "I want to code" and writing that first line.**

Technology should empower, not intimidate. This is coding without the ceremony—a single file that transforms curiosity into capability.

*Because the next generation of builders shouldn't need to be system administrators first.*

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Visual Studio Code](https://code.visualstudio.com/) - The foundation
- [GitHub Copilot](https://github.com/features/copilot) - AI-powered coding
- All contributors who believe coding should be accessible to everyone

---

**Made by builders, for builders. Starting with the ones who don't know they're builders yet.**
