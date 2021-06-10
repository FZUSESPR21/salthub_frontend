<!-- 
 * @description: 晒研论坛-侧边栏-发帖
 * @fileName: LoginWelcome.vue 
 * @author: 肖寒 
 * @date: 2021-05-01 17:09:29 
 * @后台人员:  
 * @path:  
 * @version: V1.0.1 
!-->
<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>发帖</span>

    </div>
    <div v-if="token != null && token !== ''" class="has-text-centered">
      <el-button type="primary" plain @click="toUserCreatePost()" outlined>✍ 发表想法</el-button>
    </div>
    <div v-else class="has-text-centered">
      <el-button type="warning" plain @click="toLogin()" outlined> 论坛登录</el-button>
    </div>
  </el-card>
</template>

<style scoped>
  .el-card{
    margin-bottom: 16px;
  }
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LoginWelcome',
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  data() {
    return {}
  },
  methods:{
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
     *@functionName:    toUserCreatePost 
     *@description: 跳转发布文章界面
     *@author: xaiohan
     *@date: 2021-05-01 17:04:25
     *@version: V1.0.0
    */
    toUserCreatePost() {
      this.$router.push({ path: this.redirect || "/UserCreatePost" });
    },
  }
}
</script>

<style scoped>
</style>