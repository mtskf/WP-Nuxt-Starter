module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    title: 'wp-nuxt-starter'
  },
  head: {
    title: 'wp-nuxt-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Blog starter template with WP Rest-API and Nuxt.js' },

      // Twitter Card common meta
      { name: 'twitter:site:id', content: '@gurigurico' },

      // Open Graph common meta
      { property: 'og:og:site_name', content: 'WP-Nuxt-Starter' },
      { property: 'og:type', content: 'website' },
      // { property: 'fb:app_id', content: '...' },     // App-ID
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'canonical', href: 'https://'}
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
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
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
    ['nuxt-sass-resources-loader', '@/assets/scss/_variables.scss'], // referenceable scss resoruces
    // ['@nuxtjs/google-analytics', { id: 'UA-12301-2' }]     // Google Analytics Config
  ],
  plugins: [
    '@/plugins/filters.js',
    '@/plugins/axios'
  ],
  // serverMiddleware: [ 'redirect-ssl' ],
  css: ['@/assets/scss/style.scss'],      // load external scss file
  axios: {
    retry: { retries: 3 },
    https: true
  }
}
