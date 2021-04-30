<template>
  <el-card class="box-card">
    <div :class="'title'">
      <i class="el-icon-s-marketing"></i>
      数据统计
    </div>
    <div :class="'wrap'">
      <div :class="'rowcard'">
        <div :class="'item'"></div>
        <div :class="'item'"></div>
      </div>
      <div :class="'rowcard'">
        <div :class="'item'"></div>
        <div :class="'item'"></div>
      </div>
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
  width: 595px;
  height: auto;
  margin: 30px 15px;
}

.title {
  margin: 18px;
}
.wrap {
}
.rowcard {
  display: flex;
  justify-content: center;
}
.item {
  margin: 5px 10px;
  border-radius: 3px;
  background: #dddddd;
  width: 240px;
  height: 60px;
  display: inline-block;
}
</style>