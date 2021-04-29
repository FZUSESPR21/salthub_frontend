<template>
  <div>
    <div class="front-head" v-if="refresh">
      <Header></Header>
    </div>
    <div class="container context">
      <div class="columns">
        <div class="column is-three-quarters">
          <SearchList></SearchList>
        </div>
        <div class="column">
          <CardBar></CardBar>
        </div>
      </div>
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
import SearchList from '@/views/client/postlist/searchlist'
import '@/assets/app.css'

export default {
  name: "Home",
  components: {CardBar, Header,SearchList},
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
