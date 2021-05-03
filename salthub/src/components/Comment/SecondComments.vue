<template>
  <div style="">
    <!-- <div>父评论id:{{firstCommentId}}</div> -->
    <div v-for="comment in comments" :key="comment.id" style="background-color:white;margin-left:15%;width:80%;border-top:solid #e3f3f3 1px">
      <el-container>
        <el-aside width="200px">
          <div>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <span style="font-size:20px">{{comment.name}}</span>
          </div>
        </el-aside>
        <el-container>
          <el-main style="font-size:20px">
            {{comment.content}}
          </el-main>
          <el-footer height="120px">
            <div style="float:right">
              <el-button round style="background-color:#ff4949;color:white">点赞</el-button>
              <el-button type="warning" icon="el-icon-star-off" circle></el-button>
              <br>
              <span style="font-size:15px">2021年4月3日</span>
              <el-button type="text">举报</el-button>
            </div>
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
  export default {
      name: 'Detail',
      props: {
        firstCommentId: {
          type: Int32Array,
          default: 0
        }
      },
      components: {
      },
      computed: {
      ...mapGetters([
        'token','user'
      ])
      },
      data() {
        const item = {

        };
        return {
          comments: [
            {name: '张三', content: '顶顶顶'},
            {name: '王五', content: '点赞'},
            {name: '李四', content: '收藏'},
          ],
        }
      },
      created: {

      },
      methods: {
      },
    };
</script>
