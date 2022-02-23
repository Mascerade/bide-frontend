<template>
  <div class="xl:mb-8 flex flex-row justify-center">
    <auth-service-button
      class="mr-8"
      :src="require('../../assets/icons/google.png')"
    ></auth-service-button>
    <auth-service-button
      class="mr-8"
      :src="require('../../assets/icons/facebook.png')"
    ></auth-service-button>
    <auth-service-button
      :src="require('../../assets/icons/twitter.png')"
    ></auth-service-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthServiceButton from '@/components/authentication/AuthServiceButton.vue'

export default defineComponent({
  components: {
    AuthServiceButton
  },
  setup() {
    return
  }
})
</script>
