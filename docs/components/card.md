# Card 展示卡片

单元格为列表中的单个展示项。

## 代码演示

多种用法

:::demo

```vue
<template>
  <div class="demo-wrap">
    <h4>基础用法</h4>
    <div class="type-info">只作为布局，插入全部内容</div>
    <an-card>
      <div class="custom-content">柳暗花明又一村</div>
    </an-card>
  </div>
  <div class="demo-wrap">
    <h4>自带底边内容</h4>
    <div class="type-info">底部布局固定</div>
    <an-card>
      <template #top>
        <div class="custom-content">柳暗花明又一村</div>
      </template>
      <template #bottom>
        <div class="custom-content">柳暗花明又一村</div>
      </template>
    </an-card>
  </div>
</template>
<style lang="scss">
.demo-wrap {
  margin-bottom: 20px;
}
.type-info {
  margin-bottom: 14px;
}
.custom-content {
  margin: 30px;
}
</style>
```

:::

## API

### Props

| 参数  | 说明     | 类型           | 可选值 | 默认值 |
| ----- | -------- | -------------- | ------ | ------ |
| title | 左侧标题 | number、string | -      | -      |

### Event

| 事件名 | 说明             | 回调参数     |
| ------ | ---------------- | ------------ |
| click  | 点击单元格时触发 | event: Event |

### Slots

| 名称    | 说明                 |
| ------- | -------------------- |
| default | 自定义全部内容和布局 |
| top     | 自定义顶部内容       |
| bottom  | 自定义底部内容       |
