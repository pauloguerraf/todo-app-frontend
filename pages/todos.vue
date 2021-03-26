<template>
  <div class="w-full sm:w-6/12 mx-auto h-full px-6 sm:px-0">
    <div v-show="error !== ''" class="w-1/2 mx-auto text-center">
      <div class="p-3 my-5 bg-yellow-500">
        <p>{{ error }}</p>
      </div>
      <NuxtLink
        to="/login"
        class="justify-self-end px-4 py-2 my-5 ml-2 text-black border-2 border-gray-400 dark:border-gray-100 hover:text-white rounded-lg bg-white hover:bg-black"
      >
        Login
      </NuxtLink>
    </div>

    <AddNewTodo @add-todo="addTodo" />

    <Accordion v-if="showuncompleted" label="Open Tasks">
      <div class="mx-auto flex flex-col">
        <div
          v-for="todo in uncompleted"
          :key="todo.id"
          class="rounded-md my-1 shadow-lg"
        >
          <div
            class="flex justify-between items-center w-full dark:bg-dorfgray bg-gray-100 p-1"
          >
            <Checkbox
              :todo="todo"
              @check="toggleTodo(todo.id, todo.completed)"
            />
            <div class="w-full px-4">
              <h3
                :class="
                  todo.completed
                    ? 'line-through dark:text-gray-500 text-gray-300'
                    : 'dark:text-white'
                "
                class="m-2 text-left"
              >
                {{ todo.title }}
              </h3>
            </div>
            <button
              class="justify-self-end font-roboto px-4 py-2 mx-2 text-gray-500 dark:hover:text-white hover:text-gray-300 rounded-md fill-current"
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
    </Accordion>
    <Accordion v-if="showcompleted" label="Finished Tasks"
      ><div class="mx-auto flex flex-col">
        <div
          v-for="todo in completed"
          :key="todo.id"
          class="rounded-md my-1 shadow-lg"
        >
          <div
            class="flex justify-between items-center w-full dark:bg-dorfgray bg-gray-100 p-1"
          >
            <Checkbox
              :todo="todo"
              @check="toggleTodo(todo.id, todo.completed)"
            />
            <div class="w-full px-4">
              <h3
                :class="
                  todo.completed
                    ? 'line-through dark:text-gray-500 text-gray-400'
                    : 'dark:text-white'
                "
                class="m-2 text-left"
              >
                {{ todo.title }}
              </h3>
            </div>
            <button
              class="justify-self-end font-roboto px-4 py-2 text-gray-500 dark:hover:text-white hover:text-gray-300 rounded-md fill-current"
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
        </div></div
    ></Accordion>
  </div>
</template>
<script>
export default {
  async asyncData({ $strapi }) {
    if ($strapi.user) {
      const completed = await $strapi.$todos.find({
        'users_permissions_user.id': [$strapi.user.id],
        completed: true,
      })
      const uncompleted = await $strapi.$todos.find({
        'users_permissions_user.id': [$strapi.user.id],
        completed: false,
      })
      return { completed, uncompleted }
    }
  },
  data() {
    return {
      error: '',
    }
  },
  computed: {
    showuncompleted() {
      if (this.uncompleted) return this.uncompleted.length > 0
      else return false
    },
    showcompleted() {
      if (this.completed) return this.completed.length > 0
      else return false
    },
  },
  mounted() {
    this.checkLogin()
  },
  methods: {
    checkLogin() {
      if (this.$strapi.user === null) {
        this.error = 'Please login to see your ToDos'
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
      if (this.$strapi.user) {
        this.completed = await this.$strapi.$todos.find({
          'users_permissions_user.id': [this.$strapi.user.id],
          completed: true,
        })
        this.uncompleted = await this.$strapi.$todos.find({
          'users_permissions_user.id': [this.$strapi.user.id],
          completed: false,
        })
      }
    },
    async deleteTodo(id) {
      await this.$strapi.$todos.delete(id)
      this.getTodos()
    },
  },
}
</script>
<style></style>
