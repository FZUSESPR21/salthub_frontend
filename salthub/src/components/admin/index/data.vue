<!-- 
 * @description: 晒研论坛-后台首页-数据统计卡片
 * @fileName: data.vue 
 * @author: NoMornings 
 * @date: 2021-04-28 12:13:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.1 
!-->
<template>
  <el-card class="box-card">
    <div :class="'title'">
      <i class="el-icon-s-marketing"></i>
      数据统计
    </div>
    <div :class="'wrap'">
      <div :class="'rowcard'">
        <div :class="'item'">
          <div class="i-title">
            <span>用户统计</span>
            <el-tag size="mini">实时</el-tag>
          </div>
          <div class="i-data">
            <span>{{ userNum }}</span>
          </div>
          <div class="i-detail">
            <span>当前分类总记录数</span>
          </div>
        </div>
        <div :class="'item'">
          <div class="i-title">
            <span>文章统计</span>
            <el-tag type="warning" size="mini">实时</el-tag>
          </div>
          <div class="i-data">
            <span>{{ blogNum }}</span>
          </div>
          <div class="i-detail">
            <span>当前分类总记录数</span>
          </div>
        </div>
      </div>
      <div :class="'rowcard'">
        <div :class="'item'">
          <div class="i-title">
            <span>昨日新增用户数</span>
            <el-tag type="success" size="mini">实时</el-tag>
          </div>
          <div class="i-data">
            <span>{{ userNum }}</span>
          </div>
          <div class="i-detail">
            <span>当前分类总记录数</span>
          </div>
        </div>
        <div :class="'item'">
          <div class="i-title">
            <span>今日新增文章数</span>
            <el-tag type="danger" size="mini">实时</el-tag>
          </div>
          <div class="i-data">
            <span>{{ intradayBlog }}</span>
          </div>
          <div class="i-detail">
            <span>当前分类总记录数</span>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
$grey: #dddddd;
.text {
  font-size: 14px;
}

.box-card {
  width: 595px;
  height: auto;
  margin: 30px 15px;
  .title {
    margin: 18px;
    font-weight: lighter;
    .el-icon-s-marketing {
      color: #409eff;
    }
  }
}

.rowcard {
  display: flex;
  justify-content: center;

  .item {
    padding: 18px 0;
    margin: 5px 10px;
    border-radius: 3px;
    background: $grey;
    width: 240px;
    height: auto;
    font-size: 12px;
    .i-title {
      display: flex;
      justify-content: space-between;
      margin: 0 20px;
    }
    .i-data {
      font-size: 20px;
      font-weight: 500;
      margin: 0 20px;
    }
    .i-detail {
      display: flex;
      justify-content: baseline;
      margin: 0 20px;
    }
  }
}
</style>

<script>
import { countAccount } from "@/api/account";
import { countBlog, intradayBlog } from "@/api/blog";
export default {
  data() {
    return {
      userNum: 0,
      blogNum: 0,
      intradayUser: 0,
      intradayBlog: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 获取用户个数
      countAccount().then((response) => {
        this.userNum = response.data.data;
        // console.log("countAccount()=>", response.data.data);
      });

      // 获取博客总数
      countBlog().then((response) => {
        this.blogNum = response.data.data;
        // console.log("countBlog()=>", response.data.data);
      });

      // 获取当日博客数
      intradayBlog().then((response) => {
        this.intradayBlog = response.data.data;
        // console.log("intradayBlog()=>", response.data.data);
      });
    },
  },
};
</script>