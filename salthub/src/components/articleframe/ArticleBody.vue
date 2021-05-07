<!-- 
 * @description: 文章列表文章概要组件
 * @fileName: ArticleBody.vue 
 * @author: xiaohan
 * @date: 2021-05-03 23:08:44 
 * @后台人员: 
 * @path:  
 * @version: V1.0.2 
!-->
<template>
  <article class="media">
    <div class="media-content">
      <div class="post-main">
        <p class="post-title">
          <el-link 
            :underline="false"
            class="is-size-4"
            @click="emitId(id)"
          >
          {{ this.title }}
          </el-link >
        </p>
        <p class="post-content" :key="componentKey">
          <span class="is-size-6">{{ this.content }}</span>
        </p>
        <div class="act-buttons">
          <el-button 
            type="primary" 
            round 
            size="small"
            @click="thumb()"
            >
              {{ this.thumbname }}
            </el-button>
          <el-button
            type="warning"
            icon="el-icon-star-off"
            circle
            size="small"
            @click="collection()"
          ></el-button>
          <el-button 
            type="info" 
            round 
            size="small"
            @click="emitTag()"
            :style="{ display: visible }"
            >{{ tagname[0] }}</el-button>
        </div>
      </div>
    </div>
    <div class="media-right" />
  </article>
</template>

<script>
import 'buefy/dist/buefy.css'
import { thumbBlog , getTagById , collectBlog} from "@/api/blog";
export default {
  name: "Article",
  props:["paper"],
  created(){
    this.title = this.paper.title
    this.content = this.Substr(this.paper.content,0,400)
    this.id = this.paper.id
    this.getTag()
  },
  data(){
    return{
      item:this.paper,
      tagid:[],
      tagname:[],
      title:"",
      content:"",
      id:"",
      canthumb:true,
      thumbname:"点赞",
      componentKey: 0,//用于刷新组件
      visible:'none',
    }
  },
  methods:{
    emitTag(){
      //this.$emit('tag',value)
    },
    emitId(value){
      this.$emit('id',value)
    },
    getTag(){
      getTagById(this.id).then((response) => {
        const { data } = response;
        if(data.code == "200"){
          for (let i in data.data) {
            this.tagid[i] = data.data[i].id
            this.tagname[i] = data.data[i].name
            if(this.tagid.length>0){
              this.visible = ''
            }
          }
        }
        this.forceRerender()
      });
    },
    collection(){
      collectBlog(this.item.id).then((response) => {
        const { data } = response;
        if(data.code=="200"){
          this.$message({
          message: '收藏成功！',
          type: 'success'
        });
        }
      });
    },
    thumb(){
      let params = {
        blogId:this.item.id,
        flag:this.canthumb
      }
      thumbBlog(params).then((response) => {
        const { data } = response;
        if(data.code=="200" && this.canthumb===true){
          this.$message({
            message: '点赞成功！',
            type: 'success'
          });
          this.canthumb = false
          this.thumbname = "已点赞"
        }
        else if(data.code=="200" && this.canthumb===false){
          this.$message({
            message: '取消点赞成功！',
            type: 'success'
          });
          this.canthumb = true
          this.thumbname = "点赞"
        }
      });
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
    },
    /**
     *@functionName:  forceRerender 
     *@description: 改变key值，重新渲染组件
     *@author: xiaohan
     *@date: 2021-05-05 13:31:54
     *@version: V1.0.0
    */
    forceRerender() {
      this.componentKey += 1;  
    },
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