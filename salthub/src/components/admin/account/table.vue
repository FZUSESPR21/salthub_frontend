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

    <!-- 用户列表 -->
    <el-col :span="21">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="用户昵称">
                <span>{{ props.row.nickname }}</span>
              </el-form-item>
              <el-form-item label="用户 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="email">
                <span>{{ props.row.email }}</span>
              </el-form-item>
              <el-form-item label="权限">
                <span>
                  <el-tag :type="authTag(props.row.auth)">{{
                    props.row.auth
                  }}</el-tag>
                </span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="用户昵称" prop="nickname"> </el-table-column>
        <el-table-column label="用户 ID" prop="id"> </el-table-column>
        <el-table-column label="最新发帖" prop="blog"> </el-table-column>
        <el-table-column label="状态" prop="status">
          <template slot-scope="scope">
            <el-tag :type="statusTag(scope.row.status)">{{
              scope.row.status
            }}</el-tag>
          </template>
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
              @click="handleDisabled(scope.$index, scope.row)"
              >{{ isDisabled(scope.row) }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <!-- 分页 -->
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
import { getAccount, banAccount, unbanAccount } from "@/api/account";
import store from "@/store";

export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          nickname: "烤盐人",
          id: "KaoYanRen",
          blog: "福大计算机考研复试之人工智能分析篇",
          status: "正常",
          email: "",
          auth: 4,
        },
      ],
      tableDataAll: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
    };
  },
  mounted() {
    //获取用户列表
    getAccount({
      //当前页码
      current: 1,
    }).then((response) => {
      // console.log("account=>", response.data.data.records);
      var len = response.data.data.records.length;
      var info = response.data.data.records;
      for (var i = 0; i < len; i++) {
        this.tableData.push({
          nickname: "",
          id: "",
          blog: "",
          status: "",
          email: "",
          auth: 4,
        });
        // 用户昵称
        this.tableData[i].nickname = info[i].nickname;
        // 用户ID
        this.tableData[i].id = info[i].name;
        // 最新发帖
        this.tableData[i].blog = info[i].slogan;
        // 状态（ 正常 | 封禁 | 注销 ）
        this.tableData[i].status = this.judgeStatus(info[i].roleId);
        // 邮箱
        this.tableData[i].email = info[i].email;
        // 权限
        this.tableData[i].auth = this.judgeAuth(info[i].roleId);
        // console.log(this.tableData[i].nickname);
        // console.log(this.tableData[i].id);
        // console.log(this.tableData[i].blog);
        // console.log(this.tableData[i].status);
      }
      this.tableData.pop();
    });
    // console.log("token=>", store.getters.token);
  },
  methods: {
    handleDetail(index, row) {
      console.log(index, row);
    },
    handleDisabled(index, row) {
      console.log(index, row);
      // 封禁用户
      if (row.status != "封禁")
        banAccount({ name: row.id }).then((response) => {
          if (response.data.code == 200) {
            this.$message({
              message: "封禁成功",
              type: "success",
              duration: 2000,
            });
            // 刷新结果
            location.reload();
          } else if (response.data.code == 563) {
            this.$message({
              message: "该账号已是封禁状态",
              type: "error",
              duration: 2000,
            });
          }
        });
      // 解封用户
      else
        unbanAccount({ name: row.id }).then((response) => {
          if (response.data.code == 200) {
            this.$message({
              message: "解封成功",
              type: "success",
              duration: 2000,
            });
            // 刷新结果
            location.reload();
          } else if (response.data.code == 563) {
            this.$message({
              message: "该账号未处于封禁状态",
              type: "error",
              duration: 2000,
            });
          }
        });
    },
    // 按钮显示封禁或解封状态
    isDisabled(row) {
      return row.status == "封禁" ? "解封" : "封禁";
    },
    convert() {},
    handleCurrentChange: function (currentPage) {
      console.log("handleCurrentChange()\n");
      this.tableData = [];
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
        this.tableData.push(this.tableDataAll[i]);
        console.log(
          "this.tableDataAll[i]" + JSON.stringify(this.tableDataAll[i]) + "\n"
        );
      }
      if (this.tableDataAll.length == 0) {
        this.tableData = [];
      }
    },
    // 判断用户权限
    judgeAuth(roleId) {
      if (roleId == 0) return "注销用户";
      else if (roleId == 1) return "封禁用户";
      else if (roleId == 2) return "游客用户";
      else if (roleId == 3) return "普通用户";
      else if (roleId == 4) return "管理员用户";
    },
    // 根据用户权限渲染标签颜色
    authTag(auth) {
      if (auth == "注销用户") return "info";
      else if (auth == "封禁用户") return "danger";
      else if (auth == "管理员用户") return "success";
      else return "";
    },
    // 判断用户状态
    judgeStatus(roleId) {
      if (roleId == 0) return "注销";
      else if (roleId == 1) return "封禁";
      else return "正常";
    },
    // 根据用户状态渲染标签颜色
    statusTag(status) {
      if (status == "注销") return "info";
      else if (status == "封禁") return "danger";
      else return "success";
    },
  },
};
</script>