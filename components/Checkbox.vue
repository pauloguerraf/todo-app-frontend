<template>
  <div class="border border-white w-8 h-8" @click="check(todo.id)"></div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  data() {
    return {
      checked: false,
    }
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
