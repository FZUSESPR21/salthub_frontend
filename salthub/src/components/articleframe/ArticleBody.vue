<!-- 
 * @description: 文章列表文章概要组件
 * @fileName: ArticleBody.vue 
 * @author: xiaohan
 * @date: 2021-05-02 23:19:44 
 * @后台人员:  
 * @path:  
 * @version: V1.0.0 
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
            @click="emitTag(item.tag)">{{ item.tag }}</el-button>
        </div>
      </div>
    </div>
    <div class="media-right" />
  </article>
</template>

<script>
export default {
  name: "Article",
  props:["paper"],
  data(){
    return{
      item:this.paper,
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