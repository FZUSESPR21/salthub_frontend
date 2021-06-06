<template>
  <div class="register-container">
    <el-card shadow="never" class="register-card">
      <div class="header" align="center">
        <img alt="register logo" src="../../assets/ForumLogo.png" />
      </div>
      <div>
        <el-form
          ref="ruleForm"
          v-loading="loading"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="name">
            <el-input style="width: 85%" v-model="ruleForm.name" />
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input
              style="width: 85%"
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
            />
          </el-form-item>

          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              style="width: 85%"
              v-model="ruleForm.checkPass"
              type="password"
              autocomplete="off"
            />
          </el-form-item>

          <el-form-item label="邮箱" prop="mailbox">
            <el-input
              style="width: 55%"
              ref="mailboxAdd"
              v-model="ruleForm.mailbox"
              autocomplete="off"
            />
            <el-button
              v-if="!waitMailCode"
              class="code"
              type="primary"
              @click="checkEmail()"
              >获取验证码</el-button
            >
            <el-button v-if="waitMailCode" class="code" type="primary" disabled
              >{{ waitTime }} 秒后重新获取</el-button
            >
          </el-form-item>

          <el-form-item label="验证码">
            <el-input style="width: 55%" v-model="ruleForm.code" />
          </el-form-item>

          <el-form-item>
            <el-button
              class="register-button"
              type="primary"
              style="margin-left: 20px"
              @click="submitForm('ruleForm')"
              >注册</el-button
            >
            <el-button style="margin-left: 100px" @click="resetForm('ruleForm')"
              >重置</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import { register, getEmailStatus, getMailCode } from "@/api/auth";
import SliderCheck from "@/components/auth/SliderCheck";

export default {
  name: "Register",
  components: {
    SliderCheck,
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      waitMailCode: false,
      mailAvailable: true,
      isVerified: false, //是否通过人机验证
      sliderShown: false, //显示人机验证滑块
      waitTime: 6,
      ruleForm: {
        name: "",
        password: "",
        checkPass: "",
        mailbox: "",
        code: "",
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
        checkPass: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
        ],
        mailbox: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  methods: {
    /**
     *@functionName:
     *@params: formName
     *@description: 提交注册表单
     *@author: lw
     *@date: 2021-05-02 22:10:33
     *@version: V1.0.0
     */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          var code = {
            code: this.ruleForm.code,
          };
          var data = {
            // avatar: "",
            email: this.ruleForm.mailbox,
            name: this.ruleForm.name,
            // nickname: "",
            password: this.ruleForm.password,
            // status: "",
          };
          register(code, data)
            .then((value) => {
              // console.log(value)
              const { code, message } = value.data;
              if (code === 200) {
                this.$message({
                  message: "账号注册成功",
                  type: "success",
                });
                setTimeout(() => {
                  this.loading = false;
                  this.$router.push({ path: this.redirect || "/login" });
                }, 0.1 * 1000);
              } else {
                // console.log(code)
                this.$message.error("注册失败，" + message);
              }
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    /**
     *@functionName:  checkEmail
     *@description: 检查邮箱可用性
     *@author: lw
     *@date: 2021-05-04 14:48:47
     *@version: V1.0.0
     */
    checkEmail() {
      var email = {
        email: this.ruleForm.mailbox,
      };
      getEmailStatus(email) //调用接口，传入参数
        .then((response) => {
          var res = response.data;
          if (res.data === false) {
            console.log("可使用该邮箱");
            this.mailAvailable = true;
            this.getCode();
          } else if (this.ruleForm.mailbox === "") {
            this.$message.error("邮箱不能为空");
          } else {
            this.mailAvailable = false;
            console.log(this.mailAvailable)
            console.log("邮箱不可使用");
            this.$message.error("该邮箱不能注册");
          }
        });
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
          setTrue();
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
     *@functionName: getCode
     *@description: 通过人机验证后，获取邮箱验证码
     *@author: lw
     *@date: 2021-05-02 20:00:18
     *@version: V1.0.1
     */
    getCode() {
      var verify = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      // console.log(this.waitMailCode);
      // this.checkEmail(this.ruleForm.mailbox);
      // console.log(this.mailAvailable)
      if (verify.test(this.ruleForm.mailbox)) {
        //通过邮箱格式验证
        if (this.isVerified) {
          //通过人机验证
          // console.log('验证成功')
          (this.waitTime = 60), (this.waitMailCode = true);
          var timer = setInterval(() => {
            this.waitTime--;
            if (this.waitTime <= 0) {
              this.waitMailCode = false;
              clearInterval(timer);
            }
          }, 1000);
          var email = {
            email: this.ruleForm.mailbox,
          };
          getMailCode(email)
            .then((response) => {
              console.log(response);
            })
            .catch(() => {});
        } else {
          this.varify();
        }
      } else {
        console.log(this.waitMailCode);
        console.log("验证失败");
      }
    },

    /**
     *@functionName:    successVerified
     *@description: 滑块验证成功函数
     *@author: lw
     *@date: 2021-05-02 20:18:19
     *@version: V1.0.0
     */
    successVerified() {
      console.log("成功验证");
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
.register-container {
  background-image: url("../../assets/study3.jpeg");
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-card {
  width: 530px;
  height: 600px;
}

.formItem {
  border-radius: 5px;
  overflow: hidden;
  margin-left: 20%;
  width: 68%;
  margin-bottom: 20px;
  transition: 1s;
}

.fade-enter-active .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
  opacity: 0;
}
</style>