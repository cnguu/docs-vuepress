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
      title: 'Docs',
      description: 'Document Center'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '文档',
      description: '文档中心'
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
  ],
};
