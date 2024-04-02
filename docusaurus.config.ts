import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VYKIX - Docs',
  tagline: 'Hosting built for performance',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.vykix.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'VYKIX-Hosting', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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

          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/VYKIX-Hosting/docs/tree/main/',
        },

        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'VYKIX - Docs',
      logo: {
        alt: 'VYKIX',
        src: 'img/logo.webp',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/Billing/intro', label: 'Billing', position: 'left'},
        {to: '/Linux/intro', label: 'Linux', position: 'left'},
        {to: '/Windows/intro', label: 'Windows', position: 'left'},
        {to: '/Game-Servers/intro', label: 'Game Servers', position: 'left'},
        
        {
          href: 'https://go.vykix.com/docsnav',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: ' ',
          items: [
            {
              label: 'Github',
              href: 'https://go.vykix.com/github',
            },
            {
              label: 'Discord',
              href: 'https://go.vykix.com/discord',
            },
            {
              label: 'Instagram',
              href: 'https://go.vykix.com/instagram',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VYKIX Hosting`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
