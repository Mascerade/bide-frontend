<template>
  <div class="w-full flex flex-col">
    <navbar />
    <introduction />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../navigation/Navbar.vue'
import Introduction from './Introduction.vue'

export default defineComponent({
  components: {
    Navbar,
    Introduction
  }
})
</script>
