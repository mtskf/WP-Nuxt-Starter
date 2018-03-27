module.exports = {
  head: {
    title: 'nuxt-apollo-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'GraphCMS Blog starter using Apollo Client and Nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    postcss: [
      require('autoprefixer')({
        browsers: ['IE 11', 'last 2 versions' ],
        grid: true
      })
    ],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vender: ['axios']
  },
  modules: [
    // load external scss resources to be used in vue components
    ['nuxt-sass-resources-loader', '@/assets/scss/_variables.scss'],
  ],
  // load external scss file
  css: [
    '@/assets/scss/style.scss'
  ],
}
