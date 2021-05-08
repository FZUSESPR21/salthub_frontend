<!--
 * @description: 晒研论坛-管理员发布文章
 * @fileName: createpost.vue
 * @author: 庄威龙
 * @date: 2021-04-30 17:29:07
 * @后台人员:
 * @path:
 * @version: V1.0.0
!-->
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
          <span><i class="fa fa fa-book" style="font-size:24px;font-weight: bold;font-style:normal"> 发布官方文章</i></span>
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
                placeholder="输入主题名称"
              />
            </el-form-item>

            <p style="font-size:18px">内容</p>
            <!--Markdown-->
            <div id="vditor" />

            <p style="font-size:22px">Tag</p>
            <el-select v-model="ruleForm.tags" placeholder="请选择">
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
            <el-select v-model="ruleForm.tagId" placeholder="请选择">
              <el-option-group
                v-for="group in options2"
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
                >立即创建
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

import { postBlog } from '@/api/blog'

import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'createpost',

  data() {
    return {
      contentEditor: {},
      ruleForm: {
        title: '', // 标题
        tags: [], // 标签
        content: '' // 内容
      },
      rules: {
        title: [
          { required: true, message: '请输入话题名称', trigger: 'blur' },
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
            label: '杂谈',
            options: [{
              value: 'Shanghai',
              label: '求助'
            }, {
              value: 'Beijing',
              label: '找研友'
            }, {
              value: 'aaaaaa',
              label: '出清'
            }
            ]
          },
          {
            label: '拼课',
            options: [{
              value: 'Chengdu',
              label: '数学'
            }, {
              value: 'Shenzhen',
              label: '英语'
            }, {
              value: 'Guangzhou',
              label: '政治'
            }, {
              value: 'Dalian',
              label: '专业课'
            }]
          },
          {
            label: '院校',
            options: [{
              value: 'Chengdu',
              label: '福大'
            }, {
              value: 'Shenzhen',
              label: '外校'
            }]
          },
        ],
        options2: [
          {
            label: 'tagId',
            options: [
              {
                value: 'fuda',
                label: '福大'
              },
              {
                value: 'waixiao',
                label: '外校'
              },
              {
                value: 'zatan',
                label: '杂谈'
              },
              {
                value: 'pingke',
                label: '拼课'
              },
            ]
          },
        ],
    }
  },
  mounted() {
    this.contentEditor = new Vditor('vditor', {
      height: 500,
      placeholder: '此处为话题内容……',
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
          if (this.ruleForm.tags == null || this.ruleForm.tags.length === 0) {
            alert('标签不可以为空')
            return false
          }
          this.ruleForm.content = this.contentEditor.getValue()

          postBlog(this.ruleForm).then((response) => {
            const { data } = response
            setTimeout(() => {
              this.$router.push({
                name: 'post-detail',
                params: { id: data.id }
              })
            }, 800)
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
