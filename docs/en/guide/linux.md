# Linux Notes

GoPaste supports Linux x64 systems with X11.

## Requirements

- **Display server**: X11 (Wayland support is limited)
- **System tray**: A desktop environment with system tray support (e.g., GNOME with AppIndicator extension, KDE, XFCE, i3 with status bar)
- **Accessibility**: Required for simulated paste (xdotool or equivalent)

## Installation

1. Download `GoPaste_x.x.x_linux_x64.tar.gz`
2. Extract and run:
   ```bash
   tar -xzf GoPaste_x.x.x_linux_x64.tar.gz
   cd GoPaste
   ./GoPaste
   ```

## Auto-Start

To have GoPaste start with your session, add it to your desktop environment's startup applications, or create a systemd user service:

```ini
# ~/.config/systemd/user/gopaste.service
[Unit]
Description=GoPaste Clipboard Manager

[Service]
ExecStart=/path/to/GoPaste
Restart=on-failure

[Install]
WantedBy=default.target
```

Enable with:
```bash
systemctl --user enable --now gopaste
```

## Known Limitations

- **Wayland**: System tray and global hotkeys have limited support on Wayland. Running under XWayland may work.
- **Paste simulation**: Requires X11 tools. On some minimal setups you may need to install `xdotool`.

::: info Coming Soon
AppImage, `.deb`, and `.rpm` distribution formats are planned for a future release to improve Linux installation experience.
:::
