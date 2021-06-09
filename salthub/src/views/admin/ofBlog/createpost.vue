<!--
 * @description:
 * @fileName: createpost.vue
 * @author: 庄威龙
 * @date: 2021-06-08 19:46:22
 * @后台人员:
 * @path:
 * @version: V1.0.5
!-->
<template>
  <div>
    <v-table></v-table>
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
import table from "@/components/admin/ofBlog/createpost";
export default {
  components: {
    "v-table": table,
  },
};
</script>
