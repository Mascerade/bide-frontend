<template>
  <div class="w-full green-gradient-2 lg:h-20 bg-gray-600 z-10 shadow-xl"></div>
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
