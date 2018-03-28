<template lang="pug">
  section(v-if='posts')
    nuxt-link.post-link(
      v-for="(post, key) in posts",
      :key="key",
      :to="`/post/${post.slug}`")
      h1 {{ post.title.rendered }}
  h2(v-else) Loading...
</template>

<script>
  import axios from '@/plugins/axios'
  const API_URI = 'https://tip.handbuiltclients.com/wp-json/wp/v2/posts'

  export default {
    name: 'HomePage',
    data: () => ({
      title: 'Home - WP-Nuxt-Starter'
    }),
    asyncData ({ params, error }) {
      return axios.get(API_URI)
        .then(res => { return { posts: res.data } })
        .catch(e => error({ statusCode: 500, message: 'Internal Server Error' }))
    },
    head () {
      return {
        title: this.title,
        meta: [
          { property: 'og:title', content: this.title },
          { hid: 'description', name: 'description', content: '......' }
        ]
      }
    },
    scrollToTop: true
  }
</script>


<style scoped lang="scss">
a.post-link {

}
</style>
