<!-- 
 * @description: 晒研论坛-社区
 * @fileName: officalnews.vue 
 * @author: 肖寒 
 * @date: 2021-06-10 22:58:01 
 * @后台人员: 
 * @path:  /news 
 * @version: V1.0.0
!-->
<template>
  <div>
    <div class="front-head" v-if="refresh">
      <Header></Header>
    </div>
    <div class="front-body">
      <div class="container context">
        <div class="columns">
          <div class="column is-three-quarters">
            <NewsList></NewsList>
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
import Header from "@/components/Layout/Header";
import CardBar from "@/views/client/card/CardBar";
import NewsList from "@/views/client/postlist/NewsList";
import Footer from "@/components/Layout/Footer";
import "@/assets/app.css";

export default {
  name: "News",
  components: { Header, CardBar, NewsList ,Footer},
  data() {
    return {
      refresh: true,
    };
  },
  created() {
    this.refreshComp();
  },
  methods: {
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
