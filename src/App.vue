<template>
  <landing />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Landing from './components/landing/Landing.vue'
import 'typeface-quicksand'

export default defineComponent({
  name: 'App',
  components: {
    Landing
  }
})
</script>

<style></style>
