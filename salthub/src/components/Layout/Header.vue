<!-- 
 * @description: 可复用的前台页眉
 * @fileName: Header.vue 
 * @author: 肖寒 
 * @date: 2021-05-03 00:28:10
 * @后台人员:  
 * @path:  
 * @version: V1.0.2
!-->
<template>
  <header class="header has-background-white has-text-black">
    <b-navbar class="is-white" :fixed-top="true">
      <template slot="brand">
        <div class="imglogo" v-for="fit in fits" :key="fit">
          <el-image
            style="width: 150px; height: 40px"
            class="mt-2"
            :src="logoImg"
            :fit="fit"
          ></el-image>
        </div>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/home' }" class="px-5">
          首页
        </b-navbar-item>

        <b-navbar-item
          tag="router-link"
          :to="{ path: '/community' }"
          class="px-5"
        >
          社区
        </b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/news' }" class="px-5">
          资讯
        </b-navbar-item>

        <b-navbar-item
          tag="router-link"
          :to="{ path: '/treeHollow' }"
          class="px-5"
        >
          树洞
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <b-field position="is-centered">
            <el-input
              v-model="searchKey"
              class="s_input mx-5"
              placeholder="搜索帖子"
              rounded
              clearable
              @keyup.enter.native="search()"
            ></el-input>

            <p class="control">
              <el-button
                type="primary"
                size="medium"
                round
                icon="el-icon-search"
                @click="search()"
                >搜索
              </el-button>
            </p>
          </b-field>
        </b-navbar-item>

        <b-navbar-item tag="div" class="mx-5" @click="toMessage()">
          <el-button type="info" icon="el-icon-message" circle></el-button>
        </b-navbar-item>

        <b-navbar-item v-if="token == null || token === ''"> </b-navbar-item>

        <b-navbar-item @click="toInfo()" class="mr-5" v-else>
          <img :src="imgUrl" class="avatar" />
        </b-navbar-item>

        <b-navbar-item v-if="token == null || token === ''" tag="div">
          <div class="buttons">
            <b-button class="is-light" @click="toRegister()"> 注册 </b-button>
            <b-button class="is-light" @click="toLogin()"> 登录 </b-button>
          </div>
        </b-navbar-item>

        <b-navbar-dropdown v-else class="nav-d">
          <b-navbar-item @click="toInfo()"> 个人中心 </b-navbar-item>
          <hr class="dropdown-divider" />
          <b-navbar-item tag="a" @click="logout"> 退出登录 </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import "buefy/dist/buefy.css";
import { url } from "@/utils/interface.js";
import store from "@/store";
export default {
  name: "Header",
  data() {
    return {
      logoImg: require("@/assets/ForumLogo.png"),
      fits: ["cover"],
      searchKey: "",
      imgUrl:
        store.getters.user == null
          ? "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          : url + store.getters.user.avatar,
    };
  },
  computed: {
    ...mapGetters(["token", "user"]),
  },
  // created() {
  //   //有token时候加上头像地址
  //   if (this.token !== null || this.token != "") {
  //     this.Url = "http://47.100.89.20" + store.getters.user.avatar;
  //   }
  //   // console.log(store.getters.user)
  //   // console.log(JSON.parse(sessionStorage.getItem('user')))
  // },
  methods: {
    /**
     *@functionName:    toRegister
     *@description: 跳转注册页面
     *@author: lw
     *@date: 2021-05-01 14:59:52
     *@version: V1.0.0
     */
    toRegister() {
      this.$router.push({ path: this.redirect || "/register" });
    },
    /**
     *@functionName:    toLogin
     *@description: 跳转登录页面
     *@author: xiaohan
     *@date: 2021-05-01 17:00:03
     *@version: V1.0.0
     */
    toLogin() {
      this.$router.push({ path: this.redirect || "/login" });
    },
    /**
     *@functionName:    search
     *@description: 搜索
     *@author: xiaohan
     *@date: 2021-05-03 00:25:49
     *@version: V1.0.0
     */
    search() {
      if (this.searchKey.trim() === null || this.searchKey.trim() === "") {
        this.$message({
          message: "请输入关键字搜索",
          type: "error",
        });
        return false;
      }
      this.$router.push({ path: "/Search?key=" + this.searchKey });
    },
    /**
     *@functionName: logout
     *@description: 退出登录
     *@author: xiaohan
     *@date: 2021-05-03 00:28:03
     *@version: V1.0.0
     */
    logout() {
      this.$store.dispatch("user/logout").then(() => {
        this.$message.info("退出登录成功");
        setTimeout(() => {
          this.$router.push({ path: this.redirect || "/home" });
        }, 500);
      });
    },
    /**
     *@functionName: toInfo
     *@description: 跳转个人中心
     *@author: NoMornings
     *@date: 2021-05-07 14:09:03
     *@version: V1.0.0
     */
    toInfo() {
      this.$router.push({ path: this.redirect || "/info" });
    },
    /**
     *@functionName: toMessage
     *@description: 跳转通知中心
     *@author: hannah
     *@date: 2021-06-07 14:43:03
     *@version: V1.0.0
     */
    toMessage() {
      this.$router.push({ path: this.redirect || "/message" });
    },
  },
};
</script>

<style scoped>
input {
  width: 80%;
  height: 86%;
}
.nav-d {
  margin-right: 15%;
}
.avatar {
  width: 25px;
  height: 25px;
  border-radius: 15px;
}
</style>
