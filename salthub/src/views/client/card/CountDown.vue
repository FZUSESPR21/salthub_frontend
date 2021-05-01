<!-- 
 * @description: 晒研论坛-侧边栏-倒计时
 * @fileName: CountDown.vue 
 * @author: 肖寒 
 * @date: 2021-04-29 23:04:19 
 * @后台人员:  
 * @path:  
 * @version: V1.0.0 
!-->
<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>⏲ 考研倒计时</span>
    </div>
    <div>
      <div class="has-text-centered block" >
        <span class="is-size-1 " >{{ time }}</span>
      </div>
    </div>
  </el-card>
</template>

<style scoped>
  .el-card{
    margin-bottom: 16px;
  }
</style>


<script>

export default {
  name: 'CountDown',
  data() {
    return {
      time: " ",
    }
  },
  created() {
    //根据国家考试院公布考研时间修改newDate数据即可更新正确的倒计时
    this.time = this.fetchCountDown(Date.now(), (new Date(2021, 11, 25)).getTime())
  },
  methods: {
    fetchCountDown(time1, time2) {
      var offsetTime = Math.abs(time1 - time2);
      return Math.floor(offsetTime / (3600 * 24 * 1e3));
    },
  }
}
</script>

<style scoped>

</style>