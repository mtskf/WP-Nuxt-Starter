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
      }
    },
    computed: {
      title () { return `${this.post.title.rendered} - ${process.env.title}` },
      description () {
        let desc = this.post.acf.article_content
        desc = desc.replace(/(<([^>]+)>)/ig, '') // strip tags
        if (desc.length > 86) desc = desc.substring(0, 87) + '...' // truncate
        return desc
      }
    },
    scrollToTop: true
  }
</script>

<style scoped lang="scss">
</style>
