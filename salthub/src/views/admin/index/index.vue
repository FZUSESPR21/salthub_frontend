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
    "v-card":indexCard
  },
};
</script>