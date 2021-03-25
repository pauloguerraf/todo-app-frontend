<template>
  <div
    class="absolute top-0 z-50 h-screen bg-white dark:bg-black w-full overflow-y-scroll transition-all duration-500"
  >
    <Nav />
    <Nuxt />
  </div>
</template>
<script>
export default {}
</script>
<style>
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
