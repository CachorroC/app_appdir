export type Item = {
  name: string;
  slug: string;
  icon: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Layouts',
    items: [
      {
        name: 'Nested Layouts',
        slug: 'layouts',
        icon: 'view_quilt',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'Grouped Layouts',
        slug: 'route-groups',
        icon: 'view_cozy',
        description: 'Organize routes without affecting URL paths',
      },
    ],
  },
  {
    name: 'File Conventions',
    items: [
      {
        name: 'Loading',
        slug: 'loading',
        icon: 'cached',
        description: 'Create meaningful Loading UI for specific parts of an app',
      },
      {
        name: 'Error',
        slug: 'error-handling',
        icon: 'warning',
        description: 'Create Error UI for specific parts of an app',
      },
      {
        name: 'Not Found',
        slug: 'not-found',
        icon: 'search_off',
        description: 'Create Not Found UI for specific parts of an app',
      },
    ],
  },
  {
    name: 'Data Fetching',
    items: [
      {
        name: 'Streaming with Suspense',
        slug: 'streaming',
        icon: 'cast_connected',
        description: 'Streaming data fetching from the server with React Suspense',
      },
      {
        name: 'Static-Site Generation',
        slug: 'ssg',
        icon: 'flex_direction',
        description: 'Generate static pages',
      },
      {
        name: 'Server-Side Rendering',
        slug: 'ssr',
        icon: 'align_justify_flex_start',
        description: 'Server-render pages',
      },
      {
        name: 'Incremental Static Regeneration',
        slug: 'isr',
        icon: 'empty_dashboard',
        description: 'Get the best of both worlds between static & dynamic',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      // TODO: Re-add this page once hooks have been updated.
      // {
      //   name: 'Hooks',
      //   slug: 'hooks',
      //   description:
      //     'Preview the hooks available for Client and Server Components',
      // },
      {
        name: 'Client Context',
        slug: 'context',
        icon: 'autorenew',
        description: 'Pass context between Client Components that cross Server/Client Component boundary',
      },
    ],
  },
  {
    name: 'Misc',
    items: [
      {
        name: 'CSS and CSS-in-JS',
        slug: 'styling',
        icon: 'css',
        description: 'Preview the supported styling solutions',
      },
      {
        name: 'Code Snippets',
        slug: 'snippets',
        icon: 'code',
        description: 'A collection of useful App Router code snippets',
      },
    ],
  },
];
