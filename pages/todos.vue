<template>
  <div class="w-9/12 sm:w-6/12 mx-auto h-full">
    <div v-show="error !== ''" class="p-3 bg-yellow-500 w-1/2 mx-auto">
      <p class="m-1 sm:m-3">{{ error }}</p>
      <button class="button--grey" @click="resetError()">Ok</button>
    </div>
    <NewTodo @add-todo="addTodo" />
    <div class="mx-auto flex flex-col">
      <div
        v-for="todo in data"
        :key="todo.id"
        class="rounded-md my-3 shadow-lg"
      >
        <div
          class="flex justify-between items-center w-full dark:bg-dorfgray bg-gray-100"
        >
          <Checkbox :todo="todo" @check="toggleTodo(todo.id, todo.completed)" />
          <h3
            :class="todo.completed ? 'line-through' : ''"
            class="m-3 dark:text-white"
          >
            {{ todo.title }}
          </h3>
          <button
            class="justify-self-end font-roboto px-4 py-2 mx-2 text-gray-500 hover:text-white rounded-md fill-current"
            @click="deleteTodo(todo.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 inline"
              viewBox="0 0 65 65"
            >
              <g>
                <path
                  d="M65,6.57,58.43,0,32.5,25.93,6.57,0,0,6.57,25.93,32.5,0,58.43,6.57,65,32.5,39.07,58.43,65,65,58.43,39.07,32.5Z"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $strapi }) {
    const data = await $strapi.$todos.find({
      'users_permissions_user.id': [$strapi.user.id],
    })
    return { data }
  },
  data() {
    return {
      error: '',
    }
  },
  watchQuery: ['posts'],
  mounted() {
    this.checkLogin()
  },
  methods: {
    checkLogin() {
      if (!this.$strapi.user) {
        this.error = 'Please Login to see your todos'
      }
    },
    async toggleTodo(id, comp) {
      await this.$strapi.$todos.update(id, { completed: !comp })
      this.getTodos()
    },
    resetError() {
      this.error = ''
    },
    async addTodo(newTodo) {
      await this.$strapi.$todos.create(newTodo)
      this.getTodos()
    },
    async getTodos() {
      this.data = await this.$strapi.$todos.find({
        'users_permissions_user.id': [this.$strapi.user.id],
      })
    },
    async deleteTodo(id) {
      await this.$strapi.$todos.delete(id)
      this.getTodos()
    },
  },
}
</script>
<style></style>
