<template>
  <div class="h-screen absolute top-0 w-full">
    <div
      class="mx-auto md:h-full h-full w-1/2 flex flex-col justify-center items-center z-10"
    >
      <div class="md:w-1/2 w-full flex flex-col text-center">
        <NuxtLink
          to="/login"
          class="justify-self-end px-4 py-2 my-5 ml-2 text-black border-2 border-gray-400 dark:border-gray-100 hover:text-white rounded-lg bg-white hover:bg-black"
        >
          Login
        </NuxtLink>
        <p class="my-5 py-2 text-black dark:text-white">
          Have no account?
          <NuxtLink
            to="/signup"
            class="font-bold text-black dark:text-white hover:underline"
            >Sign up</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'authenticated',
}
</script>
<style></style>
