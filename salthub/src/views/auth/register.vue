<template>
  <div class="register-container">
      <el-card shadow="never" class="register-card">
        <div class="header" align="center">
        <img alt="register logo"  src="../../assets/ForumLogo.png">
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
              <el-input style="width:85%" v-model="ruleForm.name" />
            </el-form-item>

            <el-form-item label="密码" prop="password">
              <el-input
                style="width:85%"
                v-model="ruleForm.password"
                type="password"
                autocomplete="off"
              />
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                style="width:85%"
                v-model="ruleForm.checkPass"
                type="password"
                autocomplete="off"
              />
            </el-form-item>
            
            
            <el-form-item label="邮箱" prop="mailbox">
              <el-input style="width:55%" v-model="ruleForm.mailbox" autocomplete="off" />          
              <el-button  class="code" type="primary" @click="onsubmit()">获取验证码</el-button>
            </el-form-item>
           
            <el-form-item label="验证码">
              <el-input style="width:55%" v-model="ruleForm.code" />
            </el-form-item>

            <el-form-item>
              <el-button
                class="register-button"
                type="primary"
                style="margin-left:20px"
                @click="submitForm('ruleForm')">注册</el-button>
              <el-button 
                style="margin-left:100px" 
                @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
  </div>
</template>

<script>
// import { userRegister } from '@/api/auth/auth'

export default {
  name: 'Register',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      ruleForm: {
        name: '',
        password: '',
        checkPass: '',
        mailbox:'',
        code:''
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            min: 2,
            max: 10,
            message: '长度在 2 到 10 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 20,
            message: '长度在 6 到 20 个字符',
            trigger: 'blur'
          }
        ],
        checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        mailbox: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          userRegister(this.ruleForm)
            .then((value) => {
              const { code, message } = value
              if (code === 200) {
                this.$message({
                  message: '账号注册成功',
                  type: 'success'
                })
                setTimeout(() => {
                  this.loading = false
                  this.$router.push({ path: this.redirect || '/login' })
                }, 0.1 * 1000)
              } else {
                this.$message.error('注册失败，' + message)
              }
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    onsubmit() {
       console.log('submit!');
    }
  }
}
</script>

<style scoped>
.register-container{
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


</style>