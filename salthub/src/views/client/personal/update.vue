<!-- 
 * @description: 晒研论坛-个人信息修改页
 * @fileName: update.vue 
 * @author: NoMornings 
 * @date: 2021-05-07 15:41:03 
 * @后台人员:  
 * @path:  /updateView
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
          <div class="column is-9 is-offset-1">
            <!-- 个人信息修改卡片 -->
            <v-update></v-update>
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
.front-main {
  min-height: 500px;
}

body,
html {
  background-color: #f3f3f3;
}
</style>

<script>
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import updateInfo from "@/components/personal/updateInfo";
import "buefy/dist/buefy.css";

export default {
  name: "Home",
  components: { Header, Footer, "v-update": updateInfo },
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
