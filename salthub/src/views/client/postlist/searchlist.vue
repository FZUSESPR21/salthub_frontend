<!-- 
 * @description: 晒研论坛-搜索结果-帖子列表组件
 * @fileName: searchlist.vue 
 * @author: xiaohan 
 * @date: 2021-05-14 00:08:49 
 * @后台人员:  
 * @path:  
 * @version: V1.0.3 
!-->
<template>
  <div>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        检索到 <code>{{ query.total }}</code> 条关于
        <code class="has-text-info">{{ query.keyword }}</code> 的记录
      </div>
      <div>
        <article-list
          v-for="(item, index) in articleList"
          :key="index"
          v-bind:paper="item"
          @tag="searchByTag"
          @id="detailById"
        >
        </article-list>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
</style>

<script>
//检测屏幕滑动高度的 用于无限下拉
import { getScrollHeight, getScrollTop, getWindowHeight } from "@/utils/screen";
import articleList from "@/components/articleframe/ArticleBody";
import { getSearchList } from "@/api/postlist";
export default {
  inject: ["reload"],
  name: "Searchlist",
  components: { articleList, getSearchList },
  data() {
    return {
      articleList: [],
      query: {
        keyword: this.$route.query.key,
        current: 1, //当前页面
        size: 10, //一页的大小
        total: 0, //后台总的文章数
        totalpage: 1, //总的页面数量
      },
    };
  },
  //路由监听 解决同一界面跳转vue默认不刷新问题
  watch: {
    $route(to, from) {
      if (to.name === "Search") {
        this.reload();
      }
    },
  },
  created() {
    this.fetchList();
  },
  mounted() {
    window.addEventListener("scroll", this.load);
  },
  destroyed() {
    window.removeEventListener("scroll", this.load, false);
  },
  methods: {
    fetchList() {
      getSearchList(this.query.current, this.query.keyword).then((response) => {
        const { data } = response;
        this.query.current = data.data.current;
        if (this.query.current === 1) {
          //请求第一页就直接赋值
          this.query.total = data.data.total;
          this.query.totalpage = data.data.pages;
          this.articleList = data.data.records;
        } else {
          //将后面页码的数据和之前的数据拼合
          for (let i in data.data.records) {
            this.articleList.push(data.data.records[i]);
          }
        }
      });
    },
    //点击标题跳转详情
    detailById(id) {
      console.log(id);
      let routeData = this.$router.resolve({
        path: "/Detail",
        query: { key: id },
      });
      window.open(routeData.href, "_blank");
    },
    searchByTag(tag) {
      console.log(tag);
      this.$router.push({ path: "/searchtag?key=" + tag });
    },
    load() {
      let vm = this;
      if (getScrollTop() + getWindowHeight() >= getScrollHeight()) {
        if (vm.query.current < vm.query.totalpage) {
          //先判断下一页是否有数据
          vm.query.current += 1; //查询条件的页码+1
          this.fetchList(); //拉取数据
        } else {
          //到底了没数据了
        }
      }
    },
  },
};
</script>

<style scoped>
</style>
