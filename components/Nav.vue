<template>
  <div class="flex w-9/12 mx-auto z-50 relative py-10 justify-between">
    <Logo />
    <div class="flex">
      <div
        v-if="$strapi.user !== null"
        :class="
          $strapi.user !== null
            ? 'flex justify-end w-full items-center dark:text-white text-black transition-all'
            : 'hidden'
        "
      >
        <span class="border-r px-3 border-gray-400 dark:border-gray-100">{{
          $strapi.user.username
        }}</span>
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
