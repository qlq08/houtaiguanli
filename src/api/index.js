import http from '@/utils/request'

// 定义请求首页数据的接口
export const getData = () => {
  return http.get('/home/getData')
}