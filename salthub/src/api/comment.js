import request from '@/utils/request'

/**
 *@functionName: getFirstComments
 *@param: id:博客id flag:0
 *@description: 获取一级评论
 *@author: 庄威龙
 *@date: 2021-05-7 11:08
 *@version: V1.0.1
*/
export function getFirstComments(params) {
  return request({
    url: '/comment/2',
    method: 'get',
    params
  })
}

/**
 *@functionName: pushComment
 *@param:
 *@description: 发布一级评论
 *@author: 庄威龙
 *@date: 2021-05-7 15:46
 *@version: V1.0.0
*/
export function pushComment(data) {
  return request({
    url: '/comment/0',
    method: 'post',
    data
  })
}

/**
 *@functionName: pushSecondComment
 *@param:
 *@description: 发布二级评论
 *@author: 庄威龙
 *@date: 2021-05-8 21:05
 *@version: V1.0.0
*/
export function pushSecondComment(data) {
  return request({
    url: '/comment/1',
    method: 'post',
    data
  })
}



/**
 *@functionName: getSecondComments
 *@param: id:一级评论id flag:1
 *@description: 获取二级评论
 *@author: 庄威龙
 *@date: 2021-06-13 11:08
 *@version: V1.0.1
*/
export function getSecondComments(params) {
  return request({
    url: '/comment/2',
    method: 'get',
    params
  })
}


