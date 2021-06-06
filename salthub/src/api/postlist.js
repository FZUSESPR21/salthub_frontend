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
    method: 'post',
    params: { current: pageNo, tagId: tag }
  }))
}

/*
 *@functionName: getCollectList
 *@params1: pageNo 当前页码
 *@description:获取收藏文章列表
 *@author: xiaohan
 *@date: 2021-05-07 18:57:19
 *@version: V1.0.0
*/
export function getCollectList(pageNo) {
  return request(({
    url: '/collection',
    method: 'get',
    params: { current: pageNo}
  }))
}

/*
 *@functionName: getSearchList
 *@params1: pageNo 当前页码 keyword:模糊查询关键字
 *@description:获取收藏文章列表
 *@author: xiaohan
 *@date: 2021-05-13 23:50:19
 *@version: V1.0.0
*/
export function getSearchList(pageNo,keyword) {
  return request(({
    url: '/blog/title',
    method: 'get',
    params: { current: pageNo, title:keyword}
  }))
}

/*
 *@functionName: getMyList
 *@params1: pageNo 当前页码
 *@description:获取我发布的文章列表
 *@author: xiaohan
 *@date: 2021-05-19 13:52:19
 *@version: V1.0.0
*/
export function getMyList(name,pageNo) {
  return request(({
    url: '/blog/account',
    method: 'post',
    params: { account:name,current: pageNo}
  }))
}