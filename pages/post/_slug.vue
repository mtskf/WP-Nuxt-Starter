<template lang="pug">
  no-ssr
    article(v-if="post")
        h1 {{ post.title.rendered }}
        div(v-html="post.acf.article_content")
    p(v-else) loading...
</template>

<script>
  const API_BASE = 'https://tip.handbuiltclients.com/wp-json/wp/v2/posts?slug='

  export default {
    name: 'PostPage',
    data: () => ({
    }),
    async asyncData ({ $axios, params, error }) {
      const res = await $axios.$get(API_BASE + params.slug)
        .catch(e => error({ statusCode: 500, message: 'Internal Server Error' }))

      if (!res.length) {
        // if response is empty, show 404 page
        error({ statusCode: 404, message: 'Page Not Found' })
      }

      return { post: res[0] }
    },
    head () {
      if (this.post) {
        return {
          title: `${this.post.title.rendered} - WP-Nuxt-Starter`,
          meta: [
            { property: 'og:title', content: `${this.post.title.rendered} - WP-Nuxt-Starter` },
            { hid: 'description', name: 'description', content: '......' }
          ]
        }
      }
    },
    scrollToTop: true
  }
</script>

<style scoped lang="scss">
</style>
