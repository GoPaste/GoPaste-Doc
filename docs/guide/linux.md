# Linux 注意事项

GoPaste 支持 Linux x64 系统（X11）。

## 系统要求

- **显示服务器**：X11（Wayland 支持有限）
- **系统托盘**：需要支持系统托盘的桌面环境（如带 AppIndicator 扩展的 GNOME、KDE、XFCE、带状态栏的 i3 等）
- **辅助功能**：模拟粘贴需要辅助功能支持

## 安装步骤

1. 下载 `GoPaste_x.x.x_linux_x64.tar.gz`
2. 解压并运行：
   ```bash
   tar -xzf GoPaste_x.x.x_linux_x64.tar.gz
   cd GoPaste
   ./GoPaste
   ```

## 开机自启

将 GoPaste 添加到桌面环境的启动应用，或创建 systemd 用户服务：

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

启用服务：
```bash
systemctl --user enable --now gopaste
```

## 已知限制

- **Wayland**：系统托盘和全局快捷键在 Wayland 下支持有限，在 XWayland 下运行可能有效
- **粘贴模拟**：需要 X11 工具支持，某些精简系统可能需要安装 `xdotool`

::: info 即将上线
AppImage、`.deb` 和 `.rpm` 分发包已在计划中，将在未来版本中提供，改善 Linux 安装体验。
:::
