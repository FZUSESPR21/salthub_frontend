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
          <el-form-item label="账号" prop="name">
            <el-input style="width:85%" v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input
              style="width:85%"
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item label="记住" prop="status">
            <el-switch
              v-model="ruleForm.status"
              :active-value="1"
              :inactive-value="0"
            >
            </el-switch>
          </el-form-item>

          <el-form-item>
            <el-button
              class="submit"
              type="primary"
              @click="submitForm('ruleForm')"
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
export default {
  name: "login",
  data() {
    return {
      redirect: undefined,
      loading: false,
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          // console.log(this.ruleForm)
          this.$store
            .dispatch("user/login", this.ruleForm)
            .then(() => {
              this.$message({
                message: "恭喜你，登录成功",
                type: "success",
                duration: 2000,
              });
              setTimeout(() => {
                this.loading = false;
                this.$router.push({ path: this.redirect || "/home" });
              }, 0.1 * 1000);
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
    toRegister() {
      this.$router.push({ path: this.redirect || "/register" });
    },
  },
};
</script>

<style scoped>
.el-button.submit {
  margin-left: 20px;
}
.el-button {
  margin-left: 100px;
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
  width: 530px;
  height: 500px;
}
</style>