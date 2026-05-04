# 下载安装

前往 [GitHub Releases](https://github.com/GoPaste/GoPaste/releases) 下载最新版本。

## 下载

| 平台 | 文件 | 备注 |
|------|------|------|
| Windows x64 绿色版 | `GoPaste_x.x.x_windows_x64-portable.exe` | 双击直接运行，无需安装 |
| Windows x64 安装版 | `GoPaste_x.x.x_windows_x64-setup.exe` | 含安装向导，自动创建快捷方式 |
| Windows x86 绿色版 | `GoPaste_x.x.x_windows_x86-portable.exe` | 32 位系统 |
| macOS Apple Silicon | `GoPaste_x.x.x_darwin_aarch64.dmg` | M 系列芯片（M1/M2/M3/M4） |
| macOS Intel | `GoPaste_x.x.x_darwin_x64.dmg` | Intel 芯片 |
| macOS Universal | `GoPaste_x.x.x_darwin_universal.dmg` | 兼容 Apple Silicon & Intel |
| Linux x64 | `GoPaste_x.x.x_linux_x64.tar.gz` | 需系统托盘支持（X11） |

## macOS 安装

1. 下载对应芯片架构的 `.dmg` 文件
2. 打开 `.dmg`，将 `GoPaste.app` 拖入**应用程序**文件夹
3. 双击启动

::: warning 首次启动警告
GoPaste 当前版本未使用 Apple Developer 证书签名（ad-hoc 签名），首次启动时 macOS Gatekeeper 可能会拦截。

**解决方法：** 打开「系统设置 → 隐私与安全性」，滚动到底部，点击**「仍要打开」**。

也可在 Finder 中右键点击 `GoPaste.app`，选择「打开」。
:::

::: tip 提示"已损坏，无法打开"
在终端执行：
```bash
xattr -cr /Applications/GoPaste.app
```
然后重新打开。
:::

更多详情请查看 [macOS 注意事项](./macos)。

## Windows 安装

**绿色版**：直接双击 `.exe` 文件即可运行，无需安装，可放置到任意位置。

**安装版**：运行安装向导，GoPaste 将被安装到 Program Files 并在开始菜单创建快捷方式。

## Linux 安装

1. 下载并解压 `.tar.gz` 压缩包：
   ```bash
   tar -xzf GoPaste_x.x.x_linux_x64.tar.gz
   cd GoPaste
   ./GoPaste
   ```
2. Linux 需要系统托盘支持（X11），Wayland 支持有限。

更多详情请查看 [Linux 注意事项](./linux)。
