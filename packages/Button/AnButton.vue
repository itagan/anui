<template>
  <button
    @click.stop="btnClick"
    @tap.stop="btnClick"
    class="an-ui-button-wrapper"
    :class="[size === 'large' ? 'an-ui-button-large' : 'an-ui-button-normal']"
    :style="{
      'background-color': bgColor ? bgColor : '',
      color: fontColor ? fontColor : '',
      'border-color': bgColor ? borderColor || bgColor : ''
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "normal"
    },
    bgColor: {
      type: String,
      default: ""
    },
    fontColor: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(props, ctx) {
    const btnClick = () => {
      ctx.emit("click");
    };
    return {
      btnClick
    };
  }
};
</script>
