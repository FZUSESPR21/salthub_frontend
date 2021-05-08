<!-- 
 * @description: 晒研论坛-个人信息
 * @fileName: card.vue 
 * @author: NoMornings 
 * @date: 2021-05-06 21:42:17 
 * @后台人员:  
 * @path:  /card
 * @version: V1.0.0 
!-->
<template>
  <el-card class="v-box-card">
    <!-- 个人信息 -->
    <div :class="'title'">
      <div :class="'p-info'">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          :size="70"
        ></el-avatar>
        <div :class="['column', 'info-text']">
          <p :class="'nickname'" v-cloak>昵称：{{ nickname }}</p>
          <p :class="'user-id'" v-cloak>ID：{{ userId }}</p>
          <p :class="'slogan'" v-cloak>个性签名：{{ slogan }}</p>
        </div>
      </div>
      <div :class="'v-edit'">
        <el-button
          type="info"
          icon="el-icon-edit"
          circle
          :class="'edit-btn'"
          @click="toUpdate()"
        ></el-button>
      </div>
    </div>

    <el-divider></el-divider>

    <!-- 个人收藏 -->
    <div :class="['wrap', 'columns']">
      <div :class="['blog', 'column is-three-quarters']" >
        <span :class="'collection'">我的收藏</span>
        <span :class="'my-blog'">我的帖子</span>
        <div
          :class="'blog-list'"
          v-for="(item, index) in blogList"
          :key="index"
        >
          <div :class="'type-btn'">
            <el-tag :type="getType(item.type)">{{
              getType(item.moduleId)
            }}</el-tag>
            <el-link :underline="false" class="is-size-6" @click="detailById(item.id)">
              {{ Substr(item.title, 0, 35) }}
            </el-link>
            <el-button 
              type="danger" 
              icon="el-icon-delete" 
              circle 
              class="del"
              @click="delCollection(item.id)"></el-button>
          </div>
          <el-divider></el-divider>
        </div>
        <!-- 收藏到底提示 -->
        <div :class="'v-end'">{{blogList.length==0?"你还没有收藏哦":"收藏已经到底啦"}}</div>
      </div>

      <!-- 考研倒计时 -->
      <div :class="['count-down', 'column']">
        <v-count-down></v-count-down>
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
$title-color: #03298b;
$grey: #9b9b9b;
$opacity: 0.8;
$size: 50px;

.del{
  float: right;
}

.v-box-card {
  height: auto;
  min-height: 650px;
  margin: 0 30px;
}
.title {
  display: flex;
  justify-content: space-around;
  .p-info,
  .v-edit {
    display: flex;
    align-items: center;
    .info-text {
      margin-left: 20px;
    }
    p {
      font-size: 18px;
    }
    .edit-btn {
      width: $size;
      height: $size;
    }
  }
}

.wrap {
  display: flex;
  justify-content: space-around;
  .blog {
    padding: 0 20px;
    .collection,
    .my-blog {
      cursor: pointer;
      font-size: 18px;
      padding: 0 5px;
      color: $title-color;
    }
    .collection:hover {
      opacity: $opacity;
    }
    .blog-list {
      margin-top: 20px;
      line-height: 0;
      vertical-align: center;
      .type-btn {
        padding: 0 15px;
      }
    }
    .v-end {
      color: $grey;
      text-align: center;
      padding-bottom: 10px;
    }
  }
}

[v-cloak] {
  display: none;
}
</style>

