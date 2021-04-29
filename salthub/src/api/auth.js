import request from '@/utils/request'

export function login(data) {
    const one = '1' //暂时代替url中记住密码的参数
    return request({
        // url: '/account/login/1',
        url: `/account/login/${data.status}`,
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