<!--
 * @description:
 * @fileName: SecondComments.vue
 * @author: 庄威龙
 * @date: 2021-06-08 19:52:04
 * @后台人员:
 * @path:
 * @version: V1.0.5
!-->
<template>
  <div>
    <!-- <div>父评论id:{{firstCommentId}}</div> -->
    <div
      v-for="comment in comments"
      :key="comment.id"
      style="
        background-color: #f3f3f3;
        margin-left: 20%;
        width: 79%;
        border-top: solid #b0c4de 1px;
        padding-left: 20px;
        padding-top: 20px;
      "
    >
      <el-container>
        <el-aside width="200px">
          <div>
            <img
              :src="url"
              alt="头像"
              style="
                width: 50px;
                height: 50px;
                margin: 0;
                padding: 0;
                line-height: 0;
              "
            />
            <div
              style="
                font-size: 18px;
                width: 100%;
                padding: 0;
                margin-left: 4%;
                word-break: break-all;
                white-space: normal;
                line-height: 20px;
                position: relative;
              "
            >
              {{ comment.name }}
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-main style="font-size: 20px">
            {{ comment.content }}
          </el-main>
          <el-footer>
            <div style="float: right">
              <span style="font-size: 15px">2021年4月3日</span>
              <el-button
                round
                style="background-color: #ff4949; color: white; font-size: 3px"
                >点赞</el-button
              >
              <el-button type="text">举报</el-button>
            </div>
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import store from "@/store";
import { url } from '@/utils/interface.js'
export default {
  name: "Detail",
  props: {
    firstCommentId: {
      type: Number,
      default: 1,
    },
  },
  components: {},
  computed: {
    ...mapGetters(["token", "user"]),
  },
  data() {
    const item = {};
    return {
      comments: [
        { name: "张三", content: "顶顶顶" },
        { name: "王五", content: "点赞" },
        { name: "李四", content: "收藏" },
      ],
      // avatar
      url:
        store.getters.user == null
          ? "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          : url + store.getters.user.avatar,
    };
  },
  methods: {},
};
</script>
