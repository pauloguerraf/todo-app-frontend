<template>
  <div
    class="bg-gray-300 dark:bg-black w-12 h-10 flex justify-center items-center"
    @click="check(todo.id)"
  >
    <svg
      :class="checked ? 'scale-100' : 'scale-0'"
      class="fill-current w-3 h-3 text-gray-700 pointer-events-none transform transition-all duration-200"
      viewBox="0 0 17 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-9 -11)">
        <path
          d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      default() {
        return {
          id: -1,
          title: '',
          completed: false,
          users_permissions_user: null,
        }
      },
    },
  },
  data() {
    return {
      checked: false,
    }
  },
  mounted() {
    this.checked = this.todo.completed
  },
  methods: {
    check(id) {
      this.$emit('check', id)
      this.checked = !this.checked
    },
  },
}
</script>

<style></style>
