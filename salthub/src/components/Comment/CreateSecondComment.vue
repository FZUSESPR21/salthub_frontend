<!--
 * @description:
 * @fileName: CreateSecondComment.vue
 * @author: 庄威龙
 * @date: 2021-06-08 19:51:49
 * @后台人员:
 * @path:
 * @version: V1.0.5
!-->
<template>
  <!-- <div>父评论id:{{firstCommentId}}</div> -->
  <div class="box comments" style="background:#f3f3f3">
    <h3 class="title is-5">评论</h3>

    <!-- <lv-comments-form :slug="slug" @loadComments="fetchComments"/> -->
    <lv-comments-form :slug="slug" :firstCommentId="firstCommentId" :firstCommentAuthor="firstCommentAuthor"/>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchCommentsByTopicId } from '@/api/comment'
import LvCommentsForm from './SecondCommentsForm'

export default {
  name: 'LvComments',
  components: {
    LvCommentsForm,
  },
  data() {
    return {
      comments: []
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
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  async mounted() {
    // await this.fetchComments(this.slug)
  },
  methods: {
    // 初始化
    // async fetchComments(topic_id) {
    //   console.log(topic_id)
    //   fetchCommentsByTopicId(topic_id).then(response => {
    //     const { data } = response
    //     this.comments = data
    //   })
    // }
  }
}
</script>
