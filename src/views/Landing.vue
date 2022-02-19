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
import Navbar from '../components/navigation/Navbar.vue'
import Introduction from '../components/landing/Introduction.vue'
import Banner from '../components/landing/Banner.vue'
import GroupInfo from '../components/landing/GroupInfo.vue'

export default defineComponent({
  components: {
    Navbar,
    Introduction,
    Banner,
    GroupInfo
  }
})
</script>
