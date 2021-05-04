import request from '@/utils/request'

/**
 *@functionName: postBlog
 *@param: data 发表文章表单
 *@description:
 *@author: lw
 *@date: 2021-04-30 08:42:41
 *@version: V1.0.0
*/
export function postBlog(data) {
  return request({
    url: '/blog',
    method: 'post',
    data
  })
}

/**
 *@functionName: delBlog
 *@param: data 删除文章信息
 *@description:
 *@author: lw
 *@date: 2021-04-30 08:45:28
 *@version: V1.0.0
*/
export function delBlog(data) {
  return request({
    url: '/blog',
    method: 'delete',
    data
  })
}


/**
 *@functionName: putBlog 
 *@param: data 修改文章信息
 *@description:
 *@author: lw
 *@date: 2021-04-30 08:45:28
 *@version: V1.0.0
*/
export function putBlog(data) {
  return request({
    url: '/blog',
    method: 'put',
    data
  })
}


/**
 *@functionName: jsfn
 *@param: data 博客id
 *@description:
 *@author: lw
 *@date: 2021-04-30 08:53:40
 *@version: V1.0.0
*/
export function getBlog(data) {
  return request({
    url: '/blog',
    method: 'get',
    data
  })
}

export function getBlogByAccount(params) {
  return request({
    url: '/blog/account',
    method: 'post',
    params
  })
}