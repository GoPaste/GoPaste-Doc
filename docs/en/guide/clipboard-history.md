# Clipboard History

GoPaste automatically records everything you copy to your clipboard — no manual action required.

## Supported Content Types

| Type | Description |
|------|-------------|
| **Text** | Plain text, multi-line content, code snippets |
| **Images** | Screenshots, photos, graphics |
| **Links** | URLs are detected and categorized separately |
| **Files** | File paths copied from file managers |

## How It Works

GoPaste runs a background monitor that listens for clipboard change events from your operating system. When content changes:

1. The new item is captured
2. If encryption is enabled (default), it's encrypted with AES-256-GCM
3. The item is stored in a local SQLite database
4. It appears at the top of your history list

## Browsing History

Open the panel with <kbd>Alt</kbd> + <kbd>`</kbd> to see your history. Items are ordered newest first. Each item displays:

- A **preview** of the content (truncated for long items)
- The **content type** icon
- A **timestamp** indicating when it was copied

## Managing Items

- **Paste an item**: Click it or press <kbd>Enter</kbd> while selected
- **Delete an item**: Select it and press <kbd>Delete</kbd>
- **Favorite an item**: Click the star icon to mark it as a favorite

## Storage Limits

By default, GoPaste keeps a rolling history of recent items. Favorited and pinned items are never automatically removed.
