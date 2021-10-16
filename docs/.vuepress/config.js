const { description } = require('../../package')
// https://v1.vuepress.vuejs.org/config/
module.exports = {
  title: 'More SASS',
  description: 'Библиотека SASS-миксинов и функций',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    // repo: 'https://github.com/MorevM/more-sass/',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    sidebarDepth: 2,
    nav: [
      // {
      //   text: 'Guide',
      //   link: '/guide/',
      // },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
    ],
    sidebar: [
      {
        title: 'Основы',
        sidebarDepth: 2,
        collapsable: false,
        children: [
          ['essentials/installation', 'Установка'],
        ]
      },
      {
        title: 'Содержание',
        sidebarDepth: 2,
        collapsable: false,
        children: [
          ['content/mixins', 'Миксины'],
        ]
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'v-press-plus',
    'vue-demo',
  ]
}
