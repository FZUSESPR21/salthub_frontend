<!-- 
 * @description: 文章列表文章概要组件
 * @fileName: ArticleBody.vue 
 * @author: xiaohan
 * @date: 2021-05-03 23:08:44 
 * @后台人员:  zouyangyi
 * @path:  
 * @version: V1.0.2 
!-->
<template>
  <article class="media">
    <div class="media-content">
      <div class="post-main">
        <p class="post-title">
          <span class="is-size-4">{{ this.title }}</span>
        </p>
        <p class="post-content">
          <span class="is-size-6">{{ this.content }}</span>
        </p>
        <div class="act-buttons">
          <el-button type="primary" round size="small">点赞</el-button>
          <el-button
            type="warning"
            icon="el-icon-star-off"
            circle
            size="small"
          ></el-button>
          <el-button 
            type="info" 
            round 
            size="small"
            @click="emitTag(tag)">{{ this.tag }}</el-button>
        </div>
      </div>
    </div>
    <div class="media-right" />
  </article>
</template>

<script>
import 'buefy/dist/buefy.css'
export default {
  name: "Article",
  props:["paper"],
  created(){
    if(this.paper.moduleId===0){
      this.tag = "福州大学"
    }
    else if(this.paper.moduleId===1){
      this.tag = "外校"
    }
    else if(this.paper.moduleId===2){
      this.tag = "杂谈"
    }
    else if(this.paper.moduleId===3){
      this.tag = "拼课"
    }
    this.title = this.paper.title
    this.content = this.Substr(this.paper.content,0,400)
  },
  data(){
    return{
      item:this.paper,
      tag:"",
      title:"",
      content:"",
    }
  },
  methods:{
    emitTag(value){
      this.$emit('tag',value)
    },
    // 字符串截取 包含对中文处理,str需截取字符串,start开始截取位置,n截取长度
    Substr(str, start, n) { // eslint-disable-line
      if (str.replace(/[\u4e00-\u9fa5]/g, '**').length <= n) {
        return str;
      }
      let len = 0;
      let tmpStr = '';
      for (let i = start; i < str.length; i++) { // 遍历字符串
        if (/[\u4e00-\u9fa5]/.test(str[i])) { // 中文 长度为两字节
          len += 2;
        } else {
          len += 1;
        }
        if (len > n) {
          break;
        } else {
          tmpStr += str[i];
        }
      }
      return tmpStr+"...";
    }
  }
};
</script>

<style scoped>
.act-buttons {
  margin-top: 15px;
}
.post-title {
  margin-bottom: 15px;
  margin-top: 15px;
}
.post-main {
  margin-right: 10px;
  margin-left: 10px;
}
</style>