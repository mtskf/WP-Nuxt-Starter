import * as axios from 'axios'

const options = {}
if (process.server) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

export default axios.create(options)
