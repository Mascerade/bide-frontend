<template>
  <div class="w-full flex flex-col">
    <navbar />
    <div class="">
      <div class="w-full flex flex-col lg:flex-row lg:mb-24 lg:mt-20">
        <div class="flex items-center w-full lg:w-1/2 lg:pl-32">
          <div>
            <h1 class="text-text-secondary-500 font-medium lg:text-6xl">
              Facilitating Productive Online Interactions
            </h1>
            <h2
              class="text-text-primary-600 lg:text-3xl lg:leading-10 lg:mt-4 lg:pt-4 lg:pr-36"
            >
              A social platform designed to make it easier for people to engage
              respectfully <span class="text-green-500">and</span> with a sense
              of purpose.
            </h2>
            <button
              class="bg-bg-secondary-400 hover:bg-bg-secondary-300 text-text-primary-cp rounded-lg lg:text-2xl lg:pr-8 lg:pl-8 lg:pt-3 lg:pb-3 lg:mt-10"
            >
              Get Started
            </button>
          </div>
        </div>

        <div class="flex flex-col items-center w-full lg:w-1/2 lg:pr-8">
          <box-card>Create or Find Online Communities</box-card>
          <img
            class="lg:h-24 lg:w-24 lg:mt-3 lg:mb-3"
            src="../assets/icons/down-arrow-green-teal.png"
            alt="Down Arrow"
          />
          <box-card>Get Feedback</box-card>
          <img
            class="lg:h-24 lg:w-24 lg:mt-3 lg:mb-3"
            src="../assets/icons/down-arrow-green-teal.png"
            alt="Down Arrow"
          />
          <box-card>Grow as a Group</box-card>
        </div>
      </div>
    </div>

    <banner class="" />

    <div class="bg-bg-primary-cp-50 lg:pt-24">
      <div
        class="w-full flex flex-col justify-center lg:flex-row lg:pl-32 lg:pr-32 lg:mb-24"
      >
        <div class="lg:w-1/3 lg:pl-12 lg:pr-12 flex flex-col items-center">
          <circle-image
            :src="require('../assets/growing-plant.png')"
          ></circle-image>
          <h1
            class="text-text-secondary-500 font-medium lg:text-4xl lg:mt-10 text-center"
          >
            Groups for Your Specific Interest
          </h1>
          <h2 class="text-text-primary-600 lg:text-2xl lg:mt-6 text-center">
            Bide was created for people to find
            <span class="text-text-secondary-500">groups</span> that are
            specific to different topics. Whether that is for
            <span class="text-text-secondary-500">activism</span> in a
            particular area or
            <span class="text-text-secondary-500">a new app idea</span>, Bide
            allows you create these spaces.
          </h2>
        </div>

        <div class="lg:w-1/3 lg:pl-12 lg:pr-12 flex flex-col items-center">
          <circle-image :src="require('../assets/tree.png')"></circle-image>
          <h1
            class="text-text-secondary-500 font-medium lg:text-4xl lg:mt-10 text-center"
          >
            Cooperation Over Arguments
          </h1>
          <h2 class="text-text-primary-600 lg:text-2xl lg:mt-6 text-center">
            Many other social media algorithms promote
            <span class="text-text-secondary-500">hate</span> and
            <span class="text-text-secondary-500">negativity</span>. Bide
            attempts to redefine the way we use social media in order to have
            <span class="text-text-secondary-500">discussions</span> and build
            on one another.
          </h2>
        </div>

        <div class="lg:w-1/3 lg:pl-12 lg:pr-12 flex flex-col items-center">
          <circle-image :src="require('../assets/forest.png')"></circle-image>
          <h1
            class="text-text-secondary-500 font-medium lg:text-4xl lg:mt-10 text-center"
          >
            The Community Decides Everything
          </h1>
          <h2 class="text-text-primary-600 lg:text-2xl lg:mt-6 text-center">
            Once in a group, the group as a
            <span class="text-text-secondary-500">whole</span> makes decisions.
            Bide brings true
            <span class="text-text-secondary-500">deomocratics processes</span>
            to the internet. This way, the
            <span class="text-text-secondary-500">people</span> are truly in
            control over what happens.
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../components/navigation/Navbar.vue'
import BoxCard from '../components/landing/BoxCard.vue'
import Banner from '../components/landing/Banner.vue'
import CircleImage from '@/components/landing/CircleImage.vue'
import BideDifferenceTitle from '@/components/landing/BideDifferenceTitle.vue'
import BideDifferenceDescription from '@/components/landing/BideDifferenceDescription.vue'

export default defineComponent({
  components: {
    Navbar,
    BoxCard,
    Banner,
    CircleImage
    // BideDifferenceTitle,
    // BideDifferenceDescription
  }
})
</script>
