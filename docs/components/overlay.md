# Overlay 遮罩层

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

## 代码演示

多种用法

:::demo

```vue
<template>
  <div class="demo-wrap">
    <h4>基础用法</h4>
    <an-button type="primary" plain @click="show = true">显示遮罩层</an-button>
    <an-overlay :show="show" @click="close" />
  </div>
  <div class="demo-wrap">
    <h4>嵌入内容</h4>
    <div class="type-info">通过默认插槽可以在遮罩层上嵌入任意内容。</div>
    <an-button type="primary" plain @click="show1 = true">嵌入内容</an-button>
    <an-overlay :show="show1" :customStyle="{ color: 'red', zIndex: 100 }">
      <div class="wrapper" @click.stop>
        <div class="block" @click="close">柳暗花明又一村</div>
      </div>
    </an-overlay>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      show1: false,
    }
  },
  methods: {
    close() {
      this.show = false
      this.show1 = false
    },
  },
}
</script>
<style lang="scss">
.demo-wrap {
  margin-bottom: 20px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
```

:::

## API

### Props

| 参数        | 说明                                             | 类型           | 可选值 | 默认值 |
| ----------- | ------------------------------------------------ | -------------- | ------ | ------ |
| show        | 是否展示遮罩层                                   | boolean        | -      | false  |
| z-index     | z-index 层级                                     | number、string | -      | 1      |
| duration    | 动画时长，单位秒                                 | number、string | -      | 0.3    |
| class-name  | 自定义类名                                       | string         | -      | -      |
| class-name  | 自定义类名                                       | string         | -      | -      |
| lock-scroll | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | boolean        | -      | true   |

### Event

| 事件名 | 说明       | 回调参数     |
| ------ | ---------- | ------------ |
| click  | 点击时触发 | event: Event |

### Slots

| 名称    | 说明                               |
| ------- | ---------------------------------- |
| default | 默认插槽，用于在遮罩层上方嵌入内容 |
