<!-- 
 * @description: 晒研论坛-修改个人信息卡片
 * @fileName: updateInfo.vue 
 * @author: NoMornings 
 * @date: 2021-05-07 15:06:10 
 * @后台人员:  
 * @path:  /updateInfo
 * @version: V1.0.0 
!-->
<template>
  <el-card class="v-box-card">
    <p :class="'title'">修改个人资料</p>
    <!-- 个人信息 -->
    <div :class="'wrap'">
      <div :class="'p-info'">
        <!-- 头像 -->
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          :size="70"
        ></el-avatar>
        <!-- 文字信息 -->
        <div :class="['column', 'info-text']">
          <div :class="'nickname'">
            <p>昵称：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <el-input
              v-model="account.nickname"
              placeholder="请输入昵称"
              v-cloak
            ></el-input>
          </div>
          <div :class="'slogan'">
            <p>个性签名：</p>
            <el-input
              v-model="account.slogan"
              placeholder="请输入个性签名"
              v-cloak
            ></el-input>
          </div>
        </div>
      </div>
      <!-- 确认修改按钮 -->
      <div :class="'v-submit'">
        <el-button
          type="primary"
          icon="el-icon-check"
          circle
          :class="'submit-btn'"
          @click="updateInfo(account)"
        ></el-button>
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
  text-align: center;
  font-size: 18px;
}
.wrap {
  display: flex;
  justify-content: space-around;
  .p-info,
  .v-submit {
    display: flex;
    align-items: center;
    .info-text {
      margin-left: 20px;
      .nickname,
      .slogan {
        white-space: nowrap;
        display: flex;
        justify-content: center;
        margin: 10px 0;
        p {
          display: flex;
          align-items: center;
        }
      }
    }
    p {
      font-size: 18px;
    }
    .submit-btn {
      width: $size;
      height: $size;
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
      account: {
        avatar: "",
        email: "111111@qq.com",
        name: "Kaoyanren",
        nickname: "烤盐人",
        password: "123456",
        roleId: 4,
        slogan: "努力！奋斗！",
      },
    };
  },
  mounted() {
    this.account = store.getters.user;
  },
  methods: {
    // 修改个人信息（目前仅限昵称和个性签名）
    updateInfo(account) {
      putInfo(account).then((response) => {
        if (response.data.code == 200) {
          this.$message({
            message: "修改成功",
            type: "success",
            duration: 2000,
          });
          this.$router.push({ path: this.redirect || "/info" });
        } else {
          this.$message({
            message: "保存失败，请重试",
            type: "error",
            duration: 2000,
          });
        }
        // console.log("update=>", response);
      });
    },
  },
};
</script>