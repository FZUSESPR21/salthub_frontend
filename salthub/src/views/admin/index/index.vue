<!-- 
 * @description: 晒研论坛-后台首页
 * @fileName: index.vue 
 * @author: NoMornings 
 * @date: 2021-04-28 12:13:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.1 
!-->
<template>
  <div>
    <v-card></v-card>
  </div>
</template>

<style scoped>
.index {
  display: flex;
  justify-content: center;
}
</style>

<script>
//后台卡片组合
import indexCard from "@/views/admin/index/indexCard";
export default {
  components: {
    "v-card": indexCard,
  },
};
</script>