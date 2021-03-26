<template>
  <div
    class="absolute top-0 w-full mx-auto h-full flex flex-col items-center justify-center"
  >
    <div v-show="error !== ''" class="p-3 bg-yellow-500 w-1/2 mx-auto">
      <p>{{ error }}</p>
    </div>

    <form
      class="w-full sm:w-9/12 md:w-6/12 lg:w-1/3 px-6 sm:px-0"
      @submit="loginUser"
    >
      <div
        class="flex justify-between w-full border-gray-100 border shadow-lg rounded-md bg-white my-6"
      >
        <input
          v-model="identifier"
          type="email"
          class="p-4 w-full text-black placeholder-gray-400 focus:outline-none text-md"
          placeholder="email"
        />
      </div>
      <div
        class="flex justify-between w-full border-gray-100 border shadow-lg rounded-md bg-white my-6"
      >
        <input
          v-model="password"
          type="password"
          class="p-4 w-full text-black placeholder-gray-400 focus:outline-none text-md"
          placeholder="password"
        />
      </div>
      <div class="w-full flex sm:flex-row flex-col-reverse justify-between">
        <p class="my-5 py-2 text-black dark:text-white">
          Have no account?
          <NuxtLink
            to="/signup"
            class="font-bold text-black dark:text-white hover:underline"
            >Sign up</NuxtLink
          >
        </p>
        <button
          class="justify-self-end px-4 py-2 my-5 ml-2 text-black border-2 border-gray-400 dark:border-gray-100 hover:text-white rounded-lg disabled:bg-gray-400 disabled:text-black hover:disabled:text-black bg-white hover:bg-black"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      identifier: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async loginUser(e) {
      e.preventDefault()
      try {
        const user = await this.$strapi.login({
          identifier: this.identifier,
          password: this.password,
        })
        if (user !== null) {
          this.error = ''
          this.$nuxt.$router.push('/todos')
        }
      } catch (error) {
        this.error = 'Please check your credentials'
      }
    },
  },
}
</script>
<style></style>
