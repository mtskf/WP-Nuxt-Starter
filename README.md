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

## Dependencies

#### Yarn
https://yarnpkg.com/en/
```
$ brew install yarn
```

#### Gulp - only for icon font generation
https://gulpjs.com/
```
$ yarn global add gulp
```

#### Now - Deployment
https://zeit.co/now
```
$ yarn global add now
```

#### Dependencies Docs
- [Nuxt.js docs](https://nuxtjs.org/guide)
- [Nuxt Axios Module](https://axios.nuxtjs.org/)
- [Vue Analytics](https://matteogabriele.gitbooks.io/vue-analytics/)


## Startup guide

#### Installation & start dev
```
$ git clone git@github.com:HNBCreative/acd.git && cd acd && yarn && yarn dev
```

#### Set git remote
```
$ git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```

#### Generate Iconfont
Edit Sketch file: @/assets/fonts/hcicons/hcicons.sketch
```
$ gulp iconfont
```

#### Build and Deployment
```
$ yarn build && now
```
