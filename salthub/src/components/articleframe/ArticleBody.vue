<!-- 
 * @description: 文章列表文章概要组件
 * @fileName: ArticleBody.vue 
 * @author: xiaohan
 * @date: 2021-05-03 21:02:44 
 * @后台人员:  zouyangyi
 * @path:  
 * @version: V1.0.1 
!-->
<template>
  <article class="media">
    <div class="media-content">
      <div class="post-main">
        <p class="post-title">
          <span class="is-size-4">{{ item.title }}</span>
        </p>
        <p class="post-content">
          <span class="is-size-6">{{ item.content }}</span>
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
  mounted(){
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
  },
  data(){
    return{
      item:this.paper,
      tag:""
    }
  },
  methods:{
    emitTag(value){
      this.$emit('tag',value)
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