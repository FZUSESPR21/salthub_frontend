<!-- 
 * @description: 可复用的前台页眉
 * @fileName: Header.vue 
 * @author: 肖寒 
 * @date: 2021-05-01 17:05:44 
 * @后台人员:  
 * @path:  
 * @version: V1.0.0
!-->
<template>
  <header class="header has-background-white has-text-black">
    <b-navbar
      class="container is-white"
      :fixed-top="true"
    >

      <template slot="start">

        <div class="imglogo" v-for="fit in fits" :key="fit">
          <el-image
            style="width: 150px; height: 40px"
            class="mt-2"
            :src="logoImg"
            :fit="fit"></el-image>
        </div>

        <b-navbar-item
          tag="router-link"
          :to="{ path: '/home' }"
          class="px-5"
        >
           首页
        </b-navbar-item>

        <b-navbar-item
          tag="router-link"
          :to="{ path: '/community' }"
          class="px-5"
        >
           社区
        </b-navbar-item>

        <b-navbar-item
          tag="router-link"
          :to="{ path: '/home' }"
          class="px-5"
        >
           资讯
        </b-navbar-item>

        <b-navbar-item
          tag="router-link"
          :to="{ path: '/home' }"
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
              placeholder="搜索帖子、标签"
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

        <b-navbar-item tag="not">
            <el-button type="info" icon="el-icon-message" circle></el-button>
        </b-navbar-item>
        <!--判定是否有token,无则显示登陆注册-->
        <!--暂时没有获取token,浏览器会有warning-->
        <b-navbar-item
          v-if="token == null || token === ''"
          tag="div"
        >
          <div class="buttons">
            <b-button
              class="is-light"
              @click="toRegister()">
              注册
            </b-button>
            <b-button
              class="is-light"
              @click="toLogin()">
              登录
            </b-button>
          </div>
        </b-navbar-item>
        <!--有则显示个人中心-->
        <b-navbar-dropdown
          v-else
          :label="user.alias"
        >
          <b-navbar-item>
            个人中心
          </b-navbar-item>
          <hr class="dropdown-divider">
          <b-navbar-item>
            退出登录
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      logoImg: require('@/assets/ForumLogo.png'),
      fits: ['cover'],
      searchKey: '',
    }
  },
  computed: {

  },
  created() {

  },
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
    search(){
      if (this.searchKey.trim() === null || this.searchKey.trim() === '') {
        this.$message.info({
          showClose: true,
          message: '请输入关键字搜索！',
          type: 'warning'
        })
        return false
      }
      this.$router.push({ path: '/Search?key=' + this.searchKey })
    }
  },
}
</script>

<style scoped>
input {
  width: 80%;
  height: 86%;
}

</style>
