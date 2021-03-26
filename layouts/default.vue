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
@font-face {
  font-family: 'Walsheim';
  src: url('~/assets/fonts/gt-walsheim-light-webfont.woff') format('woff'),
    url('~/assets/fonts/gt-walsheim-light-webfont.woff2') format('woff2');
}
html {
  box-sizing: border-box;
  font-family: 'Walsheim';
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
