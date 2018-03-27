import * as axios from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'

const options = {}
if (process.server) {
  // options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
  options.baseURL = '/'
  options.headers = { 'Cache-Control': 'no-cache' }
  options.adapter = cacheAdapterEnhancer(axios.defaults.adapter, true)
}

export default axios.create(options)
