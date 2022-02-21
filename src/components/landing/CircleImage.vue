<template>
  <div
    class="lg:w-80 lg:h-80 flex items-center justify-center rounded-full border-8 border-bg-primary-cp-100 shadow-xl"
  >
    <img class="lg:w-56 lg:h-56" :src="src" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true
    }
  }
})
</script>
