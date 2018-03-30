import { cacheAdapterEnhancer } from 'axios-extensions'

export default function ({ $axios, redirect }) {
  // enable cache
  const defaults = $axios.defaults
  defaults.adapter = cacheAdapterEnhancer(defaults.adapter, true)

  // server console message
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  // error handling
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) redirect(400, '/400')
  })
}
