# Button 按钮

常用的操作按钮。

## 代码演示

按钮用法

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```vue
<template>
  <div class="demo-wrap">
    <h4>按钮类型</h4>
    <div>
      按钮支持 default、primary、info、warning、danger、waiting 六种类型，默认为
      default。
    </div>
    <an-button>默认按钮</an-button>
    <an-button type="primary">环保按钮</an-button>
    <an-button type="info">小蓝按钮</an-button>
    <an-button type="waiting">等待更新的按钮</an-button>
    <an-button type="danger">危险按钮</an-button>
    <an-button type="warning">警告按钮</an-button>
  </div>
  <div class="demo-wrap">
    <h4>朴素按钮</h4>
    <div>
      通过 plain
      属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。
    </div>
    <an-button plain type="primary">环保按钮</an-button>
    <an-button plain type="info">小蓝按钮</an-button>
    <an-button type="waiting">等待更新的按钮</an-button>
  </div>
  <div class="demo-wrap">
    <h4>按钮尺寸</h4>
    <div>
      通过 size
      属性将按钮设置为对应大小，large是100%；normal，small，mini可靠内容撑开。
    </div>
    <an-button plain type="primary" size="large">大号按钮</an-button>
    <an-button plain type="info" size="normal">普通按钮</an-button>
    <an-button type="waiting" size="small">小型按钮</an-button>
    <an-button type="primary" size="mini">迷你按钮</an-button>
  </div>
  <div class="demo-wrap">
    <h4>块级按钮</h4>
    <div>通过 block 属性将按钮设置为块级元素，宽度100%，作为一栏显示。</div>
    <an-button block size="normal">普通按钮</an-button>
    <an-button plain block type="info">小蓝按钮</an-button>
  </div>
  <div class="demo-wrap">
    <h4>按钮形状</h4>
    <div>通过 square 设置方形按钮，通过 round 设置圆形按钮。</div>
    <an-button square type="primary">方形按钮</an-button>
    <an-button round type="info">圆形按钮</an-button>
  </div>
  <div class="demo-wrap">
    <h4>按钮禁用状态</h4>
    <div>通过 disabled 属性来禁用按钮，禁用状态下按钮不可点击。</div>
    <an-button disabled type="primary">禁用状态</an-button>
    <an-button disabled type="info">禁用状态</an-button>
  </div>
  <div class="demo-wrap">
    <h4>自定义颜色</h4>
    <div>通过 color 属性可以自定义按钮的颜色。</div>
    <an-button color="#7232dd">单色按钮</an-button>
    <an-button color="#7232dd" plain>单色按钮</an-button>
    <an-button color="linear-gradient(to right, #ff6034, #ee0a24)">
      渐变色按钮
    </an-button>
  </div>
</template>
<style lang="scss">
.demo-wrap {
  margin-bottom: 20px;
}
.an-button {
  margin: 10px;
}
</style>
```

:::

## API

### Props

| 参数     | 说明           | 类型    | 可选值                                      | 默认值  |
| -------- | -------------- | ------- | ------------------------------------------- | ------- |
| type     | 类型           | string  | primary / success / warning / info / danger | default |
| size     | 尺寸           | string  | large / small / mini                        | normal  |
| block    | 是否为块级元素 | boolean | ——                                          | false   |
| plain    | 是否为朴素按钮 | boolean | ——                                          | false   |
| square   | 是否为方形按钮 | boolean | ——                                          | false   |
| round    | 是否为圆形按钮 | boolean | ——                                          | false   |
| disabled | 是否禁用按钮   | boolean | ——                                          | false   |
| round    | 是否为圆形按钮 | boolean | ——                                          | false   |
| loading  | 加载中         | boolean | ——                                          | false   |

### Event

| 事件名 | 说明                                     | 回调参数     |
| ------ | ---------------------------------------- | ------------ |
| click  | 点击按钮，且按钮状态不为加载或禁用时触发 | event: Event |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 按钮内容 |
