# WP Nuxt Starter

Blog starter template with WP Rest-API and Nuxt.js

## Features
- SEO Friendly - OGP & Twitter Cards meta tags are rendered on server-side
- Auto retry and cache API Requests on the both server & client side
- API requests and routing error handling
- Transpiling SCSS & Pug
- Asyncronous loading components with Webpack code splitting

### Example: async component loading
```
export default {
  components: {
    MyComponent: _ => import('@/components/mycomponent')
  }
}
```

## Dependencies Docs
- [Nuxt.js docs](https://nuxtjs.org/guide)
- [Nuxt Axios Module](https://axios.nuxtjs.org/)
- [Vue Analytics](https://matteogabriele.gitbooks.io/vue-analytics/)

## How to start
```
git clone git@github.com:mtskf/WP-Nuxt-Starter.git && cd WP-Nuxt-Starter && yarn && yarn dev
```

## Set git remote
```
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```
