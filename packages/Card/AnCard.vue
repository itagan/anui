<template>
  <div class="an-card">
    <slot v-if="Slots.default"></slot>
    <slot name="top" v-if="!Slots.default"></slot>
    <div class="an-card--bottom" v-if="!Slots.default">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
import { ref, computed, useSlots } from 'vue'
export default {
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
  setup(props, ctx) {
    const Slots = useSlots()
    return {
      Slots,
    }
  },
}
</script>
