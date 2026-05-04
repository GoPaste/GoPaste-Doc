# Contributing Guide

Thank you for your interest in contributing to GoPaste! All contributions are welcome.

## Ways to Contribute

- **Bug reports** → [GitHub Issues](https://github.com/GoPaste/GoPaste/issues)
- **Feature requests** → [GitHub Discussions](https://github.com/GoPaste/GoPaste/discussions)
- **Code contributions** → Pull Requests

## Development Setup

### Prerequisites

- [Go 1.22+](https://golang.org/dl/)
- [Node.js 18+](https://nodejs.org/)
- [Wails v2](https://wails.io/docs/gettingstarted/installation) CLI

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
```

### Clone and Run

```bash
git clone https://github.com/GoPaste/GoPaste.git
cd GoPaste
make dev
```

This starts the app in development mode with hot-reload for the frontend.

## Common Commands

```bash
make dev          # Development mode with hot reload
make debug        # Dev mode with DevTools enabled
make build        # Build for current platform
make test         # Run unit tests
make lint         # Run Go vet
make tidy         # go mod tidy
make generate     # Regenerate frontend TypeScript bindings
```

## Project Structure

```
GoPaste/
├── main.go           # Entry point
├── app.go            # All frontend-callable RPC methods
├── frontend/         # Vue 3 frontend
│   └── src/
│       ├── App.vue   # Main panel component
│       └── i18n.ts   # Internationalization
├── internal/         # Go backend packages
│   ├── clipboard/    # Clipboard monitoring
│   ├── crypto/       # AES encryption
│   ├── storage/      # SQLite repository
│   ├── hotkey/       # Global hotkey
│   └── ...
└── build/            # Platform resources (icons, manifests)
```

## Code Guidelines

- **Backend**: All frontend-callable methods live in the `App` struct (`app.go`)
- **Frontend**: Icons must use [Lucide Vue Next](https://lucide.dev/) only
- **i18n**: Use the existing `i18n.ts` — do not switch to vue-i18n
- **Cross-platform**: Use build tags (`_darwin.go`, `_linux.go`, `_windows.go`) for platform-specific code

## Commit Style

Use conventional commit format:
```
feat: add json import support
fix: prevent paste loop on macOS
docs: update macOS accessibility guide
```

## Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes with tests
4. Run `make lint && make test`
5. Submit a Pull Request with a clear description

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](https://github.com/GoPaste/GoPaste/blob/main/LICENSE).
