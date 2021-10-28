<template>
  <button
    @click.stop="btnClick"
    @tap.stop="btnClick"
    :class="['an-button', otherClasss]"
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
    let disabled = ref(false)
    disabled.value = !!props.disabled
    const btnClick = () => {
      ctx.emit('click')
    }
    return {
      disabled,
      otherClasss,
      btnClick,
    }
  },
}
</script>
