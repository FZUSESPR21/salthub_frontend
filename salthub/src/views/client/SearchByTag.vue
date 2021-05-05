<!-- 
 * @description: 晒研论坛-tag搜索结果
 * @fileName: SearchByTag.vue 
 * @author: 肖寒 
 * @date: 2021-05-05 09:31:32 
 * @后台人员:  
 * @path:  /searchtag
 * @version: V1.0.0 
!-->
<template>
  <div>
    <div class="front-head" v-if="refresh">
      <Header></Header>
    </div>
    <div class="container context">
      <div class="columns">
        <div class="column is-three-quarters">
          <search-list-by-tag></search-list-by-tag>
        </div>
        <div class="column">
          <CardBar></CardBar>
        </div>
      </div>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped>
.front-head{
  margin-bottom: 20px;
}
</style>

<script>
import CardBar from "@/views/client/card/CardBar"
import Header from "@/components/Layout/Header";
import SearchListByTag from '@/views/client/postlist/SearchListTag'
import Footer from "@/components/Layout/Footer";
import '@/assets/app.css'
import 'buefy/dist/buefy.css'

export default {
  name: "Search",
  components: {CardBar, Header,SearchListByTag,Footer},
  data() {
    return {
      refresh: true,
    };
  },
  created() {
    this.refreshComp();
  },
  methods: {
    //解决vue页头懒加载导致组件错位的问题
    refreshComp() {
      // 移除组件
      this.refresh = false;
      // 在组件移除后，重新渲染组件
      // this.$nextTick可实现在DOM 状态更新后，执行传入的方法。
      this.$nextTick(() => {
        this.refresh = true;
      });
    },
  },  
};
</script>
