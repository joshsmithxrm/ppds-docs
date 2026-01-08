import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Power Platform Developer Suite',
  tagline: 'Pro-grade tooling for Power Platform developers',
  favicon: 'img/favicon.ico',

  url: 'https://joshsmithxrm.github.io',
  baseUrl: '/ppds-docs/',

  organizationName: 'joshsmithxrm',
  projectName: 'ppds-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/joshsmithxrm/ppds-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/joshsmithxrm/ppds-docs/tree/main/',
          blogTitle: 'PPDS Blog',
          blogDescription: 'Updates, guides, and insights from the Power Platform Developer Suite team',
          postsPerPage: 10,
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 5,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/ppds-social-card.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Power Platform Developer Suite',
      logo: {
        alt: 'PPDS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/joshsmithxrm/power-platform-developer-suite',
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
            { label: 'Getting Started', to: '/docs/getting-started/installation' },
            { label: 'Guides', to: '/docs/guides/authentication' },
            { label: 'CLI Reference', to: '/docs/reference/cli/overview' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/joshsmithxrm/power-platform-developer-suite/issues',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/joshsmithxrm/power-platform-developer-suite/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Source Code',
              href: 'https://github.com/joshsmithxrm/power-platform-developer-suite',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Josh Smith. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'powershell', 'json', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
