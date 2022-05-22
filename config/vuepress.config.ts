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
                "/documentation/yarn-workflow/creating-a-project.md",
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
