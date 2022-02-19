<template>
  <div id="background" class="flex flex-row">
    <div class="lg:w-1/2 flex justify-center items-center">
      <div class="lg:w-5/6 shadow-md">
        <div class="lg:h-14 bg-bg-secondary-400 rounded-t-lg"></div>
        <div class="flex flex-col bg-bg-primary">
          <h1 class="lg:text-4xl text-center text-text-primary-600">
            Create a User
          </h1>
          <form-input
            :placeholder="'ID'"
            v-model:inputBind="userId"
          ></form-input>
        </div>
      </div>
    </div>
    <div
      class="lg:w-1/2 flex flex-col justify-center items-center green-gradient-1"
    >
      <h1 class="font-semibold text-text-primary-700 lg:text-5xl lg:mb-5">
        Start Finding
      </h1>
      <img
        src="../assets/forest-3.png"
        alt="Forest"
        class="shadow-2xl rounded-full"
      />
      <h1 class="font-semibold text-text-primary-700 lg:text-5xl lg:mt-5">
        Your Community
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FormInput from '@/components/authentication/FormInput.vue'

export default defineComponent({
  components: {
    FormInput
  },
  setup() {
    const userId = ref('')
    return {
      userId
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
