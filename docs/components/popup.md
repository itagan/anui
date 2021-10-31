# Popup 弹出层

自定义弹出方式

## 代码演示

多种用法

:::demo

```vue
<template>
  <div class="demo-wrap">
    <h4>基础用法</h4>
    <div class="type-info">弹出层，默认内容中间插入</div>
    <an-button plain type="info" @click="open">弹出内容</an-button>
    <an-popup :show="show" @close="show = false">
      <div class="custom-content">柳暗花明又一村</div>
    </an-popup>
  </div>
  <div class="demo-wrap">
    <h4>顶部弹出</h4>
    <div class="type-info">插入内容</div>
    <an-button plain type="info" @click="showTop = true">弹出内容</an-button>
    <an-popup :show="showTop" @close="showTop = false" position="top">
      <div class="custom-content content-bottom">柳暗花明又一村</div>
    </an-popup>
  </div>
  <div class="demo-wrap">
    <h4>底部弹出</h4>
    <div class="type-info">插入内容</div>
    <an-button plain type="info" @click="showBottom = true">弹出内容</an-button>
    <an-popup :show="showBottom" @close="showBottom = false" position="bottom">
      <div class="custom-content content-bottom">柳暗花明又一村</div>
    </an-popup>
  </div>
  <div class="demo-wrap">
    <h4>左边弹出</h4>
    <div class="type-info">插入内容</div>
    <an-button plain type="info" @click="showLeft = true">弹出内容</an-button>
    <an-popup :show="showLeft" @close="showLeft = false" position="left">
      <div class="custom-content content-bottom">柳暗花明又一村</div>
    </an-popup>
  </div>
  <div class="demo-wrap">
    <h4>右边弹出</h4>
    <div class="type-info">插入内容</div>
    <an-button plain type="info" @click="showRight = true">弹出内容</an-button>
    <an-popup :show="showRight" @close="showRight = false" position="right">
      <div class="custom-content content-bottom">柳暗花明又一村</div>
    </an-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
    }
  },
  methods: {
    open() {
      this.show = true
    },
  },
}
</script>
<style lang="scss">
.demo-wrap {
  margin-bottom: 20px;
}
.type-info {
  margin-bottom: 14px;
}
.custom-content {
  background: #fff;
  height: 100px;
  width: 400px;
  margin: 30px;
}
.content-bottom {
  margin: 0;
  width: 100%;
  height: 350px;
}
</style>
```

:::

## API

### Props

| 参数     | 说明     | 类型    | 可选值                   | 默认值 |
| -------- | -------- | ------- | ------------------------ | ------ |
| show     | 是否弹出 | Boolean | -                        | false  |
| position | 弹出位置 | String  | top、bottom、left、right | center |

### Event

| 事件名 | 说明             | 回调参数     |
| ------ | ---------------- | ------------ |
| click  | 点击单元格时触发 | event: Event |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 插入弹出内容 |
