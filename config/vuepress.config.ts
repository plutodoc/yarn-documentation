import { searchPlugin } from '@vuepress/plugin-search';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
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
              ],
            },
          ],
        },
      },
    },
  }),
  markdown: {},
  plugins: [
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
