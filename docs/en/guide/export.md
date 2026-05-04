# Data Export

GoPaste lets you export your entire clipboard history as a JSON file, giving you full control over your data.

## Exporting

1. Open **Settings** from the system tray
2. Navigate to the **Data** section
3. Click **Export**
4. Choose a save location

The exported file contains all your clipboard items in JSON format, including timestamps, content types, and favorites status.

## JSON Format

```json
[
  {
    "id": 1,
    "content": "Hello, World!",
    "type": "text",
    "created_at": "2026-01-15T10:30:00Z",
    "is_favorite": false,
    "is_pinned": false
  }
]
```

## Use Cases

- **Backup**: Keep a backup before upgrading or reinstalling
- **Migration**: Move your history to a new machine
- **Analysis**: Process your clipboard history with other tools

::: info Coming Soon
JSON import is planned for a future release, allowing you to restore from a backup file.
:::
