export default {
  title: 'GoPaste',
  description: 'A lightweight, fast, and secure cross-platform clipboard manager',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Guide', link: '/en/guide/introduction' },
      { text: 'Download', link: 'https://github.com/GoPaste/GoPaste/releases' },
    ],

    sidebar: {
      '/en/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/en/guide/introduction' },
            { text: 'Installation', link: '/en/guide/installation' },
            { text: 'Quick Start', link: '/en/guide/quick-start' },
          ],
        },
        {
          text: 'Features',
          items: [
            { text: 'Clipboard History', link: '/en/guide/clipboard-history' },
            { text: 'Search & Filter', link: '/en/guide/search' },
            { text: 'Favorites & Pin', link: '/en/guide/favorites' },
            { text: 'Hotkeys', link: '/en/guide/hotkeys' },
            { text: 'Themes', link: '/en/guide/themes' },
            { text: 'Security & Encryption', link: '/en/guide/security' },
            { text: 'Data Export', link: '/en/guide/export' },
          ],
        },
        {
          text: 'Platform Notes',
          items: [
            { text: 'macOS', link: '/en/guide/macos' },
            { text: 'Windows', link: '/en/guide/windows' },
            { text: 'Linux', link: '/en/guide/linux' },
          ],
        },
        // Contributing section hidden
        // {
        //   text: 'Contributing',
        //   items: [
        //     { text: 'Roadmap', link: '/en/guide/roadmap' },
        //     { text: 'Contributing Guide', link: '/en/guide/contributing' },
        //   ],
        // },
      ],
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 larkwins',
    },

    editLink: {
      pattern: 'https://github.com/GoPaste/GoPaste/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
}
