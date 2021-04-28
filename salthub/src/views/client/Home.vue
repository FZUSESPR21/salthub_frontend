<template>
  <div>
    <div class="mb-5">
      <Header></Header>
    </div>
    <div class="container context">
      <div class="columns">
        <div class="column is-three-quarters">
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

export default {
  name: "Home",
  components: {CardBar,Header},
  data() {
    return {
      
    };
  }
};
</script>
