<!-- 
 * @description: 晒研论坛-侧边栏-加盐鸡汤
 * @fileName: Tip.vue 
 * @author: 肖寒 
 * @date: 2021-04-29 23:09:52 
 * @后台人员:  
 * @path:  
 * @version: V1.0.0
!-->
<template>
  <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
    <div slot="header">
      <span>加盐鸡汤</span>
    </div>
    <div>
      <el-image :src="sunImg"></el-image>
      <div class="tip-content">
        <div class="has-text-centered block">
          <span >{{ tip.content }}</span>
        </div>
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
  name: 'Tip',
  data() {
    return {
      tip: {
          content: "我努力奔跑是为了追上那个曾经被寄予厚望的自己!"//暂时静态
      },
      sunImg: require('@/assets/client/sun.jpg'),
    }
  },
  created() {
    this.fetchTodayTip()
  },
  methods: {
    fetchTodayTip() {
        //获取每日一句更新
    }
  }
}
</script>

<style scoped>
.tip-content{
  padding: 14px;
  font-size: 17px;
}

</style>