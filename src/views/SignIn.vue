<template>
  <div class="fullscreen flex flex-row">
    <div
      class="lg:w-2/5 flex flex-col justify-center items-center bg-bg-secondary-300"
    >
      <h1 class="font-semibold text-text-primary-700 lg:text-6xl lg:mb-5">
        Welcome
      </h1>
      <img
        src="../assets/forest-4.png"
        alt="Forest"
        class="shadow-2xl rounded-full"
      />
      <h1 class="font-semibold text-text-primary-700 lg:text-6xl lg:mt-5">
        Back
      </h1>
    </div>

    <div class="lg:w-3/5 flex justify-center items-center">
      <div class="lg:w-2/3 flex flex-col items-center">
        <h1
          class="lg:text-6xl lg:mb-8 text-center font-semibold text-text-secondary-500"
        >
          Log In
        </h1>

        <third-party-sign-in></third-party-sign-in>

        <h2
          class="lg:mb-8 lg:text-md text-text-primary-600 font-medium text-center"
        >
          Or Sign-In Manually
        </h2>
        <form-input
          :placeholder="'Username'"
          v-model:inputBind="Username"
        ></form-input>
        <form-input
          :placeholder="'Password'"
          v-model:inputBind="password"
          disabled
        ></form-input>
        <general-button class="lg:mt-10 lg:pr-32 lg:pl-32"
          >Log In</general-button
        >
        <router-link
          class="lg:mt-4 lg:text-lg underline text-text-primary-700"
          :to="'/'"
          >Back</router-link
        >
        <router-link
          class="lg:mt-4 lg:text-lg underline text-text-primary-700"
          :to="'/signup'"
          >Create Account</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FormInput from '@/components/authentication/FormInput.vue'
import ThirdPartySignIn from '@/components/authentication/ThirdPartySignIn.vue'
import GeneralButton from '@/components/ui/GeneralButton.vue'

export default defineComponent({
  components: {
    FormInput,
    ThirdPartySignIn,
    GeneralButton
  },
  setup() {
    const username = ref('')
    const password = ref('')
    return {
      username,
      password
    }
  }
})
</script>
