const path = require('path')
const navbar = require('./configs/navbar')
const sidebar = require('./configs/sidebar')
const alias = require('../../alias')

module.exports = {
  title: 'AnUi', // 顶部左侧标题
  description: 'A Mobile UI Components built on Vue3',
  base: '/an-ui/',
  bundler: '@vuepress/vite',
  alias,
  head: [
    // 设置 描述 和 关键词
    ['meta', { name: 'keywords', content: 'Vue3 Mobile UI 组件库' }],
    [
      'meta',
      {
        name: 'description',
        content: 'A Mobile UI Components built on Vue3',
      },
    ],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],
  themeConfig: {
    sidebar,
    navbar,
    // page meta
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false, level: [1, 2] },

    // options for markdown-it-toc
    toc: { level: [1, 2] },

    extractHeaders: { level: ['h2', 'h3', 'h4'] },
  },
  plugins: [
    'vuepress-plugin-demoblock-plus',
    {
      cssPreprocessor: 'scss',
      scriptImports: [
        {
          searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: 'const { defineComponent: _defineComponent } = Vue',
        },
      ],
    },
  ],
}
