<template>
  <div class="flex flex-row items-center lg:h-16 lg:pl-14 lg:pr-14 shadow-md">
    <h1 class="text-gray-700 font-medium lg:text-5xl lg:pr-20">Bide</h1>
    <div class="flex flex-grow flex-row">
      <a class="text-text-primary-600 lg:text-2xl lg:pr-14">Philosophy</a>
      <a class="text-text-primary-600 lg:text-2xl">Features</a>
    </div>
    <div>
      <router-link
        :to="{ path: '/signup' }"
        class="bg-bg-secondary-600 hover:bg-bg-secondary-500 text-text-primary-cp font-semibold rounded-lg lg:pr-6 lg:pl-6 lg:pt-2 lg:pb-2 lg:mr-4"
      >
        Sign Up
      </router-link>
      <a
        class="bg-bg-secondary-600 hover:bg-bg-secondary-500 text-text-primary-cp font-semibold rounded-lg lg:pr-6 lg:pl-6 lg:pt-2 lg:pb-2"
      >
        Sign In
      </a>
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
