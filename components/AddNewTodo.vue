<template>
  <div v-if="$strapi.user !== null" class="py-8">
    <div class="flex text-black dark:text-white justify-between items-end my-8">
      <p class="text-2xl">
        Hi, {{ $strapi.user.username }}. What are your ToDos for today?
      </p>
      <p class="text-right">
        {{
          new Date()
            .toLocaleString(['en-US'], {
              weekday: 'long',
              month: '2-digit',
              day: '2-digit',
              year: 'numeric',
            })
            .replaceAll('/', '.')
        }}
      </p>
    </div>
    <form
      ref="form"
      class="flex justify-between items-center h-full"
      @submit="addTodo"
    >
      <div
        class="flex justify-between w-full border-gray-100 border shadow-lg rounded-md bg-white"
      >
        <input
          v-model="form.title"
          type="text"
          class="px-4 flex-grow text-black placeholder-gray-400 focus:outline-none text-md"
          placeholder="e. G. update wordpress"
        />
        <button
          class="font-roboto border-l p-4 bg-white text-gray-400 disabled:text-gray-200 my-1 cursor-hover disabled:cursor-not-allowed"
          :disabled="form.title === ''"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 65 41.67"
            class="w-8 inline"
          >
            <g>
              <polygon
                class="fill-current"
                points="57.32 0 57.32 26.89 15.85 26.89 15.85 19.79 7.92 25.26 0 30.73 7.92 36.2 15.85 41.67 15.85 34.57 57.32 34.57 57.32 34.58 65 34.58 65 0 57.32 0"
              />
            </g>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        completed: false,
        users_permissions_user: this.$strapi.user,
      },
    }
  },
  methods: {
    addTodo(e) {
      const formData = new FormData()
      formData.append('data', JSON.stringify(this.form))
      e.preventDefault()
      this.$emit('add-todo', formData)
      this.form.title = ''
    },
  },
}
</script>

<style></style>
