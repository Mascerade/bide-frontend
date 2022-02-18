<template>
  <div class="flex flex-row items-center lg:h-16 lg:pl-14 lg:pr-14 shadow-md">
    <h1 class="text-gray-700 font-medium lg:text-5xl lg:pr-20">Bide</h1>
    <div class="flex flex-grow flex-row">
      <a class="text-gray-600 lg:text-2xl lg:pr-14">Philosophy</a>
      <a class="text-gray-600 lg:text-2xl">Features</a>
    </div>
    <div>
      <button
        class="bg-gray-700 hover:bg-gray-500 text-white rounded-lg lg:pr-6 lg:pl-6 lg:pt-2 lg:pb-2 lg:mr-4"
      >
        Sign Up
      </button>
      <button
        class="bg-gray-700 hover:bg-gray-500 text-white rounded-lg lg:pr-6 lg:pl-6 lg:pt-2 lg:pb-2"
      >
        Sign In
      </button>
    </div>
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
