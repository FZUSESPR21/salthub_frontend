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
              <el-input style="width:55%" ref="mailboxAdd" v-model="ruleForm.mailbox" autocomplete="off" />          
              <el-button v-if="!waitMailCode" class="code" type="primary" @click="getCode()">获取验证码</el-button>
              <el-button v-if="waitMailCode" class="code" type="primary" disabled>{{waitTime}} 秒后重新获取</el-button>
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
import { register,getMailCode } from '@/api/auth'

export default {
  name: 'Register',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      waitMailCode: false,
      waitTime: 6,
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
          register(this.ruleForm)
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
    /**
     *@functionName: getCode 
     *@description: 获取邮箱验证码
     *@author: lw
     *@date: 2021-05-01 22:00:18
     *@version: V1.0.0
    */
    getCode() {
      var verify = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      console.log(this.waitMailCode)
      if (verify.test(this.ruleForm.mailbox)) {
        // console.log('验证成功')
        this.waitTime = 60,
        this.waitMailCode = true 
        var timer = setInterval(() => {
          this.waitTime--
          if (this.waitTime <= 0) {
            this.waitMailCode = false
            clearInterval(timer) 
          }
        },1000)
        var email = {
          email: this.ruleForm.mailbox
        }
        getMailCode(email)
          .then((response) => {
            console.log(response)
          })
          .catch(() => {})
      }
      else {
      console.log(this.waitMailCode)
        console.log('验证失败')
      }
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