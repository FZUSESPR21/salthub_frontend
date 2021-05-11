<!-- 
 * @description: 晒研论坛-后台-通用组件-头像
 * @fileName: avatar.vue 
 * @author: NoMornings 
 * @date: 2021-04-28 12:13:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.1 
!-->
<template>
  <div class="demo-type">
    <div :class="'v-avatar'">
      <el-avatar :src="url" @click.native="toInfo()"></el-avatar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-avatar {
  cursor: pointer;
}
</style>

<script>
import store from "@/store";

export default {
  data() {
    return {
      url: "https://47.100.89.20" + store.getters.user.avatar,
    };
  },
  methods: {
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
  },
};
</script>
