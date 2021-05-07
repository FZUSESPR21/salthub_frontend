<!-- 
 * @description: 晒研论坛-Tag搜索结果-tag帖子列表组件
 * @fileName: searchlistTag.vue 
 * @author: 肖寒 
 * @date: 2021-05-05 09:30:49 
 * @后台人员:  
 * @path:  
 * @version: V1.0.0 
!-->
<template>
  <div>
    <el-card shadow="never">
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
import { getListByTag } from "@/api/postlist";
import articleList from "@/components/articleframe/ArticleBody";
export default {
  inject: ["reload"],
  name: "SearchlistTag",
  components: { articleList},
  data() {
    return {
      articleList: [],
      page: {
        tag: this.$route.query.key,
        current: 1, //当前页面
        totalpage: 0,//后台总的页数
        total: 0, //后台总的文章数
        tagname:''
      },
    };
  },
  //路由监听 解决同一界面跳转vue默认不刷新问题
  watch: {
    $route(to, from) {
      if (to.name === "searchtag") {
        this.reload();
      }
    },
  },
  created() {
    this.fetchList();
  },
  methods: {
    fetchList() {
      this.searchByTag(this.$route.query.key);
    },
    //根据标签检索
    searchByTag(tag) {
      console.log(tag);
      getListByTag(this.page.current,this.page.tag,).then((response) =>  {
        const { data } = response;
        console.log(data);
        this.page.current = data.data.current;
        if (this.page.current === 1) {
          //请求第一页就直接赋值
          this.page.total = data.data.total;
          this.page.totalpage = data.data.pages;
          this.articleList = data.data.records;
        } else {
          //将后面页码的数据和之前的数据拼合
          for (let i in data.data.records) {
            this.articleList.push(data.data.records[i]);
            console.log("success");
          }
        }
      })
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
    load() {
      let vm = this;
      if (getScrollTop() + getWindowHeight() >= getScrollHeight()) {
        if (vm.page.current < vm.page.totalpage) {
          //先判断下一页是否有数据
          vm.page.current += 1; //查询条件的页码+1
          console.log(vm.page.current); //打印当前页码
          this.fetchList(); //拉取数据
        } else {
          //到底了没数据了
         this.$message("到底啦~看看前面的帖子吧"); 
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
