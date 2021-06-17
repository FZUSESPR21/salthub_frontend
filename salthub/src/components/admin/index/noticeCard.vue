<!-- 
 * @description: 晒研论坛-后台首页-公告栏卡片
 * @fileName: noticeCard.vue 
 * @author: NoMornings 
 * @date: 2021-04-28 12:13:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.1 
!-->
<template>
  <el-card class="box-card">
    <div :class="'title'">
      <i class="el-icon-bell"></i>
      公告栏
    </div>
    <div :class="'wrap'">
      <div v-for="(item, index) in notice" :key="index">
        <p>{{ item.blog }}</p>
        <div :class="'divider'"></div>
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
$white: #dcdfe6;

.box-card {
  width: 275px;
  height: auto;
  margin: 0 15px 30px 15px;
  .title {
    margin: 18px;
    font-weight: lighter;
    .el-icon-bell {
      color: #409eff;
    }
  }
}
.wrap {
  margin-top: 20px;
  padding: 0 20px;
  div .divider {
    width: 100%;
    height: 1px;
    background: $white;
    margin: 5px 0;
  }
}
</style>

<script>
import { getAllNotice } from "@/api/notice";
export default {
  data() {
    return {
      // 最新通知
      notice: [
        {
          releaseTime: "2021-4-28",
          id: "KaoYanRen",
          blog: "福大计算机考研复试之人工智能分析篇",
          noticeId: "1",
          content: "最后一次！！！",
          accountName: "KaoYanRen",
        },
      ],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 获取最新通知
      getAllNotice({
        // 当前页码
        current: 1,
      }).then((response) => {
        // var len = response.data.data.records.length;
        var len = 6;
        var info = response.data.data.records;
        for (var i = 0; i < len; i++) {
          this.notice.push({
            releaseTime: "",
            id: "",
            blog: "",
            noticeId: "",
            content: "",
            accountName: "",
          });
          // 发布时间
          this.notice[i].releaseTime = info[i].releaseTime;
          // 管理员ID
          this.notice[i].id = info[i].author;
          // 通知标题
          this.notice[i].blog = info[i].title;
          // 公告ID
          this.notice[i].noticeId = info[i].id;
          // 内容
          this.notice[i].content = info[i].content;
          // 用户名
          this.notice[i].accountName = info[i].accountName;
        }
        this.notice.pop();
      });
    },
  },
};
</script>