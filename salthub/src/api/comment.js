import request from '@/utils/request'

/**
 *@functionName: fetchCommentsByTopicId
 *@param: data 获取文章详情
 *@description:
 *@author: 庄威龙
 *@date: 2021-05-4 11:08
 *@version: V1.0.0
*/
export function fetchCommentsByTopicId(topic_Id) {
  return request({
    url: '/comment/get_comments',
    method: 'get',
    params: {
      topicid: topic_Id
    }
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

