<!-- 
 * @description: 晒研论坛-首页-官方帖子列表组件
 * @fileName: newslist.vue 
 * @author: 肖寒 
 * @date: 2021-06-10 21:47:14 
 * @后台人员:  
 * @path:  
 * @version: V1.0.0
!-->
<template>
  <div>
    <el-card>
      <div slot="header">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="资讯" name="newest">
            <div v-if="activeName === 'newest'">
              <article-list
                v-for="(item, index) in articleList"
                :key="index"
                v-bind:paper="item"
                @tag='searchByTag'
                @id="detailById"
              >
              </article-list>
            </div>
          </el-tab-pane>
        </el-tabs>
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
import  articleList  from "@/components/articleframe/ArticleBody";
export default {
  name: "NewsList",
  components: {articleList},
  data() {
    return {
      activeName: "newest",
      articleList: [],
      //记录页面信息
      page: {
        current: 0, //当前页面
        totalpage:1,//总的页面数量
        total: 0, //后台总的文章数
        tab: "newest", //标签
      },
    };
  },
  created() {
    this.init(this.activeName)
  },
  methods: {
    //处理标签页切换
    handleClick(tab) {
      this.page.current = 0;
      this.activeName = tab.name;
      this.init();
    },
    //根据标签检索
    searchByTag() {
      let tag = 2
      getListByTag(this.page.current,tag).then((response) =>  {
        const { data } = response;
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
    //加载帖子列表
    init() {
        this.searchByTag();
    },
    load() {
      let vm = this;
      if (getScrollTop() + getWindowHeight() >= getScrollHeight()) {
        if (vm.page.current < vm.page.totalpage) {
          //先判断下一页是否有数据
          vm.page.current += 1; //查询条件的页码+1
          this.init(); //拉取数据
        } else {
        }
      }
    },
  },
  create() {
    this.init(); //拉取数据
  },
  mounted() {
    window.addEventListener("scroll", this.load);
  },
  destroyed() {
    window.removeEventListener("scroll", this.load, false);
  },
};
</script>