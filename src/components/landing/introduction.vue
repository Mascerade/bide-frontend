<template>
  <div class="w-full flex flex-col lg:flex-row">
    <div class="w-full lg:w-1/2 text-center">
      <h1>Bide</h1>
      <h2>It's Only a Matter of Time</h2>
    </div>
    <div class="w-full lg:w-1/2">
      <h2>Join Bide!</h2>
      <div class="flex flex-row">
        <h3>ID:</h3>
        <input type="text" />
      </div>
      <button>Sign Up</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    console.log('here')
  }
})
</script>
