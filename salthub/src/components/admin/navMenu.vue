<template style="height:100%">
  <el-col :span="2" :class="'nav'">
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
      <el-menu-item index="1" @click="jumpIndex()">
        <i class="el-icon-s-home"></i>
        <span>后台首页</span>
      </el-menu-item>
      <el-menu-item index="2" @click="jumpBlog()">
        <i class="el-icon-menu"></i>
        <span slot="title">文章管理</span>
      </el-menu-item>
      <el-menu-item index="3" @click="jumpAccount()">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="4" @click="jumpNotice()">
        <i class="el-icon-message-solid"></i>
        <span slot="title">通知管理</span>
      </el-menu-item>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>官方文章</span>
        </template>
        <el-menu-item :class="'active-item'" index="5-1"  @click="jumpOfBlog()">官方文章管理</el-menu-item>
        <el-menu-item :class="'active-item'" index="5-2">发布官方文章</el-menu-item>
      </el-submenu>
      <!-- <el-menu-item index="5" @click="jumpOfBlog()">
        <i class="el-icon-document"></i>
        <span slot="title">官方文章</span>
      </el-menu-item> -->
    </el-menu>
  </el-col>
</template>

<style scoped>
.nav {
  height: 100%;
}
.active-item{
  width:156px;
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
      this.activeIndex = "4";
      this.$router.push("/admin/notice");
    },
    jumpOfBlog() {
      this.activeIndex = "5";
      this.$router.push("/admin/ofBlog");
    },
    jumpBlog() {
      this.activeIndex = "2";
      this.$router.push("/admin/blog");
    },
  },
};
</script>