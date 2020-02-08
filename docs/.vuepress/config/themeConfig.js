module.exports = {
  logo: '/logo48.png',
  smoothScroll: true,
  locales: {
    '/': {
      selectText: 'Languages',
      nav: [
        {
          text: 'Theme',
          label: 'English',
          items: [
            {
              text: 'vuepress-theme-yur',
              link: '/theme/vuepress-theme-yur'
            },
          ]
        }
      ]
    },
    '/zh/': {
      selectText: '多语言',
      nav: [
        {
          text: '主题',
          label: '简体中文',
          items: [
            {
              text: 'vuepress-theme-yur',
              link: '/zh/theme/vuepress-theme-yur'
            },
          ]
        }
      ]
    },
  },
};
