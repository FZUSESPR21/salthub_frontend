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
      try {
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
          "author": "zhuangweilong",
          "commentId": this.firstCommentId,
          "content": this.textarea,
          "id": 1,
          "releaseTime": ""
        }
        console.log(store.getters.user+"######")
        pushSecondComment(data)
        this.$message.success('留言成功')
        this.textarea = ''
        // let postData = {}
        // console.log(this.commentText)
        // postData['content'] = this.commentText
        // postData['topic_id'] = this.slug
        // await pushComment(postData)
        // this.$emit('loadComments', this.slug)
        // this.$message.success('留言成功')
      } catch (e) {
        this.$buefy.toast.open({
          message: `Cannot comment this story. ${e}`,
          type: 'is-danger'
        })
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
