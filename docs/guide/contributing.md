# 贡献指南

感谢你有兴趣为 GoPaste 做贡献！欢迎各种形式的贡献。

## 贡献方式

- **Bug 反馈** → [GitHub Issues](https://github.com/GoPaste/GoPaste/issues)
- **功能建议** → [GitHub Discussions](https://github.com/GoPaste/GoPaste/discussions)
- **代码贡献** → Pull Request

## 开发环境搭建

### 前置要求

- [Go 1.22+](https://golang.org/dl/)
- [Node.js 18+](https://nodejs.org/)
- [Wails v2](https://wails.io/docs/gettingstarted/installation) CLI

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
```

### 克隆并运行

```bash
git clone https://github.com/GoPaste/GoPaste.git
cd GoPaste
make dev
```

这将以开发模式启动应用，前端支持热重载。

## 常用命令

```bash
make dev          # 开发模式，支持热重载
make debug        # 开发模式，启用 DevTools
make build        # 构建当前平台
make test         # 运行单元测试
make lint         # 运行 Go vet
make tidy         # go mod tidy
make generate     # 重新生成前端 TypeScript 绑定
```

## 项目结构

```
GoPaste/
├── main.go           # 入口点
├── app.go            # 所有前端可调用的 RPC 方法
├── frontend/         # Vue 3 前端
│   └── src/
│       ├── App.vue   # 主面板组件
│       └── i18n.ts   # 国际化
├── internal/         # Go 后端包
│   ├── clipboard/    # 剪贴板监听
│   ├── crypto/       # AES 加密
│   ├── storage/      # SQLite 仓库
│   ├── hotkey/       # 全局快捷键
│   └── ...
└── build/            # 平台资源（图标、清单文件）
```

## 代码规范

- **后端**：所有前端可调用的方法都在 `App` 结构体（`app.go`）中
- **前端**：图标必须使用 [Lucide Vue Next](https://lucide.dev/)，禁止使用 emoji 作为 UI 图标
- **i18n**：使用现有的 `i18n.ts`，不要切换到 vue-i18n
- **跨平台**：平台特定代码使用构建标签（`_darwin.go`、`_linux.go`、`_windows.go`）

## Commit 规范

使用约定式提交格式：
```
feat: 添加 json 导入支持
fix: 修复 macOS 粘贴死循环问题
docs: 更新 macOS 辅助功能说明
```

## Pull Request 流程

1. Fork 仓库
2. 创建功能分支：`git checkout -b feat/your-feature`
3. 提交带测试的修改
4. 运行 `make lint && make test`
5. 提交 Pull Request，附上清晰的描述

## 许可证

提交贡献即表示你同意你的贡献将以 [MIT 许可证](https://github.com/GoPaste/GoPaste/blob/main/LICENSE) 发布。
