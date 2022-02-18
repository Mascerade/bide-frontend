<template>
  <div class="w-full flex flex-col">
    <navbar />
    <introduction />
    <banner />
    <group-info />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../navigation/Navbar.vue'
import Introduction from './Introduction.vue'
import Banner from './Banner.vue'
import GroupInfo from './GroupInfo.vue'

export default defineComponent({
  components: {
    Navbar,
    Introduction,
    Banner,
    GroupInfo
  }
})
</script>
