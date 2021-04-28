<template>
 <div class="usercreatepost">
    <div class="createpost" style="padding-left:3%;padding-right:3%;padding-bottom:8%">
      <div>
        <p style="font-size:45px;font-weight:bold">发布通知</p>
      </div>
      <div style="margin-top:20px">
        <p style="font-size:22px">标题</p>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <p style="font-size:22px">正文</p>
        <el-input
          type="textarea"
          :rows="30"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
        <br>
        <div style="margin-top:30px">
          <el-button type="primary">立即发布</el-button>
          <el-button>取消</el-button>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
import Header from '@/components/Layout/Header'
  export default {
    name: 'Detail',
    components: {
      Header,
    },
    data() {
      const item = {

      };
      return {
        input: '',
        textarea: '',
      }
    },
    methods: {
    },
  };
</script>

<style scoped>
  .createpost{
    background-color: white;
    width: 75%;
    margin:auto;
  }
</style>
