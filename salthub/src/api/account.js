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