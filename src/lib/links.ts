export type Item = {
  name: string;
  slug: string;
  icon: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Links Internos',
    items: [
      {
        name: 'Cockpit',
        slug: 'https://cockpit.suarez-ramirez.com',
        icon: 'view_quilt',
        description:
          'El dash de control y manejo del servidor en la web',
      },
      {
        name: 'Portainer',
        slug: 'https://portainer.suarez-ramirez.com',
        icon: 'view_cozy',
        description:
          'el controlador y visor de docks de docker',
      },
      {
        name: 'AdGuardHome',
        slug: 'https://dns.suarez-ramirez.com',
        icon: 'view_quilt',
        description: '',
      },
      {
        name: 'Homeass',
        slug: 'https://casa.suarez-ramirez.com',
        icon: 'home',
        description: 'homeass de salitre ',
      },
    ],
  },
  {
    name: 'Links Externos',
    items: [
      {
        name: 'Zero Trust',
        slug: 'https://dash.teams.cloudflare.com',
        icon: 'cached',
        description: 'el dashboard de zero trust',
      },
      {
        name: 'Cloudflare',
        slug: 'https://dash.cloudflare.com',
        icon: 'warning',
        description: '',
      },
      {
        name: 'Dash Spotify',
        slug: 'not-found',
        icon: 'search_off',
        description:
          'Create Not Found UI for specific parts of an app',
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
        description:
          'Streaming data fetching from the server with React Suspense',
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
        description:
          'Get the best of both worlds between static & dynamic',
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
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
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
        description:
          'Preview the supported styling solutions',
      },
      {
        name: 'Code Snippets',
        slug: 'snippets',
        icon: 'code',
        description:
          'A collection of useful App Router code snippets',
      },
    ],
  },
];
