<!-- 
 * @description: 晒研论坛-后台首页-数据统计卡片
 * @fileName: data.vue 
 * @author: NoMornings 
 * @date: 2021-04-28 12:13:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.1 
!-->
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

<style lang="scss" scoped>
$grey: #dddddd;
.text {
  font-size: 14px;
}

.box-card {
  width: 595px;
  height: auto;
  margin: 30px 15px;
  .title {
    margin: 18px;
    font-weight: lighter;
    .el-icon-s-marketing {
      color: #409eff;
    }
  }
}

.rowcard {
  display: flex;
  justify-content: center;

  .item {
    padding: 18px 0;
    margin: 5px 10px;
    border-radius: 3px;
    background: $grey;
    width: 240px;
    height: 60px;
    display: inline-block;
  }
}
</style>