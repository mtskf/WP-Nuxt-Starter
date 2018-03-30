module.exports = {
  head: {
    title: 'wp-nuxt-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Blog starter template with WP Rest-API and Nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#009EFA', height: '4px' },
  build: {
    extractCSS: true,
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
  },
  modules: [
    '@nuxtjs/axios',
    // load external scss resources to be used in vue components
    ['nuxt-sass-resources-loader', '@/assets/scss/_variables.scss']
  ],
  plugins: [
    '@/plugins/axios'
  ],
  // load external scss file
  css: ['@/assets/scss/style.scss'],
  axios: {
    retry: { retries: 3 },
    https: true
  }
}
