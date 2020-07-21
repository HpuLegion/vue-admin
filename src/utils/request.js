import axios from 'axios'
import { Message } from 'element-ui';
const BASEURL=process.env.NODE_ENV === 'production' ? '' : '/devApi';
// 创建axios，并赋值给变量
const instance=axios.create({
  baseURL: BASEURL, // http://192.168.1.3:8080/devApi/  === http://www.web-jshtml.cn/devApi/
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log('此请求响应数据----',response)
    let data= response.data
    if(data.resCode!==''){
        Message.error(data.message);
        return Promise.reject(data); // ---- 跑请求调用的 .catch()
    }else{
      return response
      //return Promise.reolve() ---- 跑请求调用的 .then()
    }
  });

export default instance