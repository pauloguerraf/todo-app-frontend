<template>
  <div
    class="flex w-full px-4 sm:w-9/12 mx-auto z-50 relative py-10 justify-between"
  >
    <Logo />
    <div class="flex">
      <div
        v-if="$strapi.user !== null"
        :class="
          $strapi.user !== null
            ? 'flex  sm:flex-row flex-col justify-end w-full sm:items-center items-end dark:text-white text-black transition-all'
            : 'hidden'
        "
      >
        <span
          class="sm:border-r border-b sm:border-b-0 sm:px-3 border-gray-400 dark:border-gray-100 text-right"
          >{{ $strapi.user.username }}</span
        >
        <button class="pl-3 text-sm" @click="logout">logout</button>
      </div>
      <ToggleTheme />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async logout() {
      await this.$strapi.logout()
      this.$nuxt.$router.push('/')
    },
  },
}
</script>
<style></style>
