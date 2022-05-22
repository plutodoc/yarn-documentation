import { pwaPlugin } from '@vuepress/plugin-pwa';
import { searchPlugin } from '@vuepress/plugin-search';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.webmanifest',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/safari-pinned-tab.svg',
        color: '#ffffff',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#ffffff',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Yarn',
      description: 'Fast, reliable, and secure dependency management',
    },
  },
  theme: defaultTheme({
    docsDir: 'docs',
    logo: '/images/logo.png',
    repo: 'https://github.com/yarnpkg/yarn',
    editLink: false,
    locales: {
      '/': {
        contributors: false,
        repoLabel: 'Source Code',
        navbar: [
          {
            text: 'Documentation',
            link: '/documentation/getting-started/getting-started.md',
          },
        ],
        sidebar: {
          '/documentation/': [
            {
              text: '1 Getting Started',
              collapsible: true,
              children: [
                '/documentation/getting-started/getting-started.md',
                '/documentation/getting-started/install.md',
                '/documentation/getting-started/usage.md',
              ],
            },
            {
              text: '2 The Yarn Workflow',
              collapsible: true,
              children: [
                '/documentation/yarn-workflow/yarn-workflow.md',
                '/documentation/yarn-workflow/creating-a-project.md',
                '/documentation/yarn-workflow/managing-dependencies.md',
                '/documentation/yarn-workflow/installing-dependencies.md',
                '/documentation/yarn-workflow/version-control.md',
                '/documentation/yarn-workflow/install-ci.md',
              ],
            },
            {
              text: '3 CLI Introduction',
              collapsible: true,
              children: [
                '/documentation/cli/cli.md',
                '/documentation/cli/add.md',
                '/documentation/cli/audit.md',
                '/documentation/cli/autoclean.md',
                '/documentation/cli/bin.md',
                '/documentation/cli/cache.md',
                '/documentation/cli/check.md',
                '/documentation/cli/config.md',
                '/documentation/cli/create.md',
                '/documentation/cli/generate-lock-entry.md',
                '/documentation/cli/global.md',
                '/documentation/cli/help.md',
                '/documentation/cli/import.md',
                '/documentation/cli/info.md',
                '/documentation/cli/init.md',
                '/documentation/cli/install.md',
                '/documentation/cli/licenses.md',
              ],
            },
          ],
        },
      },
    },
  }),
  markdown: {},
  plugins: [
    pwaPlugin({}),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
      },
      isSearchable: (page) => page.path !== '/',
    }),
  ],
});
