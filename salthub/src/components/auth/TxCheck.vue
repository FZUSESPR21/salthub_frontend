<template>
  <el-button @click="varify"> 验证码</el-button>
</template>
<script>
export default {
  name: "TxCheck",
  methods: {
    varify() {
      let appid = "2065604160"; // 腾讯云控制台中对应这个项目的 appid
      //生成一个滑块验证码对象
      let captcha = new TencentCaptcha(appid, function (res) {
        // 用户滑动结束或者关闭弹窗，腾讯返回的内容
        console.log(res);
        if (res.ret === 0) {
          //成功，传递数据给后台进行验证
        //   alert(123)
        } else {
          // 提示用户完成验证
          alert(456)
        }
      });
      // 滑块显示
      captcha.show();
    },
  },
};
</script>
<style scoped>
</style>
