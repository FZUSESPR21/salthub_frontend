<!-- 
 * @description: 晒研论坛-搜索结果-帖子列表组件
 * @fileName: searchlist.vue 
 * @author: 肖寒 
 * @date: 2021-04-29 23:01:24 
 * @后台人员:  
 * @path:  
 * @version: V1.0.0 
!-->
<template>
  <div>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        检索到 <code>{{ list.length }}</code>
        条记录
      </div>
      <div>
        <article v-for="(item, index) in list" :key="index" class="media">
          <div class="media-content">
                <div class="post-main">
                    <p class="post-title">  
                      <span class="is-size-4">{{ item.title }}</span>
                    </p>
                    <p class="post-content">
                      <span class="is-size-6">{{ item.content }}</span>
                    </p>
                    <div class="act-buttons">
                      <el-button type="primary" round size="small">点赞</el-button>
                      <el-button type="warning" icon="el-icon-star-off" circle size="small"></el-button>
                      <el-button type="info" round size="small">{{ item.tag }}</el-button>
                    </div>
                </div>

          </div>
          <div class="media-right" />
        </article>
      </div>

    </el-card>
  </div>
</template>

<style scoped>
.act-buttons{
  margin-top: 15px;
}
.post-title{
  margin-bottom: 15px;
  margin-top: 15px;
}
.post-main{
  margin-right: 20px;
  margin-left: 20px;
}
</style>

<script>

export default {
  name: 'Searchlist',
  components: {  },
  data() {
    return {
      list: [
          {
            title:"考研该怎么准备呢",
            content:"经过学长一天的汇总，本文总结了大量考研优秀回答经过学长一天的汇总并加入了学长考研过程中自己的一些经验"+
            "可完全解决学弟学妹考研备考过程中的所有困惑！写在前面 : 其实我觉得学弟学妹们不需要看那么多的考研规划贴。例如在这"+
            "个问题下，已经有几十个回答，你只需要看其中的一到两篇好好地去了解学长学姐们当初考研是怎么准备的，然后心里大概有"+
            "一个谱就可以去学习了。在学习过程的中遇到什么问题，比如说，学习效率怎么提高...",
            tag:"福大"
          },
          {
            title:"2022福州大学考研指导来了，必看！！最强考研经验",
            content:"经过学长一天的汇总，本文总结了大量考研优秀回答经过学长一天的汇总并加入了学长考研过程中自己的一些经验"+
            "可完全解决学弟学妹考研备考过程中的所有困惑！写在前面 : 其实我觉得学弟学妹们不需要看那么多的考研规划贴。例如在这"+
            "个问题下，已经有几十个回答，你只需要看其中的一到两篇好好地去了解学长学姐们当初考研是怎么准备的，然后心里大概有"+
            "一个谱就可以去学习了。在学习过程的中遇到什么问题，比如说，学习效率怎么提高...",
            tag:"福大"
          },
          {
            title:"在福州大学复试你都经历了什么？",
            content:"经过学长一天的汇总，本文总结了大量考研优秀回答经过学长一天的汇总并加入了学长考研过程中自己的一些经验"+
            "可完全解决学弟学妹考研备考过程中的所有困惑！写在前面 : 其实我觉得学弟学妹们不需要看那么多的考研规划贴。例如在这"+
            "个问题下，已经有几十个回答，你只需要看其中的一到两篇好好地去了解学长学姐们当初考研是怎么准备的，然后心里大概有"+
            "一个谱就可以去学习了。在学习过程的中遇到什么问题，比如说，学习效率怎么提高...",
            tag:"福大"
          },
          {
            title:"考研到底有多累？",
            content:"经过学长一天的汇总，本文总结了大量考研优秀回答经过学长一天的汇总并加入了学长考研过程中自己的一些经验"+
            "可完全解决学弟学妹考研备考过程中的所有困惑！写在前面 : 其实我觉得学弟学妹们不需要看那么多的考研规划贴。例如在这"+
            "个问题下，已经有几十个回答，你只需要看其中的一到两篇好好地去了解学长学姐们当初考研是怎么准备的，然后心里大概有"+
            "一个谱就可以去学习了。在学习过程的中遇到什么问题，比如说，学习效率怎么提高...",
            tag:"福大"
          },
          {
            title:"考研每天应该学多久才能不成为炮灰?",
            content:"经过学长一天的汇总，本文总结了大量考研优秀回答经过学长一天的汇总并加入了学长考研过程中自己的一些经验"+
            "可完全解决学弟学妹考研备考过程中的所有困惑！写在前面 : 其实我觉得学弟学妹们不需要看那么多的考研规划贴。例如在这"+
            "个问题下，已经有几十个回答，你只需要看其中的一到两篇好好地去了解学长学姐们当初考研是怎么准备的，然后心里大概有"+
            "一个谱就可以去学习了。在学习过程的中遇到什么问题，比如说，学习效率怎么提高...",
            tag:"福大"
          }
      ],
      query: {
        keyword: "福大",
        total: 5
      }
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    fetchList() {
    }
  }
}
</script>

<style scoped>

</style>
