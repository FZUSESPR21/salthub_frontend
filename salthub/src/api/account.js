import request from '@/utils/request'

/**
 *@functionName: getAccount
 *@param: data 当前页码
 *@description:
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
 *@description:
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
 *@description:
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
 *@description:
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