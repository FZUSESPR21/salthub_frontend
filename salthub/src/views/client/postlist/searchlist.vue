<!-- 
 * @description: 晒研论坛-搜索结果-帖子列表组件
 * @fileName: searchlist.vue 
 * @author: 肖寒 
 * @date: 2021-05-02 15:30:49 
 * @后台人员:  
 * @path:  
 * @version: V1.0.2 
!-->
<template>
  <div>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        检索到 <code>{{ list.length }}</code> 条关于
        <code class="has-text-info">{{ query.keyword }}</code> 的记录
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
                <el-button
                  type="warning"
                  icon="el-icon-star-off"
                  circle
                  size="small"
                ></el-button>
                <el-button type="info" round size="small">{{
                  item.tag
                }}</el-button>
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
.act-buttons {
  margin-top: 15px;
}
.post-title {
  margin-bottom: 15px;
  margin-top: 15px;
}
.post-main {
  margin-right: 20px;
  margin-left: 20px;
}
</style>

<script>
//检测屏幕滑动高度的 用于无限下拉
import { getScrollHeight, getScrollTop, getWindowHeight } from "@/utils/screen";
export default {
  inject: ["reload"],
  name: "Searchlist",
  components: {},
  data() {
    return {
      list: [
        {
          title: "考研该怎么准备呢",
          content:
            "经过学长一天的汇总，本文总结了大量考研优秀回答经过学长一天的汇总并加入了学长考研过程中自己的一些经验" +
            "可完全解决学弟学妹考研备考过程中的所有困惑！写在前面 : 其实我觉得学弟学妹们不需要看那么多的考研规划贴。例如在这" +
            "个问题下，已经有几十个回答，你只需要看其中的一到两篇好好地去了解学长学姐们当初考研是怎么准备的，然后心里大概有" +
            "一个谱就可以去学习了。在学习过程的中遇到什么问题，比如说，学习效率怎么提高...",
          tag: "福大",
        },
        {
          title: "2022福州大学考研指导来了，必看！！最强考研经验",
          content:
            "经过学长一天的汇总，本文总结了大量考研优秀回答经过学长一天的汇总并加入了学长考研过程中自己的一些经验" +
            "可完全解决学弟学妹考研备考过程中的所有困惑！写在前面 : 其实我觉得学弟学妹们不需要看那么多的考研规划贴。例如在这" +
            "个问题下，已经有几十个回答，你只需要看其中的一到两篇好好地去了解学长学姐们当初考研是怎么准备的，然后心里大概有" +
            "一个谱就可以去学习了。在学习过程的中遇到什么问题，比如说，学习效率怎么提高...",
          tag: "福大",
        },
        {
          title: "在福州大学复试你都经历了什么？",
          content:
            "经过学长一天的汇总，本文总结了大量考研优秀回答经过学长一天的汇总并加入了学长考研过程中自己的一些经验" +
            "可完全解决学弟学妹考研备考过程中的所有困惑！写在前面 : 其实我觉得学弟学妹们不需要看那么多的考研规划贴。例如在这" +
            "个问题下，已经有几十个回答，你只需要看其中的一到两篇好好地去了解学长学姐们当初考研是怎么准备的，然后心里大概有" +
            "一个谱就可以去学习了。在学习过程的中遇到什么问题，比如说，学习效率怎么提高...",
          tag: "福大",
        },
        {
          title: "考研到底有多累？",
          content:
            "经过学长一天的汇总，本文总结了大量考研优秀回答经过学长一天的汇总并加入了学长考研过程中自己的一些经验" +
            "可完全解决学弟学妹考研备考过程中的所有困惑！写在前面 : 其实我觉得学弟学妹们不需要看那么多的考研规划贴。例如在这" +
            "个问题下，已经有几十个回答，你只需要看其中的一到两篇好好地去了解学长学姐们当初考研是怎么准备的，然后心里大概有" +
            "一个谱就可以去学习了。在学习过程的中遇到什么问题，比如说，学习效率怎么提高...",
          tag: "福大",
        },
        {
          title: "考研每天应该学多久才能不成为炮灰?",
          content:
            "经过学长一天的汇总，本文总结了大量考研优秀回答经过学长一天的汇总并加入了学长考研过程中自己的一些经验" +
            "可完全解决学弟学妹考研备考过程中的所有困惑！写在前面 : 其实我觉得学弟学妹们不需要看那么多的考研规划贴。例如在这" +
            "个问题下，已经有几十个回答，你只需要看其中的一到两篇好好地去了解学长学姐们当初考研是怎么准备的，然后心里大概有" +
            "一个谱就可以去学习了。在学习过程的中遇到什么问题，比如说，学习效率怎么提高...",
          tag: "福大",
        },
      ],
      query: {
        keyword: this.$route.query.key,
        current: 1, //当前页面
        size: 10, //一页的大小
        total: 70, //后台总的文章数
      },
      //模拟向后台请获得的数据 用于模拟无限下拉
      //为了防止过长 暂时列两篇帖子 正常的数量应该是规定的一页的大小
      listPage2: [
        {
          title: "nextpage考研该怎么准备呢",
          content:
            "经过学长一天的汇总，本文总结了大量考研优秀回答经过学长一天的汇总并加入了学长考研过程中自己的一些经验" +
            "可完全解决学弟学妹考研备考过程中的所有困惑！写在前面 : 其实我觉得学弟学妹们不需要看那么多的考研规划贴。例如在这" +
            "个问题下，已经有几十个回答，你只需要看其中的一到两篇好好地去了解学长学姐们当初考研是怎么准备的，然后心里大概有" +
            "一个谱就可以去学习了。在学习过程的中遇到什么问题，比如说，学习效率怎么提高...",
          tag: "经验",
        },
        {
          title: "nextpage考研每天应该学多久才能不成为炮灰?",
          content:
            "经过学长一天的汇总，本文总结了大量考研优秀回答经过学长一天的汇总并加入了学长考研过程中自己的一些经验" +
            "可完全解决学弟学妹考研备考过程中的所有困惑！写在前面 : 其实我觉得学弟学妹们不需要看那么多的考研规划贴。例如在这" +
            "个问题下，已经有几十个回答，你只需要看其中的一到两篇好好地去了解学长学姐们当初考研是怎么准备的，然后心里大概有" +
            "一个谱就可以去学习了。在学习过程的中遇到什么问题，比如说，学习效率怎么提高...",
          tag: "福大",
        },
      ],
    };
  },
  //路由监听 解决同一界面跳转vue默认不刷新问题
  watch: {
    $route(to, from) {
        if(to.name==='Search'){
          this.reload()
        }
    },
  },
  created() {
    this.fetchList();
  },
  methods: {
    fetchList() {
      this.searchByKeyword();
    },
    /*
      searchByKeyword(this.query).then(value => {
        const { data } = value
        this.list = data.records
        this.query.total = data.total
        this.query.size = data.size
        this.query.current = data.current
      })
    */
    //模拟后台返回检索到的数据
    searchByKeyword() {
      if (this.query.current === 1) {
        //第一页就直接赋值
        //等式右边的值，之后有接口的话换上接口出来的数据
        this.query.total = 70; //将后台的总文章数赋值
        this.list = this.list; //赋值第一页的数据
      } else {
        //将后面页码的数据和之前的数据拼合
        for (let i in this.listPage2) {
          this.list.push(this.listPage2[i]);
          console.log("page2");
        }
        //测试下第二页的数据是否接上
        //console.log(this.List[5]);
      }
    },
    load() {
      let vm = this;
      if (getScrollTop() + getWindowHeight() >= getScrollHeight()) {
        if (vm.query.current < vm.query.total / vm.query.size) {
          //先判断下一页是否有数据
          vm.query.current += 1; //查询条件的页码+1
          console.log(vm.query.current); //打印当前页码
          this.fetchList(); //拉取数据
        } else {
          //到底了没数据了
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.load);
  },
  destroyed() {
    window.removeEventListener("scroll", this.load, false);
  },
};
</script>

<style scoped>
</style>
