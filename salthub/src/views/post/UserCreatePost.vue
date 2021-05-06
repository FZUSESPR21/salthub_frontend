<!--
 * @description: 晒研论坛-用户发布文章
 * @fileName: UserCreatePost.vue
 * @author: 庄威龙
 * @date: 2021-04-30 17:28:15
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
          <span><i class="fa fa fa-book"> 发布文章</i></span>
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
import { getNowTime } from '@/utils/time'
import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'UserCreatePost',

  data() {
    return {
      contentEditor: {},
      ruleForm: {
        title: '', // 标题
        moduleId: [], // 标签
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
            options: [
              {
                value: '2',
                label: '求助'
              },
              {
                value: '21',
                label: '找研友'
              }
            ]
          },
          {
            label: '拼课',
            options: [
              {
                value: '3',
                label: '数学'
              },
              {
                value: '31',
                label: '英语'
              },
              {
                value: '32',
                label: '政治'
              },
              {
                value: '33',
                label: '专业课'
              }
            ]
          },
          {
            label: '院校',
            options: [{
              value: '0',
              label: '福大'
            }, {
              value: '1',
              label: '外校'
            }]
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
    /**
     *@functionName:    submitForm
     *@params1: 表单名称
     *@description: 发表文章 发布成功后跳转到文章详情页
     *@author: lw zwl
     *@date: 2021-05-05 10:49:35
     *@version: V1.0.0
    */
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
          if (this.ruleForm.moduleId == null || this.ruleForm.moduleId.length === 0) {
            alert('标签不可以为空')
            return false
          }
          this.ruleForm.content = this.contentEditor.getValue()
          var blog = {
            author: '',
            collectionNumber: '',
            content: this.ruleForm.content,
            moduleId: this.ruleForm.moduleId,
            releaseTime: getNowTime(),
            title: this.ruleForm.title,
          }
          console.log(blog)


          postBlog(blog).then((response) => {
            const { data } = response
            console.log(data.data)
            //展示刚发布的文章详情页  !!先返回首页
            setTimeout(() => {
              this.$message({
                message: "成功发表",
                type: "success",
                duration: 1000,
              });
              this.detailById(data.data)
            }, 800)
          })
        } else {
          this.$message({
            message: "发表失败",
            type: "error",
            duration: 1000,
          });
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.contentEditor.setValue('')
      this.ruleForm.moduleId = ''
    },
    detailById(id) {
      console.log(id);
      let routeData = this.$router.resolve({
        path: "/Detail",
        query: {key: id}
      });
      window.open(routeData.href, '_blank');
    },
  }
}
</script>

<style>
</style>
