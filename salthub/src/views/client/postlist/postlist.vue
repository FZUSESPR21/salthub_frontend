<!-- 
 * @description: 晒研论坛-首页-帖子列表组件
 * @fileName: postlist.vue 
 * @author: 肖寒 
 * @date: 2021-05-04 14:08:14 
 * @后台人员:  lixingyuan
 * @path:  
 * @version: V1.0.2 
!-->
<template>
  <div>
    <el-card>
      <div slot="header">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="推荐" name="commendest">
            <div v-if="activeName === 'commendest'">
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
          <el-tab-pane label="热榜" name="hotest">
            <div v-if="activeName === 'hotest'">
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
          <el-tab-pane label="精品" name="best">
            <div v-if="activeName === 'best'">
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
import { getListInCommend } from "@/api/postlist";
import  articleList  from "@/components/articleframe/ArticleBody";
export default {
  name: "TopicList",
  components: {articleList},
  data() {
    return {
      activeName: "commendest",
      articleList: [],
      //记录页面信息
      page: {
        current: 0, //当前页面
        totalpage:1,//总的页面数量
        total: 0, //后台总的文章数
        tab: "commendest", //标签
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
      this.init(this.activeName);
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
    init(activeName) {
      let params = {page:this.page.current}
      getListInCommend(params).then((response) => {
        const { data } = response;
        console.log(data)
          this.page.current = data.data.currentPage;
          if(this.page.current === 0){
            //请求第一页就直接赋值
            this.page.totalpage = data.data.totalPage;
            this.articleList = data.data.blogList[0];
          } else {
            //将后面页码的数据和之前的数据拼合
            for (let i in data.data.records) {
              this.articleList.push(data.data.blogList[0]);
              console.log("success");
            }
          }
      })
    },
    load() {
      let vm = this;
      if (getScrollTop() + getWindowHeight() >= getScrollHeight()) {
        if (vm.page.current < vm.page.totalpage) {
          //先判断下一页是否有数据
          vm.page.current += 1; //查询条件的页码+1
          console.log(vm.page.current); //打印当前页码
          this.init(this.activeName); //拉取数据
        } else {
          this.$message('到底啦~看看前面的帖子吧');
        }
      }
    },
  },
  create() {
    this.init(this.activeName); //拉取数据
  },
  mounted() {
    window.addEventListener("scroll", this.load);
  },
  destroyed() {
    window.removeEventListener("scroll", this.load, false);
  },
};
</script>