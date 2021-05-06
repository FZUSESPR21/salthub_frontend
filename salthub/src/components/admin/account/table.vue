<!-- 
 * @description: 晒研论坛-后台-用户列表
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
            placeholder="搜索用户"
            v-model="input"
            clearable
            @keyup.enter.native="convert()"
            style="width: 200px"
          >
          </el-input>
        </div>

        <el-button
          type="primary"
          icon="el-icon-search"
          style="margin-left: 20px"
          @click="convert()"
          >搜索</el-button
        >
      </div>
    </div>

    <el-col :span="21">
      <!-- <el-table :data="tableData" style="width: 100%"> -->
      <el-table :data="tableDataTest" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="用户昵称">
                <span>{{ props.row.nickname }}</span>
              </el-form-item>
              <el-form-item label="用户 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="状态">
                <span>{{ props.row.status }}</span>
              </el-form-item>
              <el-form-item label="最新发帖">
                <span>{{ props.row.blog }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="用户昵称" prop="nickname"> </el-table-column>
        <el-table-column label="用户 ID" prop="id"> </el-table-column>
        <el-table-column label="最新发帖" prop="blog"> </el-table-column>
        <el-table-column label="状态" prop="status"> </el-table-column>
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
              @click="handleDisabled(scope.$index, scope.row)"
              >封禁</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-col>

    <el-col :span="21" :class="'center'">
      <div class="block p-center pagination">
        <el-pagination
          layout="prev, pager, next"
          :total="this.tableDataAll.length"
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
</style>

<script>
//测试用blog接口，待后期替换为管理员获取用户列表接口
import { getBlogByAccount } from "@/api/blog";
// import { getAccount } from "@/api/account";
import store from "@/store";

export default {
  data() {
    return {
      input: "",
      //用blog接口的测试数据
      tableDataTest: [
        {
          nickname: "wxh",
          id: "王小虎",
          blog: "福大计算机考研复试之人工智能分析篇",
          status: "正常",
        },
      ],
      tableData: [
        {
          nickname: "wxh",
          id: "王小虎",
          blog: "福大计算机考研复试之人工智能分析篇",
          status: "正常",
        },
        {
          nickname: "wxh",
          id: "王小虎",
          blog: "2022福州大学考研指导来了，必看！！...",
          status: "正常",
        },
        {
          nickname: "wxh",
          id: "王小虎",
          blog: "考研改怎么准备呢",
          status: "封禁",
        },
        {
          nickname: "wxh",
          id: "王小虎",
          blog: "考研每天应该学多久才能不成为炮灰？",
          status: "正常",
        },
      ],
      tableDataAll: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
    };
  },
  mounted() {
    getBlogByAccount({
      // 管理员测试帐号
      account: "123456",
      current: 1,
    }).then((response) => {
      var len = response.data.data.records.length;
      for (var i = 0; i < len; i++) {
        this.tableDataTest.push({
          nickname: "",
          id: "",
          blog: "",
          status: "",
        });
        // 用户昵称
        this.tableDataTest[i].nickname = response.data.data.records[i].author;
        // 用户ID
        this.tableDataTest[i].id = response.data.data.records[i].id;
        // 最新发帖
        this.tableDataTest[i].blog = response.data.data.records[i].title;
        // 状态（ 正常 | 封禁 ）
        this.tableDataTest[i].status = response.data.data.records[i].moduleId
          ? "封禁"
          : "正常";
        // console.log(this.tableDataTest[i].nickname);
        // console.log(this.tableDataTest[i].id);
        // console.log(this.tableDataTest[i].blog);
        // console.log(this.tableDataTest[i].status);
      }
      this.tableDataTest.pop();
    });
    console.log("token=>", store.getters.token);
    // getAccount(1).then((res)=>{
    //   console.log("account=>",res);
    // })
  },
  methods: {
    handleDetail(index, row) {
      console.log(index, row);
    },
    handleDisabled(index, row) {
      console.log(index, row);
    },
    convert() {},
    handleCurrentChange: function (currentPage) {
      console.log("handleCurrentChange()\n");
      // this.tableData = [];
      this.tableDataTest = [];
      this.currentPage = currentPage;
      console.log("currentPage=" + currentPage + "\n");
      var i;
      for (
        var i = (currentPage - 1) * 10, j = 0;
        j < 10 &&
        this.tableDataAll.length != 0 &&
        i + j <= this.tableDataAll.length - 1;
        j++, i++
      ) {
        console.log("i=" + i + "\n");
        // this.tableData.push(this.tableDataAll[i]);
        this.tableDataTest.push(this.tableDataAll[i]);
        console.log(
          "this.tableDataAll[i]" + JSON.stringify(this.tableDataAll[i]) + "\n"
        );
      }
      if (this.tableDataAll.length == 0) {
        // this.tableData = [];
        this.tableDataTest = [];
      }
    },
  },
};
</script>