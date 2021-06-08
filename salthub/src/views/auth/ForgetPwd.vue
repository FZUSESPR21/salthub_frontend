<template>
  <div class="form-container">
    <el-card shadow="never" class="login-card">
      <div class="header" align="center">
        <img alt="register logo" src="../../assets/ForumLogo.png" />
      </div>
      <p class="title">忘记密码</p>
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
          <el-form-item label="账号" prop="name">
            <el-input style="width: 85%" v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="旧密码" prop="oldPassword">
            <el-input
              style="width: 85%"
              v-model="ruleForm.oldPassword"
              type="password"
              autocomplete="off"
            />
          </el-form-item>

          <el-form-item label="新密码" prop="newPassword">
            <el-input
              style="width: 85%"
              v-model="ruleForm.newPassword"
              type="password"
              autocomplete="off"
            />
          </el-form-item>

          <el-form-item label="确认新密码" prop="checkPass">
            <el-input
              style="width: 85%"
              v-model="ruleForm.checkPass"
              type="password"
              autocomplete="off"
            />
          </el-form-item>

          <el-form-item class="btn-content">
            <el-button class="submit" type="primary" @click="submitForm('ruleForm')"
              >确认修改</el-button
            >
            <el-button @click="back()">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
import { resetPwd } from '@/api/auth'
export default {
  name: "ForgetPwd",
  components: {
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      redirect: undefined,
      loading: false,
      isVerified: false, //是否通过人机验证
      sliderShown: false, //显示人机验证滑块
      ruleForm: {
        name: "",
        oldPassword: "",
        newPassword: "",
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
        oldPassword: [
          { required: true, message: "请输入旧密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        newPassword: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        checkPass: [
          { required: true, message: "请再次输入新密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
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
          // this.loading = true;
          // console.log(this.ruleForm)
          resetPwd(this.ruleForm)
            .then((response) =>{
              var {data} = response
              console.log(data)
            })
        } else {
          this.$message({
            message: "旧密码有误",
            type: "error",
            duration: 2000,
          });
          return false;
        }
      });
    },

    /**
     *@functionName: back 
     *@description: 返回登录页
     *@author: lw
     *@date: 2021-05-08 19:25:09
     *@version: V1.0.0
    */ 
    back() {
      this.$router.push({ path: this.redirect || "/home" });
    },
  },
};
</script>
<style scoped>
.title {
  font-size: 22;
  font-weight: 400;
  text-align: center;
  font-family:Arial, Helvetica, sans-serif;
}
.el-button.submit {
  margin-left: 12%;
}
.el-button {
  margin-left: 20%;
}

.form-container {
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
  height: 75%;
  min-width: 440px;
  max-width: 510px;
  min-height: 510px;
  max-height: 600px;
}

.btn-content >>> .el-form-item__content {
  margin-left: 13% !important;
}
</style>
