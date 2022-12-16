import Mock from 'mockjs'

import homeapi from '@/api/mockServeData/home'
import user from '@/api/mockServeData/user'
// 定义mock请求拦截
/* Mock.mock('/api/home/getData', function () {
  // 拦截到请求后的处理逻辑
  console.log('拦截到了')
  return 1
}) */


Mock.mock('/api/home/getData', homeapi.getStatisticalData)


// 用户列表的数据
Mock.mock('/api/user/add', 'post', user.createUser)
Mock.mock('/api/user/edit', 'post', user.updateUser)
Mock.mock('/api/user/del', 'post', user.deleteUser)

// Mock.mock('/api/user/getUser', 'get', user.getUserList)
Mock.mock(/api\/user\/getUser/, 'get', user.getUserList)