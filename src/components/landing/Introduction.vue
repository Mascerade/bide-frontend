<template>
  <div class="w-full flex flex-col lg:flex-row lg:pl-24 lg:mb-24 lg:mt-20">
    <div class="flex items-center w-full lg:w-1/2 lg:pr-5">
      <div>
        <h1 class="text-text-secondary-500 font-medium lg:text-6xl">
          Facilitating Productive Online Interactions
        </h1>
        <h2
          class="text-text-primary-600 lg:text-3xl lg:leading-10 lg:mt-4 lg:pt-4 lg:pr-36"
        >
          A social platform designed to make it easier for people to engage
          respectfully <span class="text-green-500">and</span> with a sense of
          purpose.
        </h2>
        <button
          class="bg-bg-secondary-400 hover:bg-bg-secondary-300 text-text-primary-cp rounded-lg lg:text-2xl lg:pr-8 lg:pl-8 lg:pt-3 lg:pb-3 lg:mt-10"
        >
          Get Started
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full lg:w-1/2">
      <box-card>Create or Find Online Communities</box-card>
      <img
        class="lg:h-24 lg:w-24 lg:mt-3 lg:mb-3"
        src="../../assets/icons/down-arrow-green-teal.png"
        alt="Down Arrow"
      />
      <box-card>Get Feedback</box-card>
      <img
        class="lg:h-24 lg:w-24 lg:mt-3 lg:mb-3"
        src="../../assets/icons/down-arrow-green-teal.png"
        alt="Down Arrow"
      />
      <box-card>Grow as a Group</box-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BoxCard from './BoxCard.vue'

export default defineComponent({
  components: {
    BoxCard
  }
})
</script>
