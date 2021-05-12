<!-- 
 * @description: 晒研论坛-后台-通用组件-侧边栏
 * @fileName: navMenu.vue 
 * @author: NoMornings 
 * @date: 2021-04-28 12:13:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.1 
!-->
<template style="height:100%">
  <el-col :span="3" :class="'nav'">
    <el-menu
      :class="'nav'"
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- 后台首页 -->
      <el-menu-item index="1" @click="jumpIndex()">
        <i class="el-icon-s-home"></i>
        <span>后台首页</span>
      </el-menu-item>
      <!-- 文章管理 -->
      <el-menu-item index="2" @click="jumpBlog()">
        <i class="el-icon-menu"></i>
        <span slot="title">文章管理</span>
      </el-menu-item>
      <!-- 用户管理 -->
      <el-menu-item index="3" @click="jumpAccount()">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <!-- 通知管理 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-message-solid"></i>
          <span>通知管理</span>
        </template>
        <el-menu-item :class="'active-item'" index="4-1" @click="jumpNotice()"
          >通知管理</el-menu-item
        >
        <el-menu-item
          :class="'active-item'"
          index="4-2"
          @click="jumpCreateNotice()"
          >发布通知</el-menu-item
        >
      </el-submenu>
      <!-- 官方文章 -->
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>官方文章</span>
        </template>
        <el-menu-item :class="'active-item'" index="5-1" @click="jumpOfBlog()"
          >官方文章管理</el-menu-item
        >
        <el-menu-item
          :class="'active-item'"
          index="5-2"
          @click="jumpCreateBlog()"
          >发布官方文章</el-menu-item
        >
      </el-submenu>
    </el-menu>
  </el-col>
</template>

<style scoped>
.nav {
  height: 100%;
}
.el-submenu .el-menu-item {
  min-width: 0;
}
</style>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    jumpIndex() {
      this.activeIndex = "1";
      this.$router.push("/admin");
    },
    jumpAccount() {
      this.activeIndex = "3";
      this.$router.push("/admin/account");
    },
    jumpNotice() {
      this.activeIndex = "4-1";
      this.$router.push("/admin/notice");
    },
    jumpCreateNotice() {
      this.activeIndex = "4-2";
      this.$router.push("/admin/createnotice");
    },
    jumpOfBlog() {
      this.activeIndex = "5-1";
      this.$router.push("/admin/ofBlog");
    },
    jumpBlog() {
      this.activeIndex = "2";
      this.$router.push("/admin/blog");
    },
    jumpCreateBlog() {
      this.activeIndex = "5-2";
      this.$router.push("/admin/createpost");
    },
    getWidth() {},
  },
};
</script>
