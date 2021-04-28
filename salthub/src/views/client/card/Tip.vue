<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>加盐鸡汤</span>
    </div>
    <div>
      <div class="has-text-centered block">
        <span class="is-size-6 has-text-info">{{ tip.content }}</span>
      </div>
    </div>
  </el-card>
</template>

<script>

export default {
  name: 'Tip',
  data() {
    return {
      tip: {
          content: "我努力奔跑是为了追上那个曾经被寄予厚望的自己!"//暂时静态
      }
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

</style>