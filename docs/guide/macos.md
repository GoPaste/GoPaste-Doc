# macOS 注意事项

GoPaste 对 macOS 有深度适配，但首次启动需要一些设置步骤。

## 首次启动：Gatekeeper 警告

GoPaste 当前版本未使用 Apple Developer 证书签名（ad-hoc 签名），首次启动时 macOS Gatekeeper 可能会拦截。

**提示"身份不明的开发者"：**

1. 将 `GoPaste.app` 拖入**应用程序**文件夹
2. 双击运行（被拦截是正常现象，关掉提示框）
3. 打开「系统设置 → 隐私与安全性」，滚动到底部，点击**「仍要打开」**

> 也可在 Finder 中**右键 → 打开**，然后在弹框中点「打开」。

## "已损坏，无法打开"

在终端执行：

```bash
xattr -cr /Applications/GoPaste.app
```

这将移除 Gatekeeper 添加的隔离属性，执行后重新打开即可。

## 辅助功能权限（模拟粘贴必需）

GoPaste 通过模拟 <kbd>Cmd+V</kbd> 将内容粘贴到目标应用，需要**辅助功能**权限。

首次触发粘贴时系统会弹出授权框，按引导授权即可。

### 每次升级后必须重新授权

::: warning 重要提示
每次升级 GoPaste 后，你**必须**：
1. 打开「系统设置 → 隐私与安全性 → 辅助功能」
2. 在列表中找到 GoPaste
3. 点击 **−（减号）** 按钮**删除**这条记录
4. 回到 GoPaste，触发一次粘贴操作
5. 按提示重新授权

**原因：** macOS 通过 ad-hoc 签名应用的二进制哈希（CDHash）跟踪授权。新版本构建后哈希改变，旧授权失效——但 UI 仍然显示为已启用，导致静默失败。
:::

## 技术说明：为什么需要重新授权

macOS 的 **TCC（透明度、同意与控制）** 系统存储授权记录。对于 ad-hoc 签名的应用（无 Apple 开发者证书），TCC 按 **CDHash**（二进制内容哈希）追踪授权。

升级 GoPaste 后：
- 二进制文件改变 → CDHash 改变
- TCC 记录引用旧 CDHash → 授权失效
- 但系统设置 UI 按 bundle ID 显示，开关看起来仍然是开的

**长期解法：** 使用 Apple Developer ID 证书签名，TCC 则按 TeamIdentifier + bundle ID 追踪授权，跨版本构建稳定。需要 Apple 开发者账号（$99/年）。

## 系统托盘

GoPaste 使用原生 macOS 状态栏项目。点击托盘图标可以：
- 打开面板
- 打开设置
- 退出

## 窗口行为

GoPaste 使用原生 **NSPanel**（而非普通 NSWindow），因此不会抢夺其他应用的焦点。你可以随时呼出、粘贴，面板消失后你之前使用的应用保持焦点不变。
