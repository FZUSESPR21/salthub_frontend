<template>
  <el-popover placement="bottom" trigger="click">
    <el-button class="emoji emoji-1" type="primary"></el-button>
    <el-button class="emoji emoji-7" type="primary"></el-button>
    <el-button class="emoji emoji-8" type="primary"></el-button>
    <el-button class="emoji emoji-26" type="primary"></el-button>
    <el-button slot="reference" class="submit" type="submit"
      >回应树洞</el-button
    >
  </el-popover>
</template>
<script>
export default {
  name: "ReplyPopover",
};
</script>
<style scoped>
.emoji-1 {
  background: url("~@/assets/treeHollow/emoji/emoji-1.png") no-repeat;
}
.emoji-7 {
  background: url("~@/assets/treeHollow/emoji/emoji-7.png") no-repeat;
}
.emoji-8 {
  background: url("~@/assets/treeHollow/emoji/emoji-8.png") no-repeat;
}
.emoji-26 {
  background: url("~@/assets/treeHollow/emoji/emoji-26.png") no-repeat;
}
.emoji{
  width: 36px;
  height: 36px;
  background-size: cover;
  border: 0px;
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
