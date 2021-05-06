<template>
  <div class="columns">
    <div class="column is-full">
      <el-card
        class="box-card"
        shadow="never"
      >
        <div
          slot="header"
          class="clearfix"
        >
          <span><i class="fa fa fa-book" style="font-size:24px;font-weight: bold;font-style:normal"> 发布通知</i></span>
        </div>
        <div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            class="demo-ruleForm"
          >
            <p style="font-size:18px">标题</p>
            <el-form-item prop="title">
              <el-input
                v-model="ruleForm.title"
                placeholder="输入通知名称"
              />
            </el-form-item>

            <p style="font-size:18px">内容</p>
            <!--Markdown-->
            <div id="vditor" />

            <p style="font-size:18px">通知对象</p>
            <el-select v-model="ruleForm.moduleId" placeholder="请选择">
              <el-option-group
                v-for="group in options"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-option-group>
            </el-select>

            <div style="padding-top:20px">
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('ruleForm')"
                >立即发布
                </el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>

import { postNotice } from '@/api/notice'
import store from '@/store'
import { getNowTime } from '@/utils/time'

import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'createnotice',

  data() {
    return {
      contentEditor: {},
      ruleForm: {
        title: '', // 标题
        content: '' // 内容
      },
      rules: {
        title: [
          { required: true, message: '请输入通知名称', trigger: 'blur' },
          {
            min: 1,
            max: 25,
            message: '长度在 1 到 25 个字符',
            trigger: 'blur'
          }
        ]
      },
      options: [
          {
            label: '学院',
            options: [{
              value: 'Shanghai',
              label: '计算机学院'
            }, {
              value: 'Beijing',
              label: '电子信息学院'
            }, {
              value: 'aaaaaa',
              label: '化学学院'
            }, {
              value: 'aaaaaa',
              label: '电气学院'
            },{
              value: 'aaaaaa',
              label: '法学院'
            }, {
              value: 'aaaaaa',
              label: '物理与信息工程学院'
            }, {
              value: 'aaaaaa',
              label: '马克思学院'
            }
            ]
          },
          {
            label: '学校',
            options: [{
              value: 'Chengdu',
              label: '福大'
            }, {
              value: 'Shenzhen',
              label: '外校'
            }
            ]
          },
          {
            label: '身份',
            options: [{
              value: 'VIP',
              label: ''
            }, {
              value: 'Shenzhen',
              label: '普通用户'
            }]
          },
        ],
    }
  },
  mounted() {
    this.contentEditor = new Vditor('vditor', {
      height: 500,
      placeholder: '此处为通知内容……',
      theme: 'classic',
      counter: {
        enable: true,
        type: 'markdown'
      },
      preview: {
        delay: 0,
        hljs: {
          style: 'monokai',
          lineNumber: true
        }
      },
      tab: '\t',
      typewriterMode: true,
      toolbarConfig: {
        pin: true
      },
      cache: {
        enable: false
      },
      mode: 'sv'
    })
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (
            this.contentEditor.getValue().length === 1 ||
            this.contentEditor.getValue() == null ||
            this.contentEditor.getValue() === ''
          ) {
            alert('话题内容不可为空')
            return false
          }
          this.ruleForm.content = this.contentEditor.getValue()

          // console.log(this.ruleForm)
          // console.log(store.getters.user.name)
          var params = {
            name: store.getters.user.name
          }
          var data = {
            accountName: "***",
            author: store.getters.user.name,
            // author: "123456",
            content: this.ruleForm.content,
            releaseTime: getNowTime(),
            title: this.ruleForm.title,
          }
          console.log(params)
          console.log(data)
          postNotice(params, data).then((response) => {
            const { data } = response
            this.$message({
              message: "发布成功",
              type: "success",
              duration: 2000,
            });
            setTimeout(() => {
              this.loading = false;
              this.$router.push({ path: this.redirect || "/admin/notice" });
            }, 0.5 * 1000);
          })

        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.contentEditor.setValue('')
      this.ruleForm.tags = ''
    }
  }
}
</script>

<style scoped>
</style>
