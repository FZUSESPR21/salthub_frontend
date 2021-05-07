<!-- 
 * @description: 晒研论坛-个人信息
 * @fileName: card.vue 
 * @author: NoMornings 
 * @date: 2021-05-06 21:42:17 
 * @后台人员:  
 * @path:  /card
 * @version: V1.0.0 
!-->
<template>
  <el-card class="v-box-card">
    <!-- 个人信息 -->
    <div :class="'title'">
      <div :class="'p-info'">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          :size="70"
        ></el-avatar>
        <div :class="['column', 'info-text']">
          <p :class="'nickname'" v-cloak>昵称：{{ nickname }}</p>
          <p :class="'user-id'" v-cloak>ID：{{ userId }}</p>
          <p :class="'slogan'" v-cloak>个性签名：{{ slogan }}</p>
        </div>
      </div>
      <div :class="'v-edit'">
        <el-button
          type="info"
          icon="el-icon-edit"
          circle
          :class="'edit-btn'"
          @click="toUpdate()"
        ></el-button>
      </div>
    </div>

    <el-divider></el-divider>

    <!-- 个人收藏 -->
    <div :class="['wrap', 'columns']">
      <div :class="['blog', 'column is-three-quarters']">
        <span :class="'collection'">我的收藏</span>
        <span :class="'my-blog'">我的帖子</span>
        <div
          :class="'blog-list'"
          v-for="(item, index) in blogList"
          :key="index"
        >
          <div :class="'type-btn'">
            <el-tag :type="getType(item.type)">{{ item.type }}</el-tag>
            {{ item.text }}
          </div>
          <el-divider></el-divider>
        </div>
        <!-- 收藏到底提示 -->
        <div :class="'v-end'">收藏已经到底啦</div>
      </div>

      <!-- 考研倒计时 -->
      <div :class="['count-down', 'column']">
        <v-count-down></v-count-down>
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
$title-color: #03298b;
$grey: #9b9b9b;
$opacity: 0.8;
$size: 50px;

.v-box-card {
  height: auto;
  margin: 0 30px;
}
.title {
  display: flex;
  justify-content: space-around;
  .p-info,
  .v-edit {
    display: flex;
    align-items: center;
    .info-text {
      margin-left: 20px;
    }
    p {
      font-size: 18px;
    }
    .edit-btn {
      width: $size;
      height: $size;
    }
  }
}

.wrap {
  display: flex;
  justify-content: space-around;
  .blog {
    padding: 0 20px;
    .collection,
    .my-blog {
      cursor: pointer;
      font-size: 18px;
      padding: 0 5px;
      color: $title-color;
    }
    .collection:hover {
      opacity: $opacity;
    }
    .blog-list {
      margin-top: 20px;
      line-height: 0;
      vertical-align: center;
      .type-btn {
        padding: 0 15px;
      }
    }
    .v-end {
      color: $grey;
      text-align: center;
      padding-bottom: 10px;
    }
  }
}

[v-cloak] {
  display: none;
}
</style>

<script>
// 倒计时
import CountDownCard from "@/views/client/card/CountDown";
import "buefy/dist/buefy.css";
import { putInfo } from "@/api/account";
import store from "@/store";
export default {
  components: {
    "v-count-down": CountDownCard,
  },
  data() {
    return {
      nickname: "烤盐人",
      userId: "123456",
      slogan: "努力！奋斗！",
      blogList: [
        { type: "资讯", text: "2022福州大学招生简章" },
        { type: "资讯", text: "2021福州大学电子信息类复试分数线" },
        { type: "社区", text: "2022福州大学考研指导来了，必看！！最强考..." },
        { type: "社区", text: "如何在考研期间保持每天高效地学习" },
        { type: "资讯", text: "2022福州大学招生简章" },
        { type: "资讯", text: "2021福州大学电子信息类复试分数线" },
        { type: "社区", text: "2022福州大学考研指导来了，必看！！最强考..." },
        { type: "社区", text: "如何在考研期间保持每天高效地学习" },
        { type: "资讯", text: "2022福州大学招生简章" },
        { type: "资讯", text: "2021福州大学电子信息类复试分数线" },
        { type: "社区", text: "2022福州大学考研指导来了，必看！！最强考..." },
        { type: "社区", text: "如何在考研期间保持每天高效地学习" },
        { type: "资讯", text: "2022福州大学招生简章" },
        { type: "资讯", text: "2021福州大学电子信息类复试分数线" },
        { type: "社区", text: "2022福州大学考研指导来了，必看！！最强考..." },
        { type: "社区", text: "如何在考研期间保持每天高效地学习" },
      ],
    };
  },
  methods: {
    getType(type) {
      return type == "资讯" ? "warning" : "";
    },
    /**
     *@functionName: toUpdate
     *@description: 跳转个人中心修改页
     *@author: NoMornings
     *@date: 2021-05-07 15:39:24
     *@version: V1.0.0
    */
    toUpdate() {
      this.$router.push({ path: this.redirect || "/updateView" });
    }
  },
};
</script>