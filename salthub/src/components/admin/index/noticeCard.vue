<template>
  <el-card class="box-card">
    <div :class="'title'">
      <i class="el-icon-bell"></i>
      公告栏
    </div>
    <div :class="'wrap'">
      <p>用户数突破1000！！！</p>
      <div :class="'divider'"></div>
      <p>文章数突破400！！！</p>
      <div :class="'divider'"></div>
      <p>晒研网站正式上线啦~</p>
      <div :class="'divider'"></div>
    </div>
  </el-card>
</template>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 275px;
  height: auto;
  margin: 30px 15px;
}
.wrap {
  margin-top: 20px;
}
.divider {
  width: 100%;
  height: 1px;
  background: #dcdfe6;
  margin: 5px 0;
}
</style>