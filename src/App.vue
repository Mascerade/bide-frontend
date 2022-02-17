<template>
  <introduction />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Introduction from './components/landing/introduction.vue'
import 'typeface-poppins'

export default defineComponent({
  name: 'App',
  components: {
    Introduction
  }
})
</script>

<style></style>
