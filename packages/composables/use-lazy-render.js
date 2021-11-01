import { ref, watch } from 'vue'
export function useLazyRender(show) {
  const inited = ref(false)
  watch(
    show,
    (value) => {
      if (value) {
        inited.value = value
      }
    },
    { immediate: true }
  )
  return inited
}
