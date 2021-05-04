import request from '@/utils/request'

/**
 *@functionName: login 
 *@param:  data 登录表单
 *@description:
 *@author: lw 
 *@date: 2021-04-30 08:22:39
 *@version: V1.0.0
*/
export function login(data) {
    return request({
        url: `/account/login/${data.status}`,   //data.status 是否记住密码 参数
        method: 'post',
        data
    })
}

/**
 *@functionName: register 
 *@param data 注册表单 
 *@description:
 *@author: lw
 *@date: 2021-04-30 08:26:17
 *@version: V1.0.0
*/
export function register(code, data) {
    return request({
        url: '/account/register',
        method: 'post',
        params:code,
        data
    })
}

/**
 *@functionName: logout 
 * @param data 账号
 *@description:
 *@author: lw
 *@date: 2021-04-30 08:27:57
 *@version: V1.0.0
*/
export function logout() {
    return request({
        url: '/account/logout',
        method: 'get',
    })
}

/**
 *@functionName: getEmailStatus 
 *@params1: 获取当前邮箱是否注册状态
 *@description:
 *@author: lw
 *@date: 2021-05-03 19:57:09
 *@version: V1.0.0
*/
export function getEmailStatus(params) {
    return request({
        url: '/account/email',
        method: 'get',
        params
    })
}

/**
 *@functionName: getMailCode 
 *@param data 邮箱地址 
 *@description:
 *@author: lw
 *@date: 2021-04-30 08:28:36
 *@version: V1.0.0
*/
export function getMailCode(params) {
    return request({
        url: '/account/code',
        method: 'get',
        params
    })
}

/**
 *@functionName: uploadAvatar 
 *@param data 上传头像参数 
 *@description:
 *@author: lw
 *@date: 2021-04-30 08:29:14
 *@version: V1.0.0
*/
export function uploadAvatar(data) {
    return request({
        url: '/account/avatar',
        method: 'put',
        data
    })
}

/**
 * 测试接口
 * @author lw
 * @returns 
 */
export function hello() {
    return request({
        url: '/hello',
        method: 'get',
    })
}