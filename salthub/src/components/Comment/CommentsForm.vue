<template>
  <article class="media">
    <div class="media-content">
      <form @submit.prevent="onSubmit">
        <el-input
          v-model.lazy="commentText"
          type="textarea"
          :rows="10"
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
import { pushComment } from '@/api/comment'
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
    blogId: {
      type: String,
      default: ''
    }
  },
  methods: {
    async onSubmit() {
      this.isLoading = true
      try {
        console.log(this.blogId)
        console.log(store.getters.user.name)
        var data = {
          "author": store.getters.user.name,
          "blogId": this.blogId,
          "content": this.textarea,
          "id": 0,
          "releaseTime": ""
        }
        pushComment(data)
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
