import axios from 'axios'
import { getToken } from './auth'

const service = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    config.headers['Token'] = getToken()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code !== 20000) {
      console.log(res.message)
      if (res.code === 40001) {
        console.log('auth expired, please login again')
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service