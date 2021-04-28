<template>
  <div>
    <div class="mb-5">
      <Header></Header>
    </div>
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
</template>

<script>
import CardBar from "@/views/client/card/CardBar"
import Header from "@/components/Layout/Header";
import PostList from "@/views/client/postlist/postlist";

export default {
  name: "Home",
  components: {CardBar,Header,TopicList:PostList},
  data() {
    return {
      
    };
  }
};
</script>
