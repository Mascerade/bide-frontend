<template>
  <div
    class="flex items-center justify-center lg:w-3/4 lg:h-16 bg-green-400 rounded-lg"
  >
    <h2 class="lg:text-3xl text-white"><slot></slot></h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return
  }
})
</script>