<script>
// 倒计时
import CountDownCard from "@/views/client/card/CountDown";
//检测屏幕滑动高度的 用于无限下拉
import { getScrollHeight, getScrollTop, getWindowHeight } from "@/utils/screen";
import "buefy/dist/buefy.css";
import { putInfo } from "@/api/account";
import { getCollectList } from "@/api/postlist";
import { delCollect } from "@/api/blog";
import store from "@/store";
export default {
  components: {
    "v-count-down": CountDownCard,
  },
  data() {
    return {
      userInfo:{},
      nickname: "烤盐人",
      userId: "123456",
      slogan: "努力！奋斗！",
      blogList: [],
      //记录页面信息
      page: {
        current: 1, //当前页面
        totalpage: 1, //总的页面数量
        total: 0, //后台总的文章数
      },
      blogListTitle: [],
    };
  },
  created() {
    this.init();
  },
  mounted() {
    window.addEventListener("scroll", this.load);
    this.userInfo=store.getters.user;
    this.nickname=this.userInfo.nickname;
    this.userId=this.userInfo.name;
    this.slogan=this.userInfo.slogan;
  },
  destroyed() {
    window.removeEventListener("scroll", this.load, false);
  },
  methods: {
    getType(typeid) {
      if (typeid === 0) {
        var type = "福州大学";
        return type;
      } else if (typeid === 1) {
        var type = "外校";
        return type;
      } else if (typeid === 2) {
        var type = "杂谈";
        return type;
      } else if (typeid === 3) {
        var type = "拼课";
        return type;
      }
    },
    /**
     *@functionName: toUpdate
     *@description: 跳转个人中心修改页
     *@author: NoMornings
     *@date: 2021-05-07 15:39:24
     *@version: V1.0.0
     */
    toUpdate() {
      this.$router.push({ path: this.redirect || "/updateView" });
    },
    /**
     *@functionName: init
     *@description: 显示收藏
     *@author: xiaohan
     *@date: 2021-05-07 18:39:24
     *@version: V1.0.0
     */
    init() {
      getCollectList(this.page.current).then((response) => {
        const { data } = response;
        this.page.current = data.data.current;
        if (this.page.current === 1) {
          //请求第一页就直接赋值
          this.page.total = data.data.total;
          this.page.totalpage = data.data.pages;
          this.blogList = data.data.records;
        } else {
          //将后面页码的数据和之前的数据拼合
          for (let i in data.data.records) {
            this.blogList.push(data.data.records[i]);
          }
        }
      });
    },
    /**
     *@functionName: delCollection
     *@description: 删除收藏
     *@author: xiaohan
     *@date: 2021-05-08 10:32:24
     *@version: V1.0.0
     */
    delCollection(id) {
      delCollect(id).then((response) => {
        const { data } = response;
        if (data.code == "200") {
          this.$message({
            message: "取消收藏成功！",
            type: "success",
          });
          this.page.current=1
          this.init()
        }
      });
    },
    /**
     *@functionName: load
     *@description: 无限下拉
     *@author: xiaohan
     *@date: 2021-05-07 19:20:24
     *@version: V1.0.0
     */
    load() {
      let vm = this;
      if (getScrollTop() + getWindowHeight() >= getScrollHeight()) {
        if (vm.page.current < vm.page.totalpage) {
          //先判断下一页是否有数据
          vm.page.current += 1; //查询条件的页码+1
          console.log(vm.page.current); //打印当前页码
          this.init(vm.activeName); //拉取数据
        } else {
          this.$message("到底啦~看看前面的帖子吧");
        }
      }
    },
    /**
     *@functionName: substr
     *@description: 字符串截取 包含对中文处理,str需截取字符串,start开始截取位置,n截取长度
     *@author: xiaohan
     *@date: 2021-05-07 19:21:24
     *@version: V1.0.0
     */
    Substr(str, start, n) {
      // eslint-disable-line
      if (str.replace(/[\u4e00-\u9fa5]/g, "**").length <= n) {
        return str;
      }
      let len = 0;
      let tmpStr = "";
      for (let i = start; i < str.length; i++) {
        // 遍历字符串
        if (/[\u4e00-\u9fa5]/.test(str[i])) {
          // 中文 长度为两字节
          len += 2;
        } else {
          len += 1;
        }
        if (len > n) {
          break;
        } else {
          tmpStr += str[i];
        }
      }
      return tmpStr + "...";
    },
    /**
     *@functionName: detailById
     *@description: 显示收藏详情
     *@author: xiaohan
     *@date: 2021-05-07 19:39:24
     *@version: V1.0.0
     */
    //点击标题跳转详情
    detailById(id) {
      console.log(id);
      let routeData = this.$router.resolve({
        path: "/Detail",
        query: { key: id },
      });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>