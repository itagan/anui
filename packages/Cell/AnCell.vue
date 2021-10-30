<template>
  <div class="an-cell" :class="otherClasss">
    <div class="an-cell__title" v-if="anCellLeft || title">
      <span v-if="title">{{ title }}</span>
      <slot name="title" v-if="anCellLeft"></slot>
      <div class="van-cell__label" v-if="label">{{ label }}</div>
    </div>
    <div
      class="an-cell__value"
      :class="[!anCellLeft && !title ? 'an-cell__value--alone' : '']"
    >
      <span>{{ value }}</span>
      <slot></slot>
    </div>
    <div v-if="$attrs['is-link'] !== undefined" class="an-arrow"></div>
  </div>
</template>

<script>
import { computed, useSlots } from 'vue'
export default {
  components: {},
  props: {
    title: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: [String, Number],
      default: '',
    },
    border: {
      type: Boolean,
      default: true,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const otherClasss = computed(() => {
      return {
        [`an-cell--noborder`]: !props.border || props.border === 'false',
        [`an-cell--center`]: props.center,
      }
    })
    const anCellLeft = !!useSlots().title
    return {
      otherClasss,
      anCellLeft,
    }
  },
}
</script>
