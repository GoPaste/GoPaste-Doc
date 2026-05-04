# Security & Encryption

GoPaste takes your privacy seriously. All clipboard data is stored locally and encrypted at rest.

## Encryption

GoPaste uses **AES-256-GCM** (Advanced Encryption Standard in Galois/Counter Mode) to encrypt all stored clipboard content. This is the same encryption standard used by government and enterprise security applications.

### Key Management

The encryption key is stored in your operating system's **system Keychain**:

- **macOS**: Keychain Access
- **Windows**: Windows Credential Manager
- **Linux**: Secret Service API (via D-Bus)

The key never leaves your device and is never transmitted anywhere.

## Local Storage Only

GoPaste stores all data locally in a SQLite database file on your computer. There is:

- **No cloud sync** (by design)
- **No telemetry**
- **No network requests** for your clipboard data

## Data Location

The database and configuration files are stored in your user data directory:

- **macOS**: `~/Library/Application Support/GoPaste/`
- **Windows**: `%APPDATA%\GoPaste\`
- **Linux**: `~/.config/GoPaste/`

## Data Export

You can export your clipboard history as a JSON file at any time from Settings. This gives you full portability and control over your data.

See [Data Export](./export) for details.
