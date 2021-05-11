import request from '@/utils/request'

/**
 *@functionName: getAccount
 *@param: data 当前页码
 *@description: 管理员获取用户列表
 *@author: NoMornings
 *@date: 2021-05-07 01:51:41
 *@version: V1.0.0
*/
export function getAccount(params) {
  return request({
    url: '/admin/all',
    method: 'get',
    params
  })
}

/**
 *@functionName: putInfo
 *@param: data 个人账号信息
 *@description: 修改个人账号信息
 *@author: NoMornings
 *@date: 2021-05-07 14:36:02
 *@version: V1.0.0
*/
export function putInfo(data) {
  return request({
    url: '/account',
    method: 'put',
    data
  })
}

/**
 *@functionName: banAccount
 *@param: data 用户名
 *@description: 封禁用户
 *@author: NoMornings
 *@date: 2021-05-08 01:01:21
 *@version: V1.0.0
*/
export function banAccount(params) {
  return request({
    url: '/ban/account',
    method: 'put',
    params
  })
}

/**
 *@functionName: unbanAccount
 *@param: data 用户名
 *@description: 解封用户
 *@author: NoMornings
 *@date: 2021-05-08 01:30:08
 *@version: V1.0.0
*/
export function unbanAccount(params) {
  return request({
    url: '/ban/account',
    method: 'delete',
    params
  })
}

/**
 *@functionName: countAccount
 *@param: 
 *@description: 获取用户个数
 *@author: NoMornings
 *@date: 2021-05-11 23:24:22
 *@version: V1.0.0
*/
export function countAccount() {
  return request({
    url: '/admin/count',
    method: 'get',
  })
}