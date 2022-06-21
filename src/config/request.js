import Taro from '@tarojs/taro'
import { HTTP_TOKEN_INVALID, HTTP_NOT_TOKEN } from '../constants/const'

let HttpRequest = (method, url, data = {}, config) => {
  let header = { "Content-Type": config.formdata ? "application/x-www-form-urlencoded" : "application/json" }
  // token
  if (Taro.getStorageSync('token')) header.token = Taro.getStorageSync('token')
  return new Promise((resolve, reject) => {
    Taro.request({
      url,
      data,
      header,
      // timeout: '2000',
      method,
      success(res){
        // 响应拦截处理写在这里
        const code = res.data.code || ''
        if(!res.data.msg) res.data.msg = '服务器开小差了～'
        if([HTTP_TOKEN_INVALID, HTTP_NOT_TOKEN].includes(code)){
          Taro.showModal({
            title:'提示',
            content:'请进行登录。',
            success:(res)=>{
              if(res.confirm){
                Taro.clearStorageSync()
                Taro.reLaunch({ url: '/pages/login/index' })
                return
              }
            }
          })
        }else{
          return resolve(res)
        }
      },
      fail(error){
        Model('服务器错误，请稍候再试 ！')
        return reject(error)
      },
      complete(res){ // 接口调用结束的回调函数（调用成功、失败都会执行）

      }
    })
  })
}
let get = (api, params = {}, config = {}) => {
  return HttpRequest('GET', api, params, config)
}

let post = (api, params = {}, config = {}) => {
  return HttpRequest('POST', api, params, config)
}

let Toast = (msg) => {
  Taro.showToast({
    title: msg,
    duration: 3000,
    icon: 'none',
    mask:true
  })
}
let Model = (msg) => {
  Taro.showModal({
    title: '提示',
    content: msg,
    showCancel: false
  })
}