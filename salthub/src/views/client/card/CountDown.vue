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