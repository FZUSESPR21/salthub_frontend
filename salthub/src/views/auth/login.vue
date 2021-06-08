<template>
  <div class="login-container">
    <el-card shadow="never" class="login-card">
      <div class="header" align="center">
        <img alt="register logo" src="../../assets/ForumLogo.png" />
      </div>
      <div>
        <el-form
          v-loading="loading"
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="name" class="btn-content">
            <el-input style="width: 85%" v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password" class="btn-content">
            <el-input
              style="width: 85%"
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item style="width: 80%" label="记住" prop="status" class="btn-content">
            <el-switch
              v-model="ruleForm.status"
              :active-value="1"
              :inactive-value="0"
            >
            </el-switch>
            <a style="float: right" @click="toForgetPwd()">忘记密码？</a>
          </el-form-item>

          <el-form-item class="btn-content">
            <el-button class="submit" type="primary" @click="submit('ruleForm')"
              >登录</el-button
            >
            <!-- 注册待跳转 -->
            <el-button @click="toRegister()">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import SliderCheck from "@/components/auth/SliderCheck";
export default {
  name: "login",
  components: {
    SliderCheck,
  },
  data() {
    return {
      redirect: undefined,
      loading: false,
      isVerified: false, //是否通过人机验证
      sliderShown: false, //显示人机验证滑块
      ruleForm: {
        name: "",
        password: "",
        status: true,
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    /**
     *@functionName:    submitForm
     *@params: formName 表单名称
     *@description: 提交表单进行登录验证
     *@author: lw
     *@date: 2021-05-01 14:58:59
     *@version: V1.0.0
     */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          // console.log(this.ruleForm)
          this.$store
            .dispatch("user/login", this.ruleForm)
            // .dispatch("user/logout")
            .then(() => {
              this.$message({
                message: "恭喜你，登录成功",
                type: "success",
                duration: 2000,
              });
              setTimeout(() => {
                this.loading = false;
                this.$router.push({ path: this.redirect || "/home" });
              }, 0.5 * 1000);
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
    /**
     *@functionName:    toRegister
     *@description: 跳转注册页面
     *@author: lw
     *@date: 2021-05-01 14:59:52
     *@version: V1.0.0
     */
    toRegister() {
      this.$router.push({ path: this.redirect || "/register" });
    },
    toForgetPwd() {
      this.$router.push({ path: this.redirect || "/forgetpwd" });
    },
    /**
     *@functionName: submit    
     *@description: 点击登录 
     *@author: lw
     *@date: 2021-05-02 17:50:39
     *@version: V1.0.0
     */
    submit(form) {
      console.log(this.isVerified);
      if (this.isVerified == true) {
        this.submitForm(form);
      }
      else {
        this.varify()
      }
    },
    /**
     *@functionName: varify  
     *@description: 滑块验证
     *@author: lw
     *@date: 2021-06-06 19:25:26
     *@version: V1.0.0
    */
    varify() {
      let appid = "2065604160"; // 腾讯云控制台中对应这个项目的 appid
      var _this = this;
      //生成一个滑块验证码对象
      let captcha = new TencentCaptcha(appid, function (res) {
        // 用户滑动结束或者关闭弹窗，腾讯返回的内容
        // console.log(res);
        if (res.ret === 0) {
          //成功，传递数据给后台进行验证
          setTrue()
        } else {
          // 提示用户完成验证
        }
      });
      function setTrue() {
        _this.isVerified = true;
        // console.log(_this == this)
        // console.log(abc)
      }
      // 滑块显示
      captcha.show();
    },
    /**
     *@functionName:    successVerified
     *@description: 滑块验证成功函数
     *@author: lw
     *@date: 2021-05-02 20:18:19
     *@version: V1.0.0
     */
    successVerified() {
      // console.log("成功验证")
      this.isVerified = true;
      // this.submitForm(this.ruleForm)
    },
    /**
     *@functionName:    errorVerified
     *@description: 滑块验证失败函数
     *@author: lw
     *@date: 2021-05-02 20:18:19
     *@version: V1.0.0
     */
    errorVerified() {
      // console.log("验证失败")
      this.isVerified = false;
    },
  },
};
</script>

<style scoped>
.el-button.submit {
  margin-left: 12%;
}
.el-button {
  margin-left: 25%;
}

.login-container {
  background-image: url("../../assets/study3.jpeg");
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 35%;
  height: 55%;
  min-width: 440px;
  max-width: 510px;
  min-height: 400px;
  max-height: 600px;
}

.formItem {
  border-radius: 5px;
  overflow: hidden;
  margin-left: 10%;
  width: 80%;
  margin-bottom: 20px;
  transition: 1s;
}

.fade-enter-active .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
  opacity: 0;
}

.btn-content >>> .el-form-item__content {
  margin-left: 13% !important;
}
</style>