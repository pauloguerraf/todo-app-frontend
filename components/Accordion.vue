<template>
  <div class="text-black w-full overflow-hidden">
    <input v-model="checked" type="checkbox" class="hidden" />
    <button
      class="w-full focus:outline-none flex items-center justify-between dark:text-white text-black py-2 border-b border-gray-500 leading-normal text-left"
      @click="checked = !checked"
    >
      <span>{{ label }}</span>
      <p class="font-bold text-xl text-center w-8">
        {{ checked ? '-' : '+' }}
      </p>
    </button>

    <div class="accordion-content w-full dark:text-white overflow-hidden my-6">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: 'Tasks Accordion' },
  },
  data() {
    return {
      checked: true,
    }
  },
}
</script>
<style scoped>
.accordion-content {
  max-height: 0;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}
input:checked ~ .accordion-content {
  max-height: 100vh;
}
</style>
