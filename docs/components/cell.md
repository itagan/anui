# Cell 单元格

单元格为列表中的单个展示项。

## 代码演示

按钮用法

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```vue
<template>
  <div class="demo-wrap">
    <h4>基础用法</h4>
    <div>Cell 可以单独使用</div>
    <an-cell title="单元格" value="内容" />
    <an-cell title="单元格" value="内容" label="描述信息" />
    <an-cell title="单元格" value="内容，底部可设置无边框" border="false" />
  </div>
  <div class="demo-wrap">
    <h4>只设置 value</h4>
    <div>只设置 value 时，内容会靠左对齐。</div>
    <an-cell value="内容" />
  </div>
  <div class="demo-wrap">
    <h4>展示箭头</h4>
    <div>
      设置 is-link 属性后会在单元格右侧显示箭头，并且可以通过 arrow-direction
      属性控制箭头方向。
    </div>
    <an-cell title="单元格" value="内容" is-link />
  </div>
  <div class="demo-wrap">
    <h4>使用插槽</h4>
    <div>如以上用法不能满足你的需求，可以使用插槽来自定义内容。</div>
    <an-cell value="内容">
      <template #title>
        <span class="custom-title">单元格标题自定义</span>
      </template>
    </an-cell>
    <an-cell>
      <template #title>
        <span class="custom-title">单元格标题自定义</span>
      </template>
      <template #>
        <span class="custom-title">单元格内容自定义</span>
      </template>
    </an-cell>
    <an-cell>
      <template #>
        <span class="custom-title">单元格内容自定义</span>
      </template>
    </an-cell>
  </div>
  <div class="demo-wrap">
    <h4>垂直居中</h4>
    <div>通过 center 属性可以让 Cell 的左右内容都垂直居中。</div>
    <an-cell center title="单元格" value="内容" label="描述信息" />
  </div>
</template>
<style lang="scss">
.demo-wrap {
  margin-bottom: 20px;
}
</style>
```

:::

## API

### Props

| 参数    | 说明                           | 类型           | 可选值 | 默认值 |
| ------- | ------------------------------ | -------------- | ------ | ------ |
| title   | 左侧标题                       | number、string | -      | -      |
| value   | 右侧内容                       | number、string | -      | -      |
| size    | 单元格大小                     | string         | large  | -      |
| border  | 是否显示内边框                 | boolean        | -      | true   |
| is-link | 是否展示右侧箭头并开启点击反馈 | boolean        | -      | false  |

### Event

| 事件名 | 说明             | 回调参数     |
| ------ | ---------------- | ------------ |
| click  | 点击单元格时触发 | event: Event |

### Slots

| 名称       | 说明                         |
| ---------- | ---------------------------- |
| default    | 自定义右侧 value 的内容      |
| title      | 自定义左侧 title 的内容      |
| right-icon | 自定义右侧按钮，默认为 arrow |
