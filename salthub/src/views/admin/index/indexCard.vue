<!-- 
 * @description: 晒研论坛-后台首页-数据统计、公告栏、数据可视化子组件
 * @fileName: indexCard.vue 
 * @author: NoMornings 
 * @date: 2021-04-28 12:13:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.1 
!-->
<template>
  <div :class="'wrap'">
    <div :class="'row'">
      <v-data></v-data>
      <v-notice-card></v-notice-card>
    </div>
    <div :class="'row'">
      <v-data-visual></v-data-visual>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: center;
}
</style>

<script>
//后台数据统计卡片
import data from "@/components/admin/index/data";
//后台公告栏卡片
import noticeCard from "@/components/admin/index/noticeCard";
//后台数据可视化卡片
import dataVisual from "@/components/admin/index/dataVisual";
export default {
  components: {
    "v-data": data,
    "v-notice-card": noticeCard,
    "v-data-visual": dataVisual,
  },
};
</script>