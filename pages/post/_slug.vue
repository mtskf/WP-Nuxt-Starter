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
      metaInfo: {
        title: '',
        desc: ''
      }
    }),
    async asyncData ({ params }) {
      const { data } = await axios.get(API_BASE + params.slug)
      return { post: data[0] }
    },
    head () {
      return {
        title: this.metaInfo.title,
        meta: [
          { property: 'og:title', content: this.metaInfo.title },
          { hid: 'description', name: 'description', content: '......' }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
