<template lang="pug">
  header
    h1 WP-Nuxt Starter blog
    nav
      router-link.link(exact='', to='/') Home
</template>

<script>
  export default {
    name: 'AppHeader'
  }
</script>

<style scoped lang="scss">
  header {
    padding: 24px 32px;
    margin-bottom: 32px;
    text-align: center;
  }
  h1 {
    font-weight: 100;
  }
  nav {
    max-width: 650px;
    margin: 0 auto;
  }
  .link {
    font-size: 18px;
    margin-right: 16px;
  }
  .nuxt-link-active {
    font-weight: bold;
    text-decoration: underline;
  }
</style>
