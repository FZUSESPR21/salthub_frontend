<!-- 
 * @description: 晒研论坛-首页
 * @fileName: Home.vue 
 * @author: 肖寒 
 * @date: 2021-04-29 22:57:17 
 * @后台人员:  
 * @path:  /home
 * @version: V1.0.0 
!-->
<template>
  <div>
    <div class="front-head" v-if="refresh">
      <Header></Header>
    </div>
    <div class="front-main">
      <div class="container context">
        <div class="columns">
          <div class="column is-three-quarters">
            <TopicList></TopicList>
          </div>
          <div class="column">
            <CardBar></CardBar>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped>
.front-head {
  margin-bottom: 20px;
}
</style>

<script>
import CardBar from "@/views/client/card/CardBar";
import Header from "@/components/Layout/Header";
import PostList from "@/views/client/postlist/PostList";
import Footer from "@/components/Layout/Footer";
import "@/assets/app.css";
import 'buefy/dist/buefy.css'

export default {
  name: "Home",
  components: { CardBar, Header, TopicList: PostList ,Footer},
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
