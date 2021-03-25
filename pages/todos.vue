<template>
  <div class="w-6/12 mx-auto h-full">
    <div v-show="error !== ''" class="p-3 bg-yellow-500 w-1/2 mx-auto">
      <p class="m-1 sm:m-3">{{ error }}</p>
      <button class="button--grey" @click="resetError()">Ok</button>
    </div>
    <NewTodo class="h-1/4 top-24" @add-todo="addTodo" />
    <div class="mx-auto flex flex-col w-3/4">
      <div
        v-for="(todo, i) in data"
        :key="i"
        class="rounded-md my-3 shadow-lg bg-white"
      >
        <div class="flex justify-between items-center w-full">
          <h3 class="font-bold m-3">{{ todo.title }}</h3>
          <button
            class="justify-self-end font-roboto px-4 py-2 mx-2 bg-black text-black hover:text-white rounded-md disabled:bg-gray-400 disabled:text-black hover:disabled:text-black bg-white rounded-md hover:bg-blue-500"
            @click="deleteTodo(todo.id)"
          >
            X
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
