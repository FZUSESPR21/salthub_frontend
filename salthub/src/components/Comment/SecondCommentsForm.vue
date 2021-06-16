<!--
 * @description:
 * @fileName: SecondCommentsForm.vue
 * @author: 庄威龙
 * @date: 2021-06-08 19:52:17
 * @后台人员:
 * @path:
 * @version: V1.0.5
!-->
<template>
  <article class="media">
    <div class="media-content">
      <form @submit.prevent="onSubmit">
        <el-input
          v-model.lazy="commentText"
          type="textarea"
          :rows="5"
          placeholder="请输入内容"
          :disabled="isLoading"
          v-model="textarea">
        </el-input>
        <div style="float:right">
          <el-button
            type="primary"
            round
            native-type="submit"
            :disabled="isLoading"
            style="margin-top:10%"
          >
            发送
          </el-button>
        </div>
      </form>
    </div>
  </article>
</template>

<script>
import { pushSecondComment } from '@/api/comment'
import store from '@/store'
export default {
  name: 'LvCommentsForm',
  data() {
    return {
      commentText: '',
      isLoading: false,
      textarea: ''
    }
  },
  props: {
    slug: {
      type: String,
      default: null
    },
    firstCommentId: {
      type: Number,
      default: 1
    },
    firstCommentAuthor: {
      type: String,
      default: null
    }
  },
  methods: {
    async onSubmit() {
      this.isLoading = true
        console.log(this.firstCommentId)
        console.log(this.firstCommentAuthor)
        // var data = {
        //   "accountName": this.firstCommentAuthor,
        //   "author": store.getters.user,
        //   "commentId": this.firstCommentId,
        //   "content": this.textarea,
        //   "id": 1,
        //   "releaseTime": ""
        // }
        var data = {
          "accountName": this.firstCommentAuthor,
          "author": store.getters.user.name,
          "commentId": this.firstCommentId,
          "content": this.textarea,
          "id": 1,
          "releaseTime": ""
        }
        pushSecondComment(data).then((response) => {
          try{
            const { data } = response;
            if (data.code == "200")
            {
              this.$message.success('留言成功')
              setTimeout(() => {
                location.reload()
              }, 800);
            }
          }catch (e) {
            this.message({
              message: `Cannot comment this story. ${e}`,
              type: 'is-danger'
            })
          } finally {
            this.isLoading = false
          }
        });
        this.textarea = ''
        // let postData = {}
        // console.log(this.commentText)
        // postData['content'] = this.commentText
        // postData['topic_id'] = this.slug
        // await pushComment(postData)
        // this.$emit('loadComments', this.slug)
        // this.$message.success('留言成功')
      }
    }
  }
</script>
