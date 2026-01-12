# Contributing to CopilotVSCode

Thank you for your interest in contributing to CopilotVSCode! This project aims to make coding accessible to everyone, and your contributions help achieve that goal.

## Code of Conduct

By participating in this project, you agree to maintain a welcoming, inclusive environment for all contributors.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](../../issues)
2. If not, create a new issue with:
   - A clear, descriptive title
   - Steps to reproduce the bug
   - Expected vs actual behavior
   - Your operating system and version
   - Screenshots if applicable

### Suggesting Features

1. Check existing [Issues](../../issues) for similar suggestions
2. Create a new issue with:
   - A clear description of the feature
   - Why it would benefit users
   - Any implementation ideas

### Submitting Code

1. **Fork** the repository
2. **Clone** your fork locally
3. Create a **feature branch**: `git checkout -b feature/your-feature-name`
4. Make your changes
5. **Test** your changes thoroughly
6. **Commit** with a clear message: `git commit -m "Add: your feature description"`
7. **Push** to your fork: `git push origin feature/your-feature-name`
8. Open a **Pull Request**

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/agent-start.git
cd agent-start

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for distribution
npm run build
```

## Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add JSDoc comments for functions
- Keep functions small and focused
- Write descriptive variable names

## Commit Messages

Follow conventional commit format:

- `Add:` for new features
- `Fix:` for bug fixes
- `Update:` for non-breaking changes
- `Docs:` for documentation changes
- `Refactor:` for code refactoring

Examples:
- `Add: auto-update functionality`
- `Fix: settings not persisting on restart`
- `Docs: update installation instructions`

## Pull Request Guidelines

1. Keep PRs focused on a single feature or fix
2. Update documentation if needed
3. Ensure all tests pass
4. Request review from maintainers

## Questions?

Feel free to open an issue with questions about contributing. We're happy to help!

---

Thank you for helping make coding accessible to everyone! 🎉
