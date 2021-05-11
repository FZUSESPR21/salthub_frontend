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
    <v-header></v-header>
    <v-nav></v-nav>
    <router-view :class="'router'"></router-view>
  </div>
</template>

<style scoped>
.layout {
  height: 100%;
}
.router {
  margin: 20px;
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
};
</script>