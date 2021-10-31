module.exports = {
  '/api/': getAPISidebar(),
  '/components/': getComponentsSidebar(),
  '/guide/': getGuideSidebar(),
}

function getComponentsSidebar() {
  return [
    {
      isGroup: true,
      text: '基础组件',
      children: [
        { text: 'Button按钮', link: '/components/button' },
        { text: 'Cell单元格', link: '/components/cell' },
      ],
    },
    {
      isGroup: true,
      text: '业务组件',
      children: [{ text: 'Card展示卡片', link: '/components/card' }],
    },
  ]
}

function getGuideSidebar() {
  return [
    {
      isGroup: true,
      text: '介绍',
      children: [
        { text: '安装', link: '/guide/install' },
        { text: '快速上手', link: '/guide/start' },
      ],
    },
  ]
}

function getAPISidebar() {
  return [{ text: 'API参考', link: '/api/index.md' }]
}
