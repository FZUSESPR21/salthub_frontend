const uToken = 'u_token'

// 获取Token
export function getToken() {
    // return Cookies.get(uToken);
    // return localStorage.getItem('jwt')
    return myLocalStorage.get('jwt')
}

// 设置Token，1天,与后端同步
export function setToken(token) {
    // return Cookies.set(uToken, token, {expires: 1})
    // localStorage.setItem('jwt', token)
    var date = new Date().getTime()
    myLocalStorage.set('jwt', token, date + 24 * 3600 * 1000) //设置1天的过期时间 单位ms
}

// 删除Token
export function removeToken() {
    // return Cookies.remove(uToken)
    localStorage.removeItem('jwt')
}

//设置user进sessionStorage
export function setUser(user) {
    console.log(user)
    sessionStorage.setItem('user', JSON.stringify(user))
}

//从sessionStorage获取user
export function getUser() {
    // console.log(JSON.stringify(sessionStorage.getItem('user')))
    return sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null
}

const myLocalStorage = {
    set: function (key, value, ttl_ms) {
        var data = { value: value, expirse: new Date(ttl_ms).getTime() };
        localStorage.setItem(key, JSON.stringify(data));
    },
    get: function (key) {

        var data = "";
        if (typeof localStorage.getItem(key) == 'string') {
            try {
                data = JSON.parse(localStorage.getItem(key));
                // console.log('转换成功：' + data);
            } catch (e) {
                // console.log('error：' + localStorage.getItem(key) + '!!!' + e);
                data = localStorage.getItem(key);
            }
        }
        // var data = JSON.parse(localStorage.getItem(key));
        if (data !== null) {
            if (data.expirse != null && data.expirse < new Date().getTime()) {
                localStorage.removeItem(key);
            } else {
                return data.value;
            }
        }
        return null;
    }
}