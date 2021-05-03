import request from '@/utils/request'

/*
 *@functionName: getList
 *@params1: pageNo 当前页码
 *@params2: tab 文章所属模块
 *@description:获取首页文章列表
 *@author: xiaohan
 *@date: 2021-05-02 18:24:01
 *@version: V1.0.0
*/
export function getList(pageNo, tab) {
  return request(({
    url: '/blog/module',
    method: 'get',
    params: { current: pageNo, moduleId: tab }
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