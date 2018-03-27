<template lang="pug">
  section(v-if='posts')
    router-link.post-link(
      v-for="(post, key) in posts",
      :key="key",
      :to="`/post/${post.slug}`")
      h1 {{ post.title.rendered }}
      // div(v-html="post.acf.article_content")
      // p {{ post.link }}
      // p(v-for="(val, key) in post") {{ key }}
  h2(v-else)
    | Loading... {{ currentDate }}
</template>

<script>
  import axios from '../plugins/axios'
  const API_URI = 'https://tip.handbuiltclients.com/wp-json/wp/v2/posts'

  export default {
    name: 'HomePage',
    data: () => ({
      loading: 0,
      postCount: 0
    }),
    async asyncData () {
      const { data } = await axios.get(API_URI)
      return { posts: data }
    }
  }
</script>


<style scoped lang="scss">
a.post-link {

}
</style>
