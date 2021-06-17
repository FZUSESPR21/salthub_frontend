<!-- 
 * @description: 晒研论坛-后台-通用布局（导航栏及侧边栏）
 * @fileName: layout.vue 
 * @author: NoMornings 
 * @date: 2021-04-28 12:13:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.1 
!-->
<template>
  <div :class="'layout'">
    <v-header style="height: 6.5%"></v-header>
    <v-nav style="height: 93.5%"></v-nav>
    <router-view :class="'router'"></router-view>
  </div>
</template>

<style scoped>
.layout {
  height: 100%;
  min-height: 860px;
  background-color: white;
}
.router {
  /* margin: 20px; */
  padding-top: 20px;
  height: 93.5%;
}
</style>

<script>
// 头像
import header from "@/components/admin/header";
import nav from "@/components/admin/navMenu";
export default {
  components: {
    // 后台导航栏
    "v-header": header,
    // 后台侧边栏
    "v-nav": nav,
  },
  data() {
    return {
      // 浏览器高度
      h: document.documentElement.clientHeight,
    };
  },
  // mounted() {
  //   this.height();
  //   window.onresize = this.height();
  // },
  // watch: {
  //   h: "height",
  // },
  // methods: {
  //   height() {
  //     console.log("resize");
  //     // 浏览器高度
  //     this.h =
  //       window.innerHeight ||
  //       document.documentElement.clientHeight ||
  //       document.body.clientHeight;
  //     let height = this.h - 65;
  //     return "height:" + height + "px";
  //   },
  // },
};
</script>