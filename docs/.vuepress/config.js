const head = require('./config/head');
const themeConfig = require('./config/themeConfig');
const plugins = require('./config/plugins');
const markdown = require('./config/markdown');

module.exports = {
  base: '/',
  head,
  evergreen: true,
  locales: {
    '/': {
      lang: 'en',
      title: 'ImWiki',
      description: 'cnguu\'s docs'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'ImWiki',
      description: 'cnguu 的文档集'
    }
  },
  themeConfig,
  plugins,
  markdown,
  host: 'localhost',
  port: 2234,
  dest: 'public',
  extraWatchFiles: [
    '/docs/.vuepress/config.js',
    '/docs/.vuepress/config/head.js',
    '/docs/.vuepress/config/markdown.js',
    '/docs/.vuepress/config/plugins.js',
    '/docs/.vuepress/config/themeConfig.js',
  ],
};
