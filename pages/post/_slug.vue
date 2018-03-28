<template lang="pug">
  article(v-if="post")
    h1 {{ post.title.rendered }}
    p(v-html="post.acf.article_content")
  p(v-else) loading...
</template>

<script>
  import axios from '@/plugins/axios'
  const API_BASE = 'https://tip.handbuiltclients.com/wp-json/wp/v2/posts?slug='

  export default {
    name: 'PostPage',
    data: () => ({
    }),
    asyncData ({ params, error }) {
      return axios.get(API_BASE + params.slug)
        .then(res => {
          if (res.data.length) return { post: res.data[0] }
          else error({ statusCode: 404, message: 'Page Not Found' })
        })
        .catch(e => error({ statusCode: 500, message: 'Internal Server Error' }))
    },
    head () {
      return {
        title: `${this.post.title.rendered} - WP-Nuxt-Starter`,
        meta: [
          { property: 'og:title', content: `${this.post.title.rendered} - WP-Nuxt-Starter` },
          { hid: 'description', name: 'description', content: '......' }
        ]
      }
    },
    scrollToTop: true
  }
</script>

<style scoped lang="scss">
</style>
