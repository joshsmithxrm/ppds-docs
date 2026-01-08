import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/installation'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/authentication',
        'guides/data-migration',
        'guides/plugin-deployment',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'category',
          label: 'CLI',
          items: ['reference/cli/overview'],
        },
        {
          type: 'category',
          label: 'SDK',
          items: ['reference/sdk/overview'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: ['concepts/architecture'],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: ['contributing/index'],
    },
  ],
};

export default sidebars;
