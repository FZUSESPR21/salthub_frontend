<template>
  <div>
    <div class="header">
      <Header></Header>
    </div>
    <div class="main">
      <el-card class="card">
        <el-input
          id="content"
          class="content"
          type="textarea"
          :rows="12"
          resize="none"
          placeholder="（ 可以在这倾诉你的烦恼）"
          style="text-align: center"
          v-model="textarea"
        >
        </el-input>
        <el-button class="submit" @click="sendTreeHollow" type="submit"
          >丢进树洞</el-button
        >
        <transition name="listen">
          <div v-show="isSent">
            <div style="height: 20px"></div>
            <el-button
              class="submit"
              @click="toGetTreeHollow"
              type="submit"
              v-show="isSent"
              >倾听树洞</el-button
            >
          </div>
        </transition>
      </el-card>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { postTreeHollow } from "@/api/blog";
export default {
  name: "GetTreeHollow",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      textarea: "",
      isSent: false,
    };
  },
  methods: {
    toGetTreeHollow() {
      this.$router.push({ path: this.redirect || "/getTreeHollow" });
    },
    sendTreeHollow() {
      if (this.textarea === "" || this.textarea === null) {
        this.$message({
          message: "烦恼不能为空哦",
          type: "error",
          duration: 2000,
        });
      } else {
        var data = {
          content: this.textarea,
        };
        postTreeHollow(data).then((response) => {
          console.log(response);
          if (response.data.message === "OK") {
            this.$message({
              message: "烦恼已经丢进树洞啦",
              type: "success",
              duration: 2000,
            });
          }
          document.getElementById("content").value = "";
          this.textarea = "";
          this.isSent = true;
          console.log(this.textarea);
        });
      }
    },
  },
};
</script>
<style scoped>
.main {
  background: url("~@/assets/treeHollow/background.png") no-repeat;
  background-size: 100% 100%;
  min-block-size: 60% 60%;
  min-height: 945px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  width: 60%;
  min-width: 680px;
  height: 100%;
  border: 0px;
  border-radius: 20px;
  padding: 20px;
  background-color: #e7c56e;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.726);
}
.content {
  font-size: 20px;
  margin: 80px 0px 40px 0px;
}
.content >>> textarea {
  text-align: center;
  border: 0px;
  font: bolder;
  color: rgb(0, 0, 0);
  background: #ffdc81;
}
.submit {
  font-size: 18px;
  width: fit-content;
  border: 0px;
  transition: 1s;

  margin-left: 50%;
  transform: translateX(-50%);
}
.my-enter,
.my-leave-to {
  opacity: 0; /*透明度*/
  transform: translateY(70px);
}
.my-enter-active,
.my-leave-active {
  transition: all 0.8s ease;
}
.el-button--submit,
.el-button--submit:focus,
.el-button--submit.is-active,
.el-button--submit:active {
  background: #d58116;
  color: #fff;
}
.el-button--submit:hover {
  background: #b87115;
  border-color: #b87115;
  color: #fff;
}
</style>
