import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/account/login/1',
        method: 'post',
        data
    })
}

export function getUserInfo() {

}

export function logout() {

}

export function hello() {
    return request({
        url: '/hello',
        method: 'get',
    })
}