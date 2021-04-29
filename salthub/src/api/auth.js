import request from '@/utils/request'

/**
 * 登录 
 * @author lw
 * @param {*} data 登录表单 
 * @returns 
 */
export function login(data) {
    return request({
        url: `/account/login/${data.status}`,   //data.status 是否记住密码 参数
        method: 'post',
        data
    })
}

/**
 * 注册 
 * @author lw
 * @param {*} data 注册表单 
 * @returns 
 */
export function register(data) {
    return request({
        url: '/account/register',
        method: 'post',
        data
    })
}

/**
 * 登出 
 * @author lw
 * @param {*} data 账号
 * @returns 
 */
export function logout(data) {
    return request({
        url: '/account/logout',
        method: 'get',
        data
    })
}

/**
 * 获取邮箱验证码
 * @author lw
 * @param {*} data 邮箱地址 
 * @returns 
 */
export function getMailCode(data) {
    return request({
        url: '/account/code',
        method: 'get',
        data
    })
}

/**
 * 上传头像 
 * @author lw
 * @param {*} data 上传头像参数 
 * @returns 
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