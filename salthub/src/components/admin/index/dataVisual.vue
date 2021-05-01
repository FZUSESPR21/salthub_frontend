<template>
    <el-card class="box-card">
      <div :class="'title'">
        <i class="el-icon-data-line"></i>
        数据可视化
        <v-echarts></v-echarts>
      </div>
      <div :class="'wrap'"></div>
    </el-card>
</template>

<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 900px;
  height: auto;
  margin: 0 30px;
}
</style>

<script>
import echarts from '@/components/admin/index/echarts'
import axios from "axios";
export default {
  components: {
    "v-echarts": echarts,
  },
  data() {
    return {
    }
  }
};
</script>