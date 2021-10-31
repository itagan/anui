<template>
  <div class="an-popup-wrap" @click.stop="closePopup()">
    <div class="an-mask" :class="show ? 'mask-show' : ''"></div>
    <div
      class="popup-center"
      :class="show ? 'mask-show' : ''"
      v-if="position == 'center'"
      :key="'center'"
    >
      <slot> </slot>
    </div>

    <div
      class="popup-top"
      :class="show ? 'pop-round' : ''"
      v-if="position == 'top'"
      :key="'top'"
    >
      <slot> </slot>
    </div>

    <div
      class="popup-bottom"
      :class="show ? 'pop-round' : ''"
      v-if="position == 'bottom'"
      :key="'bottom'"
    >
      <slot> </slot>
    </div>

    <div
      class="popup-left"
      :class="show ? 'pop-horizontal' : ''"
      v-if="position == 'left'"
      :key="'left'"
    >
      <slot> </slot>
    </div>

    <div
      class="popup-right"
      :class="show ? 'pop-horizontal' : ''"
      v-if="position == 'right'"
      :key="'right'"
    >
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'anPopup',
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'center',
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const closePopup = () => {
      emit('close')
    }
    return {
      closePopup,
    }
  },
}
</script>
<style lang="scss" scoped>
.an-popup-wrap {
  .an-mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.35s ease;
    z-index: 9999;
  }
  // 遮罩层
  .mask-show {
    opacity: 1 !important;
    visibility: visible !important;
    transition: all 0.35s ease !important;
  }
  // center
  .popup-center {
    width: 100%;
    height: 100%;
    // position: absolute;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 12000;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    // transform: scale(1);
    visibility: hidden;
    transition: all 0.35s ease;
  }
  // top
  .popup-top {
    width: 100%;
    height: 500px;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    transition: all 0.35s ease;
    transform: translateY(-100%);
    opacity: 0;
  }
  // bottom
  .popup-bottom {
    width: 100%;
    min-height: 100px;
    background-color: transparent;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    transition: all 0.35s ease;
    transform: translateY(100%);
    opacity: 0;
  }
  .pop-round {
    transition: all 0.35s ease;
    transform: translateY(0);
    opacity: 1;
  }
  // left
  .popup-left {
    width: 300px;
    height: 100%;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 10000;
    transition: all 0.35s ease;
    transform: translateX(-100%);
    opacity: 0;
  }
  // right
  .popup-right {
    width: 300px;
    height: 100%;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10000;
    transition: all 0.35s ease;
    transform: translateX(100%);
    opacity: 0;
  }
  .pop-horizontal {
    transition: all 0.35s ease;
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
