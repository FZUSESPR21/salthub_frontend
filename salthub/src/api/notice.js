import request from '@/utils/request'

/**
 *@functionName: getNotice
 *@params1: 参数1
 *@description: 根据用户名获取公告内容
 *@author: lw
 *@date: 2021-05-05 21:05:25
 *@version: V1.0.0
*/
export function getNotice(params) {
    return request({
        url: '/notice',
        method: 'get',
        params
    })
}

/**
 *@functionName: postNotice
 *@params1: data
 *@description: 发表公告
 *@author: lw
 *@date: 2021-05-05 21:12:48
 *@version: V1.0.0
*/
export function postNotice(data) {
    return request({
        url: '/notice',
        method: 'post',
        data
    })
}

/**
 *@functionName: updateNotice
 *@params1: data
 *@description: 更新公告
 *@author: lw
 *@date: 2021-05-05 21:13:34
 *@version: V1.0.0
*/
export function updateNotice(data) {
    return request({
        url: '/notice',
        method: 'put',
        data
    })
}

/**
 *@functionName: deleteNotice
 *@params1: params
 *@description: 删除公告
 *@author: lw
 *@date: 2021-05-05 21:14:41
 *@version: V1.0.0
*/
export function deleteNotice(params) {
    return request({
        url: '/notice',
        method: 'delete',
        params
    })
}