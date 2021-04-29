import request from '@/utils/request'

export function login(data) {
    return request({
        url: `/account/login/${data.status}`,   //data.status 是否记住密码 参数
        method: 'post',
        data
    })
}

export function register(data) {
    return request({
        url: '/account/login/1',
        method: 'post',
        data
    })
}

export function logout() {

}

export function hello() {
    return request({
        url: '/hello',
        method: 'get',
    })
}