const uToken = 'u_token'

// 获取Token
export function getToken() {
    // return Cookies.get(uToken);
    return localStorage.getItem('jwt')
}

// 设置Token，1天,与后端同步
export function setToken(token) {
    // return Cookies.set(uToken, token, {expires: 1})
    localStorage.setItem('jwt', token)
}

// 删除Token
export function removeToken() {
    // return Cookies.remove(uToken)
    localStorage.removeItem('jwt')
}

//设置user进sessionStorage
export function setUser (user) {
    console.log(user)
    sessionStorage.setItem('user', JSON.stringify(user))
}

//从sessionStorage获取user
export function getUser () {
    // console.log(JSON.stringify(sessionStorage.getItem('user')))
    return sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')): null
}