import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import qs from 'qs'
import { config } from '@/config/axios/config'
import { getAccessToken, getRefreshToken } from '@/utils/auth'
import errorCode from './errorCode'
import { useI18n } from '@/hooks/web/useI18n'

const BASE_URL = import.meta.env.VITE_BASE_URL
const BASE_API = import.meta.env.VITE_API_URL
export const PATH_URL = import.meta.env.VITE_API_BASEPATH

const { result_code } = config

// 需要忽略的提示。忽略后，自动 Promise.reject('error')
const ignoreMsgs = [
  '无效的刷新令牌', // 刷新令牌被删除时，不用提示
  '刷新令牌已过期' // 使用刷新令牌，刷新获取新的访问令牌时，结果因为过期失败，此时需要忽略。否则，会导致继续 401，无法跳转到登出界面
]
// 是否显示重新登录
export const isRelogin = { show: false }

// 是否正在刷新中
let isRefreshToken = false

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: BASE_URL + PATH_URL + BASE_API, // api 的 base_url
  withCredentials: config.withCredentials, // 允许携带cookie
  timeout: config.request_timeout // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (getAccessToken()) {
      ;(config as Recordable).headers.Authorization = 'Bearer ' + getAccessToken() // 让每个请求携带自定义token
    }
    const params = config.params || {}
    const data = config.data || false

    if (
      config.method?.toUpperCase() === 'POST' &&
      config!.headers!['Content-Type'] === 'application/x-www-form-urlencoded'
    ) {
      config.data = qs.stringify(data)
    }
    // get参数编码
    if (config.method?.toUpperCase() === 'GET' && config.params) {
      let url = config.url as string

      // 给 get 请求加上时间戳参数，避免从缓存中拿数据
      params._t = new Date().getTime()

      url += '?'
      const keys = Object.keys(params)
      for (const key of keys) {
        if (params[key] !== void 0 && params[key] !== null) {
          url += `${key}=${encodeURIComponent(params[key])}&`
        }
      }
      config.params = {}
      config.url = url
    }
    return config
  },
  (error: AxiosError) => {
    console.error(error)
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  async (response: AxiosResponse<Recordable>) => {
    const { data } = response
    if (!data) {
      // HTTP请求没有返回值;
      return Promise.reject(new Error('HTTP request failed!'))
    }
    // 未设置状态码则默认成功状态
    const code = data.code || result_code

    // 获取错误信息
    const msg = data.msg || (errorCode as Recordable)[code] || errorCode['default']

    if (ignoreMsgs.indexOf(msg) !== -1) {
      // 如果是忽略的错误码，直接返回 msg 异常
      return Promise.reject(msg)
    } else if (code === 401) {
      // 如果未认证，并且未进行刷新令牌，说明可能是访问令牌过期了
      if (!isRefreshToken) {
        isRefreshToken = true
        // 1. 如果获取不到刷新令牌，则只能执行登出操作
        if (!getRefreshToken()) {
          return handleAuthorized()
        }
        // 2. 进行刷新访问令牌
        // TODO: 刷新访问令牌
      }
      return Promise.reject(msg)
    } else if (code === 500) {
      return Promise.reject(new Error(msg))
    } else if (code !== 200) {
      if (msg === '无效的刷新令牌') {
        console.log(msg)
      } else {
        console.log(msg)
      }
      return Promise.reject(msg)
    } else {
      return Promise.resolve({ ...response })
    }
  },
  (error: AxiosError) => {
    console.log('err' + error) // for debug
    let { message } = error
    const { t } = useI18n()
    if (message === 'Network Error') {
      message = t('sys.api.errorMessage')
    } else if (message.includes('timeout')) {
      message = t('sys.api.apiTimeoutMessage')
    } else if (message.includes('Request failed with status code')) {
      message = t('sys.api.apiRequestFailed') + message.substring(message.length - 3)
    }
    console.error(message)
    return Promise.reject(error)
  }
)
function handleAuthorized() {
  const { t } = useI18n()
  if (!isRelogin.show) {
    isRelogin.show = true
    confirm(t('sys.api.timeoutMessage'))
    isRelogin.show = false
  }
  return Promise.reject(t('sys.api.timeoutMessage'))
}
export { service }
