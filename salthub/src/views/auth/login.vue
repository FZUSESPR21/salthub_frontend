<template>
<div class="login-container">
    <el-card shadow="never" class="login-card">
        <div class="header" align="center">
        <img alt="register logo"  src="../../assets/ForumLogo.png">
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
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="记住" prop="delivery">
              <el-switch v-model="ruleForm.rememberMe"></el-switch>
            </el-form-item>

            <el-form-item>
              <el-button class="tijiao" type="primary" @click="submitForm('ruleForm')"
                >提交</el-button
              >
              <el-button @click="resetForm('ruleForm')">注册</el-button>
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
        pass: "",
        rememberMe: true,
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        pass: [
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
  }
}  
</script>

<style scoped>
.el-button.tijiao{
   margin-left: 20px;
}
.el-button{
  margin-left: 100px;
}

.login-container{
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