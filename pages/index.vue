<template lang="pug">
  section(v-if='posts')
    router-link.post-link(
      v-for="(post, key) in posts",
      :key="key",
      :to="`/post/${post.slug}`")
      h1 {{ post.title.rendered }}
  h2(v-else)
    | Loading... {{ currentDate }}
</template>

<script>
  import axios from '@/plugins/axios'
  const API_URI = 'https://tip.handbuiltclients.com/wp-json/wp/v2/posts'

  export default {
    name: 'HomePage',
    data: () => ({
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
