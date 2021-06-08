<template>
  <div class="login-container">
    <el-card shadow="never" class="login-card">
      <div class="header" align="center">
        <img alt="register logo" src="../../assets/backLogo.png" />
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
            <el-input style="width: 80%" v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password" class="btn-content">
            <el-input
              style="width: 80%"
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item label="记住" prop="status" class="btn-content">
            <el-switch
              v-model="ruleForm.status"
              :active-value="1"
              :inactive-value="0"
            >
            </el-switch>
          </el-form-item>

          <el-form-item class="btn-content">
            <el-button style="width: 80% ;margin-left:5%" class="submit" type="primary" @click="submitForm('ruleForm')"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "backlogin",
  data() {
    return {
      loading: false,
      ruleForm: {
        name: '',
        password: '',
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
    /*
     *@functionName: submitForm
     *@params: formName 表单名称
     *@description: 提交表单进行登录验证
     *@author: lw
     *@date: 2021-05-04 15:06:49 
     *@version: V1.0.0
    */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading=true
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
                this.$router.push({ path: this.redirect || "/admin" });
              }, 0.5 * 1000);
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    }
    }
}
</script>

<style scoped>
.login-container {
  background-color: rgba(57, 61, 73, 1);
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 35%;
  height: 80%;
  background-color:rgba(236, 236, 236, 0.949019607843137)
}

.formItem {
  border-radius: 5px;
  overflow: hidden;
  margin-left: 10%;
  width: 70%;
  margin-bottom: 20px;
  transition: 1s;
}

.btn-content >>> .el-form-item__content {
  margin-left: 15% !important;
}

</style>