import http from '@/utils/request'

// 定义请求首页数据的接口
export const getData = () => {
  return http.get('/home/getData')
}

// 获取列表数据
export const getUser = (params) => {
  console.log(params, 'params')
  return http.get('/user/getUser', params)
}
export const addUser = (data) => {
  return http.post('/user/add', data)
}
export const editUser = (data) => {
  return http.post('/user/edit', data)
}
export const delUser = (data) => {
  return http.post('/user/del', data)
}