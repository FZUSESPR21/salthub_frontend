<!-- 
 * @description: 晒研论坛-后台-文章列表
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
            placeholder="请输入文章标题"
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
    <div :class="'notice'">
      <el-badge :value="12" class="item">
        <el-button size="small">待处理文章</el-button>
      </el-badge>
    </div>

    <!-- 文章列表 -->
    <el-col :span="21">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="博客 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="模块">
                <span>
                  <el-tag :type="moduleTag(props.row.module)">{{
                    props.row.module
                  }}</el-tag>
                </span>
              </el-form-item>
              <el-form-item label="点赞">
                <span>{{ props.row.likeNumber }}</span>
              </el-form-item>
              <el-form-item label="收藏">
                <span>{{ props.row.collectionNumber }}</span>
              </el-form-item>
              <el-form-item label="内容">
                <span>{{ props.row.content }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="发表时间" prop="releaseTime"> </el-table-column>
        <el-table-column label="用户 ID" prop="author"> </el-table-column>
        <el-table-column label="文章标题" prop="title" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="状态"
          prop="status"
          :filters="[
            { text: '删除', value: '删除' },
            { text: '封禁', value: '封禁' },
            { text: '正常', value: '正常' },
            { text: '树洞', value: '树洞' },
          ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
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
              @click="handleDisabled(scope.$index, scope.row)"
              >{{ isDisabled(scope.row) }}</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              :disabled="isDel(scope.row)"
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
          :page-size="pageSize"
          :total="total"
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

.notice {
  float: right;
  display: block;
  margin-right: 140px;
}
</style>

<script>
import { getAllBlog, countBlog, delBlog, banBlog, unbanBlog } from "@/api/blog";
import { getSearchList } from "@/api/postlist";
export default {
  data() {
    return {
      input: "",
      tableData: [],
      tableDataAll: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    handleDetail(index, row) {
      console.log(index, row);
    },
    handleDisabled(index, row) {
      // 封禁文章
      if (row.status != "封禁")
        banBlog({ blogId: row.id }).then((response) => {
          if (response.data.code == 200) {
            this.$message({
              message: "封禁成功",
              type: "success",
              duration: 2000,
            });
            // 刷新结果
            location.reload();
          } else {
            this.$message({
              message: "该文章已是封禁状态",
              type: "error",
              duration: 2000,
            });
          }
        });
      // 解封文章
      else
        unbanBlog({ blogId: row.id }).then((response) => {
          if (response.data.code == 200) {
            this.$message({
              message: "解封成功",
              type: "success",
              duration: 2000,
            });
            // 刷新结果
            location.reload();
          } else {
            this.$message({
              message: "该文章未处于封禁状态",
              type: "error",
              duration: 2000,
            });
          }
        });
    },
    handleDelete(index, row) {
      console.log(index, row);
      // 删除文章
      delBlog(row.id).then((response) => {
        console.log("response=>", response);
        if (response.data.code == 200) {
          this.$message({
            message: "删除成功",
            type: "success",
            duration: 2000,
          });
          // 刷新结果
          location.reload();
        } else {
          this.$message({
            message: "该文章已删除",
            type: "error",
            duration: 2000,
          });
        }
      });
    },
    // 判断是否为删除状态
    isDel(row) {
      return row.status == "删除" ? true : false;
    },
    // 按钮显示封禁或解封状态
    isDisabled(row) {
      return row.status == "封禁" ? "解封" : "封禁";
    },
    // 通过title模糊查询文章
    convert() {
      if (this.input != "") {
        // 通过title模糊查询文章
        getSearchList(this.currentPage, this.input).then((response) => {
          this.tableData = [];
          var len = response.data.data.records.length;
          var info = response.data.data.records;
          this.total = len;
          for (var i = 0; i < len; i++) {
            this.tableData.push({
              releaseTime: "",
              author: "",
              title: "",
              status: 2,
              id: "",
              module: 0,
              likeNumber: "",
              collectionNumber: "",
              content: "",
            });
            // 发表时间
            this.tableData[i].releaseTime = info[i].releaseTime;
            // 用户ID
            this.tableData[i].author = info[i].author;
            // 文章标题
            this.tableData[i].title = info[i].title;
            // 状态（ 删除 | 封禁 | 正常 | 树洞 ）
            this.tableData[i].status = this.judgeStatus(info[i].state);
            // 博客ID
            this.tableData[i].id = info[i].id;
            // 模块（ 福州大学 | 外校 | 杂谈 | 拼课 )
            this.tableData[i].module = this.judgeModule(info[i].moduleId);
            // 点赞数
            this.tableData[i].likeNumber = info[i].likeNumber;
            // 收藏数
            this.tableData[i].collectionNumber = info[i].collectionNumber;
            // 内容
            this.tableData[i].content = info[i].content;
          }
        });
      } else this.init();
    },
    handleCurrentChange: function (currentPage) {
      this.tableData = [];
      this.currentPage = currentPage;

      // 分页获取博客列表
      getAllBlog({
        // 当前页码
        current: this.currentPage,
      }).then((response) => {
        var len = response.data.data.records.length;
        var info = response.data.data.records;
        for (var i = 0; i < len; i++) {
          this.tableData.push({
            releaseTime: "",
            author: "",
            title: "",
            status: 2,
            id: "",
            module: 0,
            likeNumber: "",
            collectionNumber: "",
            content: "",
          });
          // 发表时间
          this.tableData[i].releaseTime = info[i].releaseTime;
          // 用户ID
          this.tableData[i].author = info[i].author;
          // 文章标题
          this.tableData[i].title = info[i].title;
          // 状态（ 删除 | 封禁 | 正常 | 树洞 ）
          this.tableData[i].status = this.judgeStatus(info[i].state);
          // 博客ID
          this.tableData[i].id = info[i].id;
          // 模块（ 福州大学 | 外校 | 杂谈 | 拼课 )
          this.tableData[i].module = this.judgeModule(info[i].moduleId);
          // 点赞数
          this.tableData[i].likeNumber = info[i].likeNumber;
          // 收藏数
          this.tableData[i].collectionNumber = info[i].collectionNumber;
          // 内容
          this.tableData[i].content = info[i].content;
        }
      });
    },
    // 判断模块类别
    judgeModule(moduleId) {
      if (moduleId == 0) return "福州大学";
      else if (moduleId == 1) return "外校";
      else if (moduleId == 2) return "杂谈";
      else if (moduleId == 3) return "拼课";
    },
    // 根据模块类别渲染标签颜色
    moduleTag(module) {
      if (module == "福州大学") return "warning";
      else if (module == "外校") return "success";
      else if (module == "杂谈") return "info";
      else return "";
    },
    // 判断博客状态status
    judgeStatus(state) {
      if (state == 0) return "删除";
      else if (state == 1) return "封禁";
      else if (state == 2) return "正常";
      else if (state == 3) return "树洞";
    },
    // 根据用户状态渲染标签颜色
    statusTag(status) {
      if (status == "删除") return "info";
      else if (status == "封禁") return "danger";
      else if (status == "正常") return "success";
      else if (status == "树洞") return "";
    },
    init() {
      this.tableData = [];

      // 获取博客总数
      countBlog().then((response) => {
        // this.total = response.data.data;
        this.total = 55;
      });

      // 分页获取博客列表
      getAllBlog({
        // 当前页码
        current: this.currentPage,
      }).then((response) => {
        var len = response.data.data.records.length;
        var info = response.data.data.records;
        for (var i = 0; i < len; i++) {
          this.tableData.push({
            releaseTime: "",
            author: "",
            title: "",
            status: 2,
            id: "",
            module: 0,
            likeNumber: "",
            collectionNumber: "",
            content: "",
          });
          // 发表时间
          this.tableData[i].releaseTime = info[i].releaseTime;
          // 用户ID
          this.tableData[i].author = info[i].author;
          // 文章标题
          this.tableData[i].title = info[i].title;
          // 状态（ 删除 | 封禁 | 正常 | 树洞 ）
          this.tableData[i].status = this.judgeStatus(info[i].state);
          // 博客ID
          this.tableData[i].id = info[i].id;
          // 模块（ 福州大学 | 外校 | 杂谈 | 拼课 )
          this.tableData[i].module = this.judgeModule(info[i].moduleId);
          // 点赞数
          this.tableData[i].likeNumber = info[i].likeNumber;
          // 收藏数
          this.tableData[i].collectionNumber = info[i].collectionNumber;
          // 内容
          this.tableData[i].content = info[i].content;
        }
      });
    },
    filterTag(value, row) {
      return row.status === value;
    },
  },
};
</script>