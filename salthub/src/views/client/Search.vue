<template>
  <div>
    <div class="front-head">
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
      
    };
  }
};
</script>
