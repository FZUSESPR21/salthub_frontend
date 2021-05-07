import request from '@/utils/request'

/**
 *@functionName: fetchCommentsByTopicId
 *@param: topic_id 博客id
 *@description: 获取一级评论
 *@author: 庄威龙
 *@date: 2021-05-4 11:08
 *@version: V1.0.0
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
 *@param: data 发布评论
 *@description:
 *@author: 庄威龙
 *@date: 2021-05-4 11:10
 *@version: V1.0.0
*/
export function pushComment(data) {
  return request({
    url: '/comment/add_comment',
    method: 'post',
    data: data
  })
}

