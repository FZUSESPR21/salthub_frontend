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
        <span class="is-size-1 " >{{ date.time }}</span>
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
      date: {
          time: "242"//暂时静态
      }
    }
  },
  created() {
    this.fetchCountDown()
  },
  methods: {
    fetchCountDown() {
        //获取倒计时的方法
    }
  }
}
</script>

<style scoped>

</style>