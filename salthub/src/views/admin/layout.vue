<template>
    <div :class="'layout'">
        <v-header></v-header>
        <v-nav></v-nav>
        <router-view :class="'router'"></router-view>
    </div>
</template>

<style scoped>
    .layout{
        height: 100%;
    }
    .router{
        margin: 20px;
    }
</style>

<script>
  //头像
  import header from '@/components/admin/header'
  import nav from '@/components/admin/navMenu'
  export default {
    components:{
        //后台页头
        'v-header':header,
        'v-nav':nav
    }
  }
</script>