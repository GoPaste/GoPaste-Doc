# macOS Notes

GoPaste has deep macOS integration but requires a few setup steps on first launch.

## First Launch: Gatekeeper Warning

GoPaste is currently distributed without an Apple Developer certificate (ad-hoc signed). macOS Gatekeeper may block it on first launch.

**"Cannot open — unidentified developer" message:**

1. Drag `GoPaste.app` into your **Applications** folder
2. Double-click to open (being blocked is expected — dismiss the dialog)
3. Go to **System Settings → Privacy & Security**, scroll to the bottom, and click **"Open Anyway"**

> Alternatively, **right-click (Control+click) → Open** in Finder, then click "Open" in the dialog.

## "GoPaste.app is damaged and can't be opened"

Run this command in Terminal:

```bash
xattr -cr /Applications/GoPaste.app
```

This removes the quarantine attribute that Gatekeeper added. Then try opening again.

## Accessibility Permission (Required for Auto-Paste)

GoPaste simulates <kbd>Cmd+V</kbd> to paste content into the target app, which requires **Accessibility** permission.

The system will prompt you the first time you trigger a paste — just follow the instructions.

### After Every Upgrade

::: warning Important
After every GoPaste upgrade, you **must**:
1. Go to **System Settings → Privacy & Security → Accessibility**
2. Find GoPaste in the list
3. Click the **−** (minus) button to **remove** it
4. Return to GoPaste and trigger a paste
5. Re-authorize when prompted

**Why?** macOS tracks ad-hoc signed apps by their binary hash (CDHash). Each new build has a different hash, so the old authorization becomes invalid — but the UI still shows it as enabled, causing silent failures.
:::

See the full technical explanation in the [macOS Accessibility deep-dive](#technical-details) section below.

## Technical Details: Why Re-Authorization Is Needed

macOS's **TCC (Transparency, Consent, and Control)** system stores authorization records. For ad-hoc signed apps (no Apple Developer certificate), it tracks authorization by **CDHash** — a hash of the binary content.

When you build/upgrade GoPaste:
- The binary changes → CDHash changes
- The TCC record references the old CDHash → authorization fails
- But the System Settings UI shows it by bundle ID, so the toggle *looks* enabled

**Solution (long-term):** Signing with an Apple Developer ID certificate makes TCC track by TeamIdentifier + bundle ID, which is stable across builds. This requires an Apple Developer account ($99/year).

## System Tray

GoPaste uses a native macOS status bar item. Click the tray icon to:
- Open the panel
- Open Settings
- Quit

## Window Behavior

GoPaste uses a native **NSPanel** (not a regular NSWindow) so it doesn't steal focus from the app you're working in. You can summon it, paste, and it disappears — your previous app stays in focus throughout.
