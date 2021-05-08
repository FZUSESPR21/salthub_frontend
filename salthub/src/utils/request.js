import axios from 'axios'
import store from '@/store'
import { Message, MessageBox } from 'element-ui'
import { getToken } from '@/utils/auth'

// 1.创建axios实例
const service = axios.create({
  // 公共接口--这里注意后面会讲,url = base url + request url
  //   baseURL: process.env.VUE_APP_URL,

  //demo接口url
  baseURL: 'https://47.100.89.20',
  //新接口url
  // baseURL: 'https://'

  // 超时时间 单位是ms，这里设置了5s的超时时间
  timeout: 5 * 1000
})

// 2.请求拦截器request interceptor
/**
 *@description: 请求拦截器,处理所有请求头
 *@author: lw
 *@date: 2021-04-30 09:04:33
 *@version: V1.0.0
*/
service.interceptors.request.use(
  config => {
    // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    // 注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
    // console.log(store.getters)
    if (store.getters.token) {
      // config.params = {'token': token}    // 如果要求携带在参数中
      config.headers['jwt'] = store.getters.token   //请求头中携带saToken
    }
    return config
  },
  error => {
    // do something with request error
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 设置cross跨域 并设置访问权限 允许跨域携带cookie信息,使用JWT可关闭
service.defaults.withCredentials = false

/**
 *@description: 响应拦截器,处理所有响应头
 *@author: lw
 *@date: 2021-04-30 09:06:24
 *@version: V1.0.0
*/
service.interceptors.response.use(
  // 接收到响应数据并成功后的一些共有的处理，关闭loading等
  response => {
    const res = response.data
    // 如果自定义代码不是200，则将其判断为错误。529为帖子未设置标签 不判定为error
    if (res.code !== 200 && res.code !== 5210) {
      // 401--Unauthorized  , 403--Forbidden 跳转至登录页面
      if (res.code === 401 || res.code === 403) {
        // 重新登录
        MessageBox.confirm('会话失效，您可以留在当前页面，或重新登录', '权限不足', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          window.location.href = '#/login'
        })
      }
      // 514--密码错误
      else if (res.code === 514) {
        //修改密码 旧密码错误
        Message({
          showClose: true,
          message: '密码错误，请重试',
          type: 'error',
          duration: 2 * 1000
        })
      } 
      else { // 其他异常直接提示
        Message({
          showClose: true,
          message: '⚠' + res.message || 'Error',
          type: 'error',
          duration: 3 * 1000
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      //调试获取响应头token
      return response
    }
  },
  error => {
    /** *** 接收到异常响应的处理开始 *****/
    // console.log('err' + error) // for debug
    Message({
      showClose: true,
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service