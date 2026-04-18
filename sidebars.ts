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
        'guides/consumption-patterns',
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
          label: 'Libraries',
          items: ['reference/libraries/overview'],
        },
        {
          type: 'category',
          label: 'MCP',
          items: ['reference/mcp/overview'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'contributing/index',
        'contributing/style-guide',
      ],
    },
  ],
};

export default sidebars;
