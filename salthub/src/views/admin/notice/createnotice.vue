<!--
 * @description:
 * @fileName: createnotice.vue
 * @author: 庄威龙
 * @date: 2021-06-08 19:46:35
 * @后台人员:
 * @path:
 * @version: V1.0.5
!-->
<template>
  <div>
    <v-createnotice></v-createnotice>
  </div>
</template>

<style scoped>
p{
  font-size: 24px;
  margin: 10px 20px;
  display: inline-block;
  font-weight: bold;
}
</style>

<script>
import createnotice from "@/components/admin/notice/createnotice";
export default {
  components: {
    "v-createnotice": createnotice,
  },
};
</script>
