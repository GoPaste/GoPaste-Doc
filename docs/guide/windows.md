# Windows 注意事项

GoPaste 对 Windows 有原生集成，是最容易上手的平台之一。

## 安装方式

### 绿色版（推荐快速体验）
- 下载 `GoPaste_x.x.x_windows_x64-portable.exe`
- 双击直接运行，无需安装
- 可放置到任意位置：桌面、U 盘、自定义文件夹

### 安装版
- 下载 `GoPaste_x.x.x_windows_x64-setup.exe`
- 运行安装向导
- GoPaste 将安装到 Program Files，并在开始菜单创建快捷方式
- 可通过「Windows 设置 → 应用」卸载

## 开机自启

在 GoPaste 设置中启用**开机自启**，即可在登录 Windows 时自动启动。

## 系统托盘

GoPaste 驻留在 Windows 系统托盘（右下角通知区域）。如果看不到图标，点击 **^** 箭头展开隐藏图标。

右键点击托盘图标可以：
- 打开面板
- 打开设置
- 退出

## SmartScreen 警告

首次启动时，Windows SmartScreen 可能提示"Windows 已保护你的电脑"。这是因为 GoPaste 尚未使用商业代码签名证书签名。

处理方式：点击**更多信息** → **仍要运行**。

## 架构说明

- **x64**：适用于 64 位 Windows（几乎所有现代电脑）
- **x86**：适用于较旧的 32 位 Windows 系统

如不确定，请使用 x64 版本。
