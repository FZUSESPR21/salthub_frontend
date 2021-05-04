<template>
  <div>
    <div v-for="comment in comments" :key="comment.id" style="background-color:white;border:solid #e3f3f3 1px;">
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
              <br>
              <el-button type="text" style="float:right">评论</el-button>
            </div>
            <div style="width:50%;margin-left:30%;"><CreateSecondComment></CreateSecondComment></div>
          </el-footer>
        </el-container>
      </el-container>
      <SecondComment :firstCommentId="comment.commentId"></SecondComment>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SecondComment from '@/components/Comment/SecondComments'
import CreateSecondComment from '@/components/Comment/CreateSecondComment'
  export default {
      name: 'Detail',
      components: {
        SecondComment,
        CreateSecondComment
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
          firstCommentId: 1321,
          showCreateSecondComment: true,
          comments: [
            {name: '烤鸭人', content: '楼主好人', commentId: 1352},
            {name: '王小虎', content: '66666666666666666', commentId: 1965},
            {name: '烤盐人', content: '收藏了', commentId: 2000},
          ],
        }
      },
      methods: {
      },
    };
</script>
