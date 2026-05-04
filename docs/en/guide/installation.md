# Installation

Download the latest version from [GitHub Releases](https://github.com/GoPaste/GoPaste/releases).

## Download

| Platform | File | Notes |
|----------|------|-------|
| Windows x64 Portable | `GoPaste_x.x.x_windows_x64-portable.exe` | Double-click to run, no installation required |
| Windows x64 Installer | `GoPaste_x.x.x_windows_x64-setup.exe` | Installer with setup wizard, auto-creates shortcuts |
| Windows x86 Portable | `GoPaste_x.x.x_windows_x86-portable.exe` | For 32-bit systems |
| macOS Apple Silicon | `GoPaste_x.x.x_darwin_aarch64.dmg` | M-series chips (M1/M2/M3/M4) |
| macOS Intel | `GoPaste_x.x.x_darwin_x64.dmg` | Intel chips |
| macOS Universal | `GoPaste_x.x.x_darwin_universal.dmg` | Supports both Apple Silicon & Intel |
| Linux x64 | `GoPaste_x.x.x_linux_x64.tar.gz` | Requires system tray support (X11) |

## macOS Installation

1. Download the `.dmg` file for your chip architecture
2. Open the `.dmg` and drag `GoPaste.app` to your **Applications** folder
3. Double-click to launch

::: warning First Launch Warning
GoPaste is currently distributed without an Apple Developer certificate (ad-hoc signed). macOS Gatekeeper may block it on first launch.

**Fix:** Go to **System Settings → Privacy & Security**, scroll to the bottom, and click **"Open Anyway"**.

Alternatively, right-click (Control+click) on `GoPaste.app` in Finder and select "Open".
:::

::: tip "GoPaste.app is damaged and can't be opened"
Run this in Terminal:
```bash
xattr -cr /Applications/GoPaste.app
```
Then try opening again.
:::

See [macOS Notes](./macos) for more details on permissions and known issues.

## Windows Installation

**Portable version**: Simply double-click the `.exe` file. No installation needed. You can place it anywhere.

**Installer version**: Run the setup wizard. GoPaste will be installed to Program Files and a shortcut added to the Start Menu.

## Linux Installation

1. Download and extract the `.tar.gz` archive:
   ```bash
   tar -xzf GoPaste_x.x.x_linux_x64.tar.gz
   cd GoPaste
   ./GoPaste
   ```
2. Linux requires a system tray (X11). Wayland support is limited.

See [Linux Notes](./linux) for more details.
