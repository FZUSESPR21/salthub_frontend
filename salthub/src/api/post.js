import request from '@/utils/request'

/*
 *@functionName: getListInCommunity
 *@params1: pageNo 当前页码
 *@params2: tab 文章所属模块
 *@description:获取首页文章列表
 *@author: xiaohan
 *@date: 2021-05-02 18:24:01
 *@version: V1.0.0
*/
export function getListInCommunity(pageNo, tab) {
  return request(({
    url: '/blog/module',
    method: 'post',
    params: { current: pageNo, moduleId: tab }
  }))
}

/*
 *@functionName: getListInCommend
 *@params1: pageNo 当前页码
 *@description:获取首页文章列表
 *@author: xiaohan
 *@date: 2021-05-04 11:21:09
 *@version: V1.0.0
*/
export function getListInCommend(params) {
  return request(({
    url: `/blog/all/${params.page}`,
    method: 'get',
    params
  }))
}

/*
 *@functionName: getListByTag
 *@params1: pageNo 当前页码
 *@params2: tag 文章所属tag
 *@description:获取tag文章列表
 *@author: xiaohan
 *@date: 2021-05-03 13:57:19
 *@version: V1.0.0
*/
export function getListByTag(pageNo, tag) {
  return request(({
    url: '/blog/tag',
    method: 'get',
    params: { current: pageNo, tagId: tag }
  }))
}