<template>
 <div class="usercreatepost">
   <div class="header">
      <Header></Header>
    </div>
    <div class="createpost" style="padding-left:3%;padding-right:3%;padding-bottom:8%">
      <div>
        <p style="font-size:45px;font-weight:bold">发布文章</p>
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
        <p style="font-size:22px">发布设置</p>
        <br>
        <p style="font-size:22px">Tag</p>
        <br>
        <el-select v-model="value" placeholder="请选择">
          <el-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
        <div style="margin-top:60px">
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
        options: [
          {
            label: '杂谈',
            options: [{
              value: 'Shanghai',
              label: '求助'
            }, {
              value: 'Beijing',
              label: '找研友'
            }, {
              value: 'aaaaaa',
              label: '出清'
            }
            ]
          },
          {
            label: '拼课',
            options: [{
              value: 'Chengdu',
              label: '数学'
            }, {
              value: 'Shenzhen',
              label: '英语'
            }, {
              value: 'Guangzhou',
              label: '政治'
            }, {
              value: 'Dalian',
              label: '专业课'
            }]
          },
          {
            label: '院校',
            options: [{
              value: 'Chengdu',
              label: '福大'
            }, {
              value: 'Shenzhen',
              label: '外校'
            }]
          },
        ],
        value: ''
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
    margin-top: 5%;
  }
</style>
