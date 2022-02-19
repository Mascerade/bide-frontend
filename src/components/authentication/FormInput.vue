<template>
  <div>
    <label for="" class="block text-lg mb-1"><slot></slot></label>
    <input
      type="text"
      :placeholder="placeholder"
      :value="inputBind"
      @input="$emit('update:inputBind', $event.target.value)"
      class="h-8 w-11/12 border-b-2 border-bg-secondary-500 focus:outline-none mb-3"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    placeholder: {
      type: String
    },
    inputBind: {
      type: String,
      required: true
    }
  },
  emits: ['update:inputBind']
})
</script>

<style></style>
