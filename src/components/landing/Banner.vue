<template>
  <div
    class="w-full flex items-center justify-center green-gradient-1 lg:h-20 bg-gray-600 z-10 shadow-lg"
  >
    <h1 class="lg:text-5xl text-text-primary-cp">
      So What Makes Bide Different?
    </h1>
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

<style scoped>
.green-gradient-1 {
  background-color: #08e1ae;
  background-image: linear-gradient(315deg, #08e1ae 0%, #98de5b 74%);
}

.green-gradient-2 {
  background: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
}
</style>
