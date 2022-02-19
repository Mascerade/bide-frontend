<template>
  <button
    class="bg-bg-secondary-400 hover:bg-bg-secondary-300 text-text-primary-cp rounded-lg lg:text-2xl lg:pr-8 lg:pl-8 lg:pt-3 lg:pb-3"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return
  }
})
</script>
