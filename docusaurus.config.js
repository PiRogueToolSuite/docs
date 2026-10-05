// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PiRogue Tool Suite',
  tagline: 'Open-source digital forensics and network traffic analysis for everyone',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.pts-project.org',
  baseUrl: '/',

  organizationName: 'PiRogueToolSuite',
  projectName: 'docs',
  trailingSlash: false,
  onBrokenLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: './sidebarsGuides.js',
        exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_*/**'],
        editUrl:
          'https://github.com/PiRogueToolSuite/piroguetoolsuite.github.io/tree/v2/',
      }),
    ],
    [
      '@docusaurus/plugin-client-redirects',
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({
        // Pages moved into an "advanced" sub-category keep working at their old URL
        redirects: [
          ...[
            'case-import-export',
            'artifact-acquisition',
            'knowledge-graph',
            'import-knowledge',
            'share-knowledge',
            'pirogue-fleet',
            'device-monitoring',
            'traffic-analysis',
            'traffic-decryption',
            'chain-of-custody',
            'external-sources',
            'rest-api',
          ].map((slug) => ({
            from: `/docs/Colander/${slug}`,
            to: `/docs/Colander/advanced/${slug}`,
          })),
          ...[
            'hardware',
            'operating-system',
            'export-data',
            'pre-installed-tools',
            'telemetry',
          ].map((slug) => ({
            from: `/docs/PiRogue/${slug}`,
            to: `/docs/PiRogue/advanced/${slug}`,
          })),
          {
            from: '/docs/PiRogue-ToolSuite/tools-overview',
            to: '/docs/PiRogue-ToolSuite/overview',
          },
          {
            from: '/docs/PiRogue/version-2.x/system-integration',
            to: '/docs/PiRogue/advanced/system-integration',
          },
        ],
      }),
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'ar', 'ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Keep Docusaurus's default underscore-file exclusion (setting `exclude`
          // explicitly overrides it otherwise), plus our own partials folder.
          exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_*/**', '**/partials/**'],
          editUrl:
            'https://github.com/PiRogueToolSuite/piroguetoolsuite.github.io/tree/v2/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/PiRogueToolSuite/piroguetoolsuite.github.io/tree/v2/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/pts-logo.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'PiRogue Tool Suite',
        logo: {
          alt: 'PiRogue Tool Suite Logo',
          src: 'img/pts-logo-circle.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'guides',
            sidebarId: 'guidesSidebar',
            position: 'left',
            label: 'Guides',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://pts-project.org',
            label: 'pts-project.org',
            position: 'right',
          },
          {
            href: 'https://github.com/PiRogueToolSuite',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'PiRogue Tool Suite', to: '/docs/PiRogue-ToolSuite/overview'},
              {label: 'PiRogue', to: '/docs/PiRogue/overview'},
              {label: 'Colander', to: '/docs/Colander/overview'},
              {label: 'Threatr', to: '/docs/Threatr/overview'},
              {label: 'Mandolin', to: '/docs/Mandolin/overview'},
              {label: 'Octopus', to: '/docs/Octopus/overview'},
              {label: 'Mongoose', to: '/docs/Mongoose/overview'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'GitHub', href: 'https://github.com/PiRogueToolSuite'},
              {label: 'Mastodon', href: 'https://infosec.exchange/@pts'},
              {label: 'X', href: 'https://x.com/PiRogueTools'},
              {label: 'Discord', href: 'https://discord.com/invite/qGX73GYNdp'},
              {label: 'Open Collective', href: 'https://opencollective.com/pts'},
            ],
          },
          {
            title: 'Project',
            items: [
              {label: 'Website', href: 'https://pts-project.org'},
              {label: 'Blog', to: '/blog'},
              {label: 'Contact', to: '/contact'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PiRogue Tool Suite, Defensive Lab Agency. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'yaml', 'json', 'python'],
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
    }),
};

export default config;
