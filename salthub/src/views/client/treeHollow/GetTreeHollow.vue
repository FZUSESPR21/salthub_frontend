<template>
  <div>
    <div class="header">
      <Header></Header>
    </div>
    <div class="main">
      <el-card class="card">
        <el-input
          class="content"
          type="textarea"
          :rows="12"
          resize="none"
          placeholder=""
          style="text-align: center"
          v-model="textarea"
          readonly="readonly"
        >
        </el-input>
        <Popover></Popover>
      </el-card>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Layout/Header";
import Popover from "@/components/treeHollow/ReplyPopover";
import Footer from "@/components/Layout/Footer";
import { getTreeHollow } from "@/api/blog"
export default {
  name: "GetTreeHollow",
  components: {
    Header,
    Popover,
    Footer,
  },
  data() {
    return {
      textarea: "当你在身旁找不到帮助时，\n"+
                "你只能靠自己了,\n" +
                "加油！读书人,"
    };
  },
  created() {
    this.getContent()
  },
  methods: {
    getContent() {
      getTreeHollow().then((response) => {
        console.log(response.data.data)
        this.textarea = response.data.data.content
      })
    }
  }
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

  margin-left: 50%;
  transform: translateX(-50%);
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
