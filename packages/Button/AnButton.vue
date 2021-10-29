<template>
  <button
    @click.stop="btnClick"
    @tap.stop="btnClick"
    :class="['an-button', otherClasss]"
    :style="customStyle"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'normal',
    },
    color: {
      type: String,
      default: '',
    },
    circle: {
      type: String,
      default: '',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, ctx) {
    // 样式名设置
    const otherClasss = computed(() => {
      return {
        [`an-button--${props.type}`]: props.type,
        [`an-button--${props.size}`]: props.size,
        [`an-button--plain`]: props.plain,
        [`an-button--square`]: props.square,
        [`an-button--round`]: props.round,
        [`an-button--block`]: props.block,
        [`an-button--disabled`]: props.disabled,
        [`an-button--loading`]: props.loading,
      }
    })
    // 禁用属性
    let disabled = ref(false)
    disabled.value = !!props.disabled
    // 自定义颜色
    const customStyle = computed(() => {
      if (!!props.color === false) return
      if (!!props.plain) {
        return `color:${props.color};border-color:${props.color};`
      }
      if (props.color && props.color.includes('linear-gradient')) {
        return `color:#FFF;background:${props.color};border:0px;`
      }
      return `color:#FFF;background:${props.color};border-color:${props.color};`
    })

    const btnClick = () => {
      ctx.emit('click')
    }
    return {
      disabled,
      otherClasss,
      customStyle,
      btnClick,
    }
  },
}
</script>
