<!-- 
 * @description: 晒研论坛-后台-通用组件-导航栏
 * @fileName: header.vue 
 * @author: NoMornings 
 * @date: 2021-04-28 12:13:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.1 
!-->
<template>
  <div :class="'header'">
    <img :class="'logo'" src="@/assets/admin/logo.png" alt="logo" />
    <v-avatar :class="'avatar'"></v-avatar>
  </div>
</template>

<style scoped>
.header {
  background: #f0f0f0;
  width: 100%;
  height: 65px;
}
.logo {
  display: inline-block;
  width: 169px;
  height: 53px;
}
.avatar {
  display: inline-block;
  float: right;
  margin: 10px 10px 0 0;
}
</style>

<script>
//头像
import avatar from "@/components/admin/avatar";
export default {
  methods: {
    goBack() {
      console.log("go back");
    },
  },
  components: {
    //头像
    "v-avatar": avatar,
  },
};
</script>