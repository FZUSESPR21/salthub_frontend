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
          :to="{ path: '/' }"
          class="px-5"
        >
           首页
        </b-navbar-item>

        <b-navbar-item
          tag="router-link"
          :to="{ path: '/' }"
          class="px-5"
        >
           社区
        </b-navbar-item>

        <b-navbar-item
          tag="router-link"
          :to="{ path: '/' }"
          class="px-5"
        >
           资讯
        </b-navbar-item>

        <b-navbar-item
          tag="router-link"
          :to="{ path: '/' }"
          class="px-5"
        >
           树洞
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <b-field position="is-centered">
            <b-input
              v-model="searchKey"
              class="s_input mx-5"
              width="80%"
              placeholder="搜索帖子、标签"
              rounded
              clearable
            />

            <p class="control">
              <b-button
                class="is-info"
              >搜索
              </b-button>
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
              class="is-light">
              注册
            </b-button>
            <b-button
              class="is-light">
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

  },
}
</script>

<style scoped>
input {
  width: 80%;
  height: 86%;
}

</style>
