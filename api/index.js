import { $http } from "../utils/request";

// 定义公共请求路径
$http.baseUrl = 'http://zhi.zeng.pub/food/api'

// 定义请求拦截器
$http.beforeRequest = function(options) {
  // 判断有无token
  // options.header.token = token
}

// 定义响应拦截器
$http.afterRequest = function(options) {
  // 做请求之后的事件
}

export default $http 

