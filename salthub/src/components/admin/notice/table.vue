<!-- 
 * @description: 晒研论坛-后台-通知列表
 * @fileName: table.vue 
 * @author: NoMornings 
 * @date: 2021-04-28 12:13:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.1 
!-->
<template>
  <div>
    <!-- search -->
    <div :class="'search-div'">
      <div class="v-search">
        <div>
          <el-input
            placeholder="搜索通知"
            v-model="input"
            clearable
            @keyup.enter.native="convert()"
            style="width: 200px"
          >
          </el-input>
        </div>
        <!-- 搜索按钮 -->
        <el-button
          type="primary"
          icon="el-icon-search"
          style="margin-left: 20px"
          @click="convert()"
          >搜索</el-button
        >
      </div>
    </div>

    <!-- 通知列表 -->
    <el-col :span="21">
      <el-table :data="tableData" style="width: 100%">
        <!-- 展开行 -->
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="公告 ID">
                <span>{{ props.row.noticeId }}</span>
              </el-form-item>
              <el-form-item label="内容">
                <span>{{ props.row.content }}</span>
              </el-form-item>
              <el-form-item label="用户名">
                <span>{{ props.row.accountName }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="发表时间" prop="releaseTime"> </el-table-column>
        <el-table-column label="管理员 ID" prop="id"> </el-table-column>
        <el-table-column label="通知标题" prop="blog" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleDetail(scope.$index, scope.row)"
              >详情</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <!-- 分页 -->
    <el-col :span="21" :class="'center'">
      <div class="block p-center pagination">
        <el-pagination
          layout="total, prev, pager, next"
          :total="total"
          :page-size="pageSize"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :current-size="pageSize"
        >
        </el-pagination>
      </div>
    </el-col>
  </div>
</template>

<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.v-search {
  display: flex;
  justify-content: center;
  margin-left: 20px;
}
.search-div {
  float: left;
}

.p-center {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination {
  float: left;
}

.center {
  display: flex;
  justify-content: center;
}
#text {
  color: red;
}
</style>

<script>
import { getAllNotice, deleteNotice } from "@/api/notice";
import store from "@/store";
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          releaseTime: "2021-4-28",
          id: "KaoYanRen",
          blog: "福大计算机考研复试之人工智能分析篇",
          noticeId: "1",
          content: "最后一次！！！",
          accountName: "KaoYanRen",
        },
      ],
      tableDataAll: [],
      total: 0,
      currentPage: 1,
      pageSize: 20,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    handleDetail(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      // 删除公告
      deleteNotice({
        // 公告id
        id: row.noticeId,
      }).then((response) => {
        if (response.data.code == 200) {
          this.$message({
            message: "删除成功",
            type: "success",
            duration: 2000,
          });
          // 刷新结果
          location.reload();
        } else if (response.data.code == 558) {
          this.$message({
            message: "该通知id不存在",
            type: "error",
            duration: 2000,
          });
        }
      });
    },
    convert() {},
    handleCurrentChange: function (currentPage) {
      // console.log("handleCurrentChange()\n");
      this.tableData = [];
      this.currentPage = currentPage;
      // console.log("currentPage=" + currentPage + "\n");

      //获取所有公告
      getAllNotice({
        //当前页码
        current: currentPage,
      }).then((response) => {
        // console.log("notice=>", response.data.data.records);
        var len = response.data.data.records.length;
        var info = response.data.data.records;
        for (var i = 0; i < len; i++) {
          this.tableData.push({
            releaseTime: "",
            id: "",
            blog: "",
            noticeId: "",
            content: "",
            accountName: "",
          });
          // 发布时间
          this.tableData[i].releaseTime = info[i].releaseTime;
          // 管理员ID
          this.tableData[i].id = info[i].author;
          // 通知标题
          this.tableData[i].blog = info[i].title;
          // 公告ID
          this.tableData[i].noticeId = info[i].id;
          // 内容
          this.tableData[i].content = info[i].content;
          // 用户名
          this.tableData[i].accountName = info[i].accountName;
        }
        this.tableData.pop();
      });
    },
    init() {
      //获取所有公告
      getAllNotice({
        //当前页码
        current: 1,
      }).then((response) => {
        // console.log("notice=>", response.data.data.records);
        var len = response.data.data.records.length;
        var info = response.data.data.records;
        this.total = len;
        for (var i = 0; i < len; i++) {
          this.tableData.push({
            releaseTime: "",
            id: "",
            blog: "",
            noticeId: "",
            content: "",
            accountName: "",
          });
          // 发布时间
          this.tableData[i].releaseTime = info[i].releaseTime;
          // 管理员ID
          this.tableData[i].id = info[i].author;
          // 通知标题
          this.tableData[i].blog = info[i].title;
          // 公告ID
          this.tableData[i].noticeId = info[i].id;
          // 内容
          this.tableData[i].content = info[i].content;
          // 用户名
          this.tableData[i].accountName = info[i].accountName;
        }
        this.tableData.pop();
      });
      // console.log("token=>", store.getters.token);
    },
  },
};
</script>