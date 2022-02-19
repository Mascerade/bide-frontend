<template>
  <div id="background" class="flex flex-row">
    <div class="lg:w-3/5 flex justify-center items-center">
      <div class="lg:w-2/3 flex flex-col items-center">
        <h1
          class="lg:text-6xl lg:mb-8 text-center font-semibold text-text-secondary-500"
        >
          Create Account
        </h1>

        <div class="lg:mb-8 flex flex-row justify-center">
          <auth-service-button
            class="mr-8"
            :src="require('../assets/icons/google.png')"
          ></auth-service-button>
          <auth-service-button
            class="mr-8"
            :src="require('../assets/icons/facebook.png')"
          ></auth-service-button>
          <auth-service-button
            :src="require('../assets/icons/twitter.png')"
          ></auth-service-button>
        </div>

        <h2
          class="lg:mb-8 lg:text-md text-text-primary-600 font-medium text-center"
        >
          Or Sign in Manually
        </h2>

        <form-input :placeholder="'ID'" v-model:inputBind="userId"></form-input>
        <form-input
          :placeholder="'First Name'"
          v-model:inputBind="firstName"
        ></form-input>
        <form-input
          :placeholder="'Last Name'"
          v-model:inputBind="lastName"
        ></form-input>
        <general-button class="lg:mt-10 lg:pr-32 lg:pl-32"
          >Sign Up</general-button
        >
      </div>
    </div>

    <div
      class="lg:w-2/5 flex flex-col justify-center items-center bg-bg-secondary-300"
    >
      <h1 class="font-semibold text-text-primary-700 lg:text-6xl lg:mb-5">
        Start Finding
      </h1>
      <img
        src="../assets/forest-3.png"
        alt="Forest"
        class="shadow-2xl rounded-full"
      />
      <h1 class="font-semibold text-text-primary-700 lg:text-6xl lg:mt-5">
        Your Community
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FormInput from '@/components/authentication/FormInput.vue'
import AuthServiceButton from '@/components/authentication/AuthServiceButton.vue'
import GeneralButton from '@/components/ui/GeneralButton.vue'

export default defineComponent({
  components: {
    FormInput,
    AuthServiceButton,
    GeneralButton
  },
  setup() {
    const userId = ref('')
    const firstName = ref('')
    const lastName = ref('')
    return {
      userId,
      firstName,
      lastName
    }
  }
})
</script>

<style scoped>
#background {
  height: 100vh;
  width: 100vw;
}
</style>
