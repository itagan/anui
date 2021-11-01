<template>
  <transition name="an-fade" appear>
    <div
      v-if="lazyRender"
      v-show="show"
      :class="['an-overlay', className]"
      :style="style"
      @touchmove="lockScroll ? preventTouchMove : noop"
    >
      <slot></slot>
      <!-- @touchmove.stop.prevent="" -->
    </div>
  </transition>
</template>

<script>
import { reactive } from 'vue'
import { noop, preventDefault, isDef } from '../utils'
import { useLazyRender } from '../composables/use-lazy-render'

export default {
  components: {},
  props: {
    show: Boolean,
    zIndex: [Number, String],
    duration: [Number, String],
    className: String,
    lockScroll: {
      type: Boolean,
      default: true,
    },
    customStyle: Object,
  },
  setup(props, { slots }) {
    const lazyRender = useLazyRender(() => props.show)
    const style = reactive({ zIndex: props.zIndex, ...props.customStyle })
    if (isDef(props.duration)) {
      style.animationDuration = `${props.duration}s`
    }
    const preventTouchMove = (event) => {
      preventDefault(event, true)
    }
    return {
      lazyRender,
      style,
      preventTouchMove,
      noop,
    }
  },
}
</script>
