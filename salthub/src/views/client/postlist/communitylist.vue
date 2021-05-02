<!-- 
 * @description: 晒研论坛-社区-帖子列表
 * @fileName: communitylist.vue 
 * @author: 肖寒 
 * @date: 2021-04-30 19:13:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.1 
!-->
<template>
  <div>
    <div slot="header" class="clearfix">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane name="school">
          <span slot="label">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                院校<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">福大</el-dropdown-item>
                <el-dropdown-item command="b">外校</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
          <article-list
            v-for="(item, index) in articleList"
            :key="index"
            v-bind:paper="item"
            @tag="searchByTag"
          >
          </article-list>
        </el-tab-pane>

        <el-tab-pane label="杂谈" name="nonsense">
          <article-list
            v-for="(item, index) in articleList"
            :key="index"
            v-bind:paper="item"
            @tag="searchByTag"
          >
          </article-list>
        </el-tab-pane>
        <el-tab-pane label="拼课" name="freeclass">
          <article-list
            v-for="(item, index) in articleList"
            :key="index"
            v-bind:paper="item"
            @tag="searchByTag"
          >
          </article-list>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>

<script>
//检测屏幕滑动高度的 用于无限下拉
import { getScrollHeight, getScrollTop, getWindowHeight } from "@/utils/screen";
import articleList from "@/components/articleframe/ArticleBody";
export default {
  name: "CommunityList",
  components: {articleList},
  data() {
    return {
      activeName: "school",
      articleList: [
        {
          title: "考研该怎么准备呢",
          content:
            "经过学长一天的汇总，本文总结了大量考研优秀回答经过学长一天的汇总并加入了学长考研过程中自己的一些经验" +
            "可完全解决学弟学妹考研备考过程中的所有困惑！写在前面 : 其实我觉得学弟学妹们不需要看那么多的考研规划贴。例如在这" +
            "个问题下，已经有几十个回答，你只需要看其中的一到两篇好好地去了解学长学姐们当初考研是怎么准备的，然后心里大概有" +
            "一个谱就可以去学习了。在学习过程的中遇到什么问题，比如说，学习效率怎么提高...",
          tag: "经验",
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
          tag: "经验",
        },
        {
          title: "考研每天应该学多久才能不成为炮灰?",
          content:
            "经过学长一天的汇总，本文总结了大量考研优秀回答经过学长一天的汇总并加入了学长考研过程中自己的一些经验" +
            "可完全解决学弟学妹考研备考过程中的所有困惑！写在前面 : 其实我觉得学弟学妹们不需要看那么多的考研规划贴。例如在这" +
            "个问题下，已经有几十个回答，你只需要看其中的一到两篇好好地去了解学长学姐们当初考研是怎么准备的，然后心里大概有" +
            "一个谱就可以去学习了。在学习过程的中遇到什么问题，比如说，学习效率怎么提高...",
          tag: "经验",
        },
      ],
      //模拟向后台请获得的数据 用于模拟无限下拉
      //为了防止过长 暂时列两篇帖子 正常的数量应该是规定的一页的大小
      articleListPage2: [
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
      //记录页面信息 沿用教程的
      page: {
        current: 1, //当前页面
        size: 10, //一页的大小
        total: 70, //后台总的文章数
        tab: "commendest", //标签
      },
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.load);
  },
  destroyed() {
    window.removeEventListener("scroll", this.load, false);
  },
  methods: {
    //标签切换操作
    handleClick(tab, event) {
      this.page.current = 1;
      this.activeName = tab.name;
      this.init(tab.name);
    },
    //下拉院校操作
    handleCommand(command) {
      console.log("click on item " + command);
    },
    searchByTag(tag) {
      console.log(tag);
      this.$router.push({ path: "/Search?key=" + tag });
    },
    //加载帖子列表
    init(tab) {
      /*接口接数据 （暂时）
      getList(this.page.current, this.page.size, tab).then((response) => {
        const { data } = response
        this.page.current = data.current
        this.page.total = data.total
        this.page.size = data.size
        this.articleList = data.records
      })
      */
      //暂时没有接接口 构造一个函数模拟无限下拉
      this.getlist();
    },
    //模拟获得后台数据后处理
    getlist() {
      if (this.page.current === 1) {
        //第一页就直接赋值
        //等式右边的值，之后有接口的话换上接口出来的数据
        this.page.total = 70; //将后台的总文章数赋值
        this.articleList = this.articleList; //赋值第一页的数据
      } else {
        //将后面页码的数据和之前的数据拼合
        for (let i in this.articleListPage2) {
          this.articleList.push(this.articleListPage2[i]);
          console.log("page2");
        }
        //测试下第二页的数据是否接上
        //console.log(this.articleList[5]);
      }
    },
    load() {
      let vm = this;
      if (getScrollTop() + getWindowHeight() >= getScrollHeight()) {
        if (vm.page.current < vm.page.total / vm.page.size) {
          //先判断下一页是否有数据
          vm.page.current += 1; //查询条件的页码+1
          console.log(vm.page.current); //打印当前页码
          this.init(vm.activeName); //拉取数据
        } else {
          //到底了没数据了
        }
      }
    },
  },
};
</script>