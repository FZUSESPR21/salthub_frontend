<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>发帖</span>

    </div>
    <!--判定是否有token，有则判断登陆成功允许发布帖子-->
    <!--
    <div v-if="token != null && token !== ''" class="has-text-centered">
      <el-button type="primary" plain tag="router-link" :to="{path:'/'}" outlined>✍ 发表想法</el-button>
    </div>
    !-->
    <!--否则显示登陆注册-->
    <!--<div v-else class="has-text-centered">-->
      <el-button type="primary" plain tag="router-link" :to="{path:'/'}" outlined>马上入驻</el-button>
      <el-button type="warning" plain tag="router-link" :to="{path:'/'}" outlined class="ml-2"> 论坛登录</el-button>
    <!--</div>-->
  </el-card>
</template>

<style scoped>
  .el-card{
    margin-bottom: 16px;
  }
</style>

<script>

export default {
  name: 'LoginWelcome',
  data() {
    return {}
  },
}
</script>

<style scoped>
</style>