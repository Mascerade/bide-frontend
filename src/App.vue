<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'typeface-quicksand'

export default defineComponent({
  name: 'App'
})
</script>

<style>
.fullscreen {
  height: 100vh;
  width: 100vw;
}

.green-gradient-1 {
  background-color: #08e1ae;
  background-image: linear-gradient(315deg, #08e1ae 0%, #98de5b 74%);
}

.green-gradient-2 {
  background: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
}
</style>
