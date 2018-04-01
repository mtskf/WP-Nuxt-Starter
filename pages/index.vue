<template lang="pug">
  no-ssr
    section(v-if='posts')
      nuxt-link.post-link(
        v-for="(post, key) in posts",
        :key="key",
        :to="`/post/${post.slug}`")
        h1 {{ post.title.rendered }}
    h2(v-else) Loading...
</template>

<script>
  const API_URI = 'https://tip.handbuiltclients.com/wp-json/wp/v2/posts'

  export default {
    name: 'HomePage',
    data: () => ({
      title: `Home - ${process.env.title}`,
      description: 'Blog starter template with WP Rest-API and Nuxt.js'
    }),
    async asyncData ({ $axios, params, error }) {
      const res = await $axios.$get(API_URI)
        .catch(e => error({ statusCode: 500, message: 'Internal Server Error' }))

      if (!res) {
        // if response is empty, show error page
        error({ statusCode: 500, message: 'Internal Server Error' })
      }

      return { posts: res }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { property: 'og:title', content: this.title },
          { hid: 'description', name: 'description', content: this.description },

          // Twitter Card
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:title', content: this.title },
          { name: 'twitter:description', content: this.description },
          { name: 'twitter:image', content: `${process.env.baseUrl}/asset/....jpg` },

          // Open Graph
          { property: 'og:title', content: this.title },
          { property: 'og:description', content: this.description },
          { property: 'og:url', content: process.env.baseUrl + this.$route.path },
          { property: 'og:image', content: `${process.env.baseUrl}/asset/....jpg` }
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
