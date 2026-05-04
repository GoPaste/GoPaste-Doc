# Introduction

**GoPaste** is a lightweight, fast, and secure cross-platform clipboard manager. It silently monitors your clipboard activity in the background and gives you instant access to your full clipboard history via a global hotkey — without ever switching windows.

## Why GoPaste?

Modern workflows involve constant copy-pasting. Whether you're a developer, writer, or designer, you've likely lost a piece of important content by accidentally overwriting your clipboard. GoPaste solves this problem elegantly:

- **Zero friction** — runs in the background, no manual action needed to record
- **Instant retrieval** — global hotkey summons your history in under 100ms
- **Privacy first** — all data stays on your device, encrypted at rest

## Features at a Glance

| Feature | Description |
|---------|-------------|
| Auto-record | Monitors clipboard for text, images, links, code, and files |
| Instant access | Global hotkey <code>Alt + `</code> to open the panel |
| Smart search | Real-time full-text search with type filter |
| Favorites | Mark items to keep forever, pin to top |
| AES-256 encryption | All stored content encrypted, key in system Keychain |
| Cross-platform | Windows, macOS, Linux — one codebase |
| Dual themes | Dark and light mode |
| Multilingual | Simplified Chinese, Traditional Chinese, English |
| Data export | One-click JSON export |

## Tech Stack

GoPaste is built with:

- **Backend**: Go + [Wails v2](https://wails.io/) (WebView-based desktop framework)
- **Frontend**: Vue 3 + TypeScript + Vite
- **Storage**: SQLite (pure Go, no CGO dependency)
- **Encryption**: AES-256-GCM + system Keychain

## Next Steps

- [Download and Install](./installation) GoPaste on your platform
- Follow the [Quick Start](./quick-start) guide to get up and running in minutes
