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
  projectName: 'pts-docs',

  onBrokenLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

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
          exclude: ['**/partials/**'],
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
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Discord', href: 'https://discord.gg/qGX73GYNdp'},
              {label: 'Twitter / X', href: 'https://x.com/PiRogueTools'},
              {label: 'GitHub', href: 'https://github.com/PiRogueToolSuite'},
            ],
          },
          {
            title: 'Project',
            items: [
              {label: 'Website', href: 'https://pts-project.org'},
              {label: 'Blog', to: '/blog'},
              {label: 'Contact', href: 'https://pts-project.org/contact/'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PiRogue Tool Suite — Defensive Lab Agency. Built with Docusaurus.`,
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
