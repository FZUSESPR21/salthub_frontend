<!-- 
 * @description: 晒研论坛-社区-帖子列表
 * @fileName: communitylist.vue 
 * @author: xiaohan 
 * @date: 2021-05-03 23:08:12 
 * @后台人员:  zouyangyi
 * @path:  
 * @version: V1.0.3 
!-->
<template>
  <div>
    <div slot="header" class="clearfix">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" :key="componentKey">
        <el-tab-pane label="福大" name="fzu">
            <article-list
              v-for="(item, index) in articleList"
              :key="index"
              v-bind:paper="item"
              @tag="searchByTag"
              @id="detailById"
            >
            </article-list>
        </el-tab-pane>
        <el-tab-pane label="外校" name="otherschool">
            <article-list
              v-for="(item, index) in articleList"
              :key="index"
              v-bind:paper="item"
              @tag="searchByTag"
              @id="detailById"
            >
            </article-list>
        </el-tab-pane>
        <el-tab-pane label="杂谈" name="nonsense">
          <article-list
            v-for="(item, index) in articleList"
            :key="index"
            v-bind:paper="item"
            @tag="searchByTag"
            @id="detailById"
          >
          </article-list>
        </el-tab-pane>
        <el-tab-pane label="拼课" name="freeclass">
          <article-list
            v-for="(item, index) in articleList"
            :key="index"
            v-bind:paper="item"
            @tag="searchByTag"
            @id="detailById"
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
import { getListInCommunity } from "@/api/postlist";
export default {
  name: "CommunityList",
  components: { articleList },
  data() {
    return {
      activeName: "fzu",
      articleList: [],
      //记录页面信息
      page: {
        current: 1, //当前页面
        size: 10, //一页的大小
        total: 0, //后台总的文章数
        totalpage: 1, //总的页面数量
      },
      modules: 0, //默认的tab是福州大学
      componentKey: 0,//用于刷新组件
    };
  },
  created() {
    this.init(this.activeName);
  },
  mounted() {
    window.addEventListener("scroll", this.load);
  },
  destroyed() {
    window.removeEventListener("scroll", this.load, false);
  },
  methods: {
    //标签切换操作
    handleClick(tab) {
      this.page.current = 1;
      this.activeName = tab.name;
      this.init(tab.name);
      // console.log(this.articleList)
      // this.forceRerender();
    },
    searchByTag(tag) {
      console.log(tag);
      this.$router.push({ path: "/searchtag?key=" + tag });
    },
    //点击标题跳转详情
    detailById(id) {
      console.log(id);
      let routeData = this.$router.resolve({
        path: "/Detail",
        query: {key: id}
      });
      window.open(routeData.href, '_blank');
    },
    //加载帖子列表
    init(tab) {
      if (tab === "fzu") {
        this.modules = 0;
        console.log(this.modules);
      } else if (tab === "otherschool") {
        this.modules = 1;
        console.log(this.modules);
      } else if (tab === "nonsense") {
        this.modules = 2;
        console.log(this.modules);
      } else if (tab === "freeclass") {
        this.modules = 3;
        console.log(this.modules);
      }
      getListInCommunity(this.page.current, this.modules).then((response) => {
        const { data } = response;
        console.log(data);
        this.page.current = data.data.current;
        if (this.page.current === 1) {
          //请求第一页就直接赋值
          this.page.total = data.data.total;
          this.page.totalpage = data.data.pages;
          this.articleList = data.data.records;
          //异步加载完文章列表之后 重新渲染tab pane
          this.forceRerender()
        } else {
          //将后面页码的数据和之前的数据拼合
          for (let i in data.data.records) {
            this.articleList.push(data.data.records[i]);
            console.log("success");
          }
        }
      });
    },
    load() {
      let vm = this;
      if (getScrollTop() + getWindowHeight() >= getScrollHeight()) {
        if (vm.page.current < vm.page.totalpage) {
          //先判断下一页是否有数据
          vm.page.current += 1; //查询条件的页码+1
          console.log(vm.page.current); //打印当前页码
          this.init(vm.activeName); //拉取数据
        } else {
          this.$message("到底啦~看看前面的帖子吧");
        }
      }
    },
    /**
     *@functionName:  forceRerender 
     *@description: 改变key值，重新渲染组件
     *@author: xiaohan
     *@date: 2021-05-05 13:31:54
     *@version: V1.0.0
    */
    forceRerender() {
      this.componentKey += 1;  
    },
  },
};
</script>