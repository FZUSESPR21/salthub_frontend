<template>
  <div class="box comments" style="back-groudcolor:#f3f3f3">
    <h3 class="title is-5">评论</h3>

    <!-- <lv-comments-form :slug="slug" @loadComments="fetchComments"/> -->
    <lv-comments-form :blogId="blogId"/>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LvCommentsForm from './CommentsForm'

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
    blogId: {
      type :String,
      default: ''
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
