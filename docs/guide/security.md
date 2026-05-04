# 安全与加密

GoPaste 认真对待你的隐私。所有剪贴板数据均存储在本地并加密保存。

## 加密方式

GoPaste 使用 **AES-256-GCM**（高级加密标准 Galois/Counter 模式）加密所有存储的剪贴板内容。这是政府和企业安全应用采用的加密标准。

### 密钥管理

加密密钥存储在操作系统的**系统 Keychain** 中：

- **macOS**：钥匙串访问（Keychain Access）
- **Windows**：Windows 凭据管理器（Credential Manager）
- **Linux**：Secret Service API（通过 D-Bus）

密钥永远不会离开你的设备，也不会传输到任何地方。

## 纯本地存储

GoPaste 将所有数据存储在你电脑上的本地 SQLite 数据库文件中，没有：

- **云同步**（设计如此）
- **遥测数据上报**
- **剪贴板数据网络请求**

## 数据存储位置

数据库和配置文件存储在用户数据目录中：

- **macOS**：`~/Library/Application Support/GoPaste/`
- **Windows**：`%APPDATA%\GoPaste\`
- **Linux**：`~/.config/GoPaste/`

## 数据导出

随时可以在设置中将剪贴板历史导出为 JSON 文件，让你完全掌控自己的数据。

详见[数据导出](./export)。
