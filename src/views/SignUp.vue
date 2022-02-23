<template>
  <div class="fullscreen xl:min-h-[750px] flex flex-col xl:flex-row">
    <div class="xl:h-full xl:w-3/5 flex justify-center items-center">
      <div class="xl:w-2/3 flex flex-col items-center">
        <h1
          class="xl:text-6xl xl:mb-8 text-center font-semibold text-text-secondary-500"
        >
          Create Account
        </h1>

        <third-party-sign-in></third-party-sign-in>

        <h2
          class="xl:mb-6 xl:text-md text-text-primary-600 font-medium text-center"
        >
          Or Sign-In Manually
        </h2>

        <form-input
          :placeholder="'First Name'"
          v-model:inputBind="firstName"
        ></form-input>
        <form-input
          :placeholder="'Last Name'"
          v-model:inputBind="lastName"
        ></form-input>
        <form-input
          :placeholder="'Username'"
          v-model:inputBind="username"
        ></form-input>
        <form-input
          :placeholder="'Email'"
          v-model:inputBind="email"
          disabled
        ></form-input>
        <form-input
          :placeholder="'Password'"
          v-model:inputBind="password"
          disabled
        ></form-input>
        <general-button class="xl:mt-6 xl:pr-32 xl:pl-32"
          >Sign Up</general-button
        >
        <router-link
          class="xl:mt-4 xl:text-xl underline text-text-primary-700"
          :to="'/'"
          >Back</router-link
        >
        <router-link
          class="xl:mt-1 xl:text-xl underline text-text-primary-700"
          :to="'/signin'"
          >Already Have an Account? Log In Here.</router-link
        >
      </div>
    </div>

    <div
      class="xl:h-full xl:min-h-full xl:w-2/5 flex flex-col justify-center items-center bg-bg-secondary-300"
    >
      <h1 class="font-semibold text-text-primary-700 xl:text-6xl xl:mb-5">
        Start Finding
      </h1>
      <img
        src="../assets/forest-3.png"
        alt="Forest"
        class="shadow-2xl rounded-full"
      />
      <h1 class="font-semibold text-text-primary-700 xl:text-6xl xl:mt-5">
        Your Community
      </h1>
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
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const password = ref('')
    return {
      username,
      firstName,
      lastName,
      email,
      password
    }
  }
})
</script>
