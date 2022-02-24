<template>
  <div class="w-full h-full lg:flex-col">
    <div class="w-full xl:h-32 bg-green-400"></div>
    <div class="w-full flex">
      <div class="h-full xl:w-48 flex flex-col border-2">
        <profile-image
          class="relative xl:bottom-14 self-center"
        ></profile-image>
        <div class="relative xl:bottom-14 xl:pt-2">
          <p>@Username</p>
          <p>First Name</p>
          <p>Last Name</p>
          <p>Description</p>
        </div>
        <div class="flex-grow"></div>
        <div class="border-2">sasdf</div>
      </div>

      <div class="flex-grow"></div>

      <div class="xl:w-36"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileImage from '@/components/user/ProfileImage.vue'

export default defineComponent({
  components: {
    ProfileImage
  }
})
</script>
