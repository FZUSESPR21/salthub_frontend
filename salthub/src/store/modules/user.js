import { login, logout } from "@/api/auth";
import { getToken, setToken, removeToken } from "@/utils/auth";

const state = {
  token: getToken(), // token
  user: "", // 用户对象
};

const mutations = {
  SET_TOKEN_STATE: (state, token) => {
    state.token = token;
  },
  SET_USER_STATE: (state, user) => {
    state.user = user;
  },
};

const actions = {
  // 用户登录
  /**
   *@functionName:  login 
   *@params1: commit对象 vuex
   *@params2: userInfo 用户信息
   *@description: 验证登录，验证成功后，token保存至vuex,localstorage
   *@author: lw
   *@date: 2021-04-30 08:56:26
   *@version: V1.0.0
  */
  login({ commit }, userInfo) {
    // console.log(userInfo);
    // const { name, pass, rememberMe } = userInfo;
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then((response) => {
        //   console.log(response)
          const token = response.headers.satoken
          // console.log(response.data)
          //测试  vuex存入user信息
          const user = response.data
        //   console.log(token)
          setToken(token);
          commit("SET_TOKEN_STATE", token);
          commit("SET_USER_STATE", );
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then((response) => {
          const { data } = response;
          if (!data) {
            commit("SET_TOKEN_STATE", "");
            commit("SET_USER_STATE", "");
            removeToken();
            resolve();
            reject("Verification failed, please Login again.");
          }
          commit("SET_USER_STATE", data);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // 注销
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then((response) => {
          console.log(response);
          commit("SET_TOKEN_STATE", "");
          commit("SET_USER_STATE", "");
          removeToken();
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};