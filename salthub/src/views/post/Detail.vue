<!--
 * @description: 晒研论坛-文章详情
 * @fileName: Detail.vue
 * @author: 庄威龙
 * @date: 2021-04-30 17:26:37
 * @后台人员:
 * @path:
 * @version: V1.0.0
!-->
<template>
  <div
    class="detail"
    style="background-color: #f3f3f3; position: absolute; top: 0; width: 100%"
  >
    <Header></Header>
    <div class="main">
      <el-container style="background-color: white">
        <el-header style="font-size: 30px; height: 100%">
          <div
            style="
              padding-top: 20px;
              padding-bottom: 20px;
              word-wrap: break-word;
            "
          >
            {{ blog.title }}
          </div>
        </el-header>
        <hr />
        <el-container>
          <el-aside width="200px">
            <div style="padding-left: 20px; padding-top: 20px">
              <img
                :src="url"
                alt="头像"
                style="
                  width: 100px;
                  height: 100px;
                  margin: 0;
                  padding: 0;
                  line-height: 0;
                  position: relative;
                  left: 35px;
                "
              />
              <div
                style="
                  font-size: 22px;
                  width: 100%;
                  padding: 0;
                  margin: 0;
                  word-break: break-all;
                  white-space: normal;
                  line-height: 20px;
                  position: relative;
                  top: -70px;
                  text-align: center;
                "
              >
                {{ blog.author }}
              </div>
            </div>
          </el-aside>
          <el-container>
            <el-main style="font-size: 18px">
              <!--Markdown-->
              <div id="preview" />
            </el-main>
            <el-footer height="120px">
              <div style="float: right">
                <el-button round style="background-color: #ff4949; color: white"
                  >点赞</el-button
                >
                <el-button
                  type="warning"
                  icon="el-icon-star-off"
                  circle
                  @click="collection()"
                ></el-button>
                <br />
                <span style="font-size: 15px">{{ blog.releaseTime }}</span>
                <el-button
                  type="text"
                  style="color: black"
                  @click="tipOff()"
                >举报</el-button>
              </div>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
      <div>
        <v-Comments :blogId="this.getRequest().key"></v-Comments>
      </div>
      <hr />
      <div>
        <v-CreateComment :blogId="this.getRequest().key"></v-CreateComment>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Layout/Header";
import { mapGetters } from "vuex";
import { getBlogById } from "@/api/blog";
import { collectBlog } from "@/api/blog";
import { tipOffBlog } from '@/api/blog'
import CreateComment from "@/components/Comment/CreateComment";
import Comments from "@/components/Comment/Comments";
import Vditor from "vditor";
import "vditor/dist/index.css";
import store from "@/store";
export default {
  name: "Detail",
  components: {
    Header,
    "v-CreateComment": CreateComment,
    "v-Comments": Comments,
    Vditor,
  },
  computed: {
    ...mapGetters(["token", "user"]),
  },
  data() {
    const blog = {
      author: "",
      title: "",
      content: "",
      releaseTime: "",
      likeNumber: "",
    };
    return {
      blog,
      title: "",
      content: "",
      authorName: "",
      // avatar
      url:
        store.getters.user == null
          ? "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          : "https://47.100.89.20" + store.getters.user.avatar,
    };
  },
  created() {
    this.getBlogDetails();
  },
  methods: {
    renderMarkdown(md) {
      Vditor.preview(document.getElementById("preview"), md, {
        hljs: { style: "github" },
      });
    },
    /**
     *@functionName:  collection
     *@description: 收藏
     *@author: xiaohan
     *@date: 2021-05-07 21:29:41
     *@version: V1.0.0
     */
    collection() {
      collectBlog(this.getRequest().key).then((response) => {
        const { data } = response;
        if (data.code == "200") {
          this.$message({
            message: "收藏成功！",
            type: "success",
          });
        }
      });
    },
    /**
     *@functionName:  tipOff
     *@description: 举报
     *@author: 庄威龙
     *@date: 2021-6-6 11:15:41
     *@version: V1.0.0
     */
    tipOff() {
      tipOffBlog(this.getRequest().key).then((response) => {
        const { data } = response;
        if (data.code == "200") {
          this.$message({
            message: "举报成功！",
            type: "success",
          });
        }
      });
    },
    /**
     *@functionName:  getBlogDetails
     *@description: 获取文章详细信息   !!接口还没换 !!数据还是写死 需要到时候父子传参调整
     *@author: lw
     *@date: 2021-05-04 16:29:41
     *@version: V1.0.0
     */
    getBlogDetails() {
      var params = {
        blogId: this.getRequest().key,
        // blogId: "7",
      };
      getBlogById(params).then((response) => {
        console.log(response.data.data);
        this.blog = response.data.data;
        this.renderMarkdown(this.blog.content);
      });
    },
    /**
     *@functionName:  getRequest
     *@description: 获取请求参数对象
     *               使用方法 getRequest().参数名
     *@author: lw
     *@date: 2021-05-05 15:40:46
     *@version: V1.0.0
     */
    getRequest() {
      let url = location.href; //获取url中"?"符后的字串
      // console.log(location.href)
      var theRequest = new Object();
      // console.log(url.indexOf("?"))
      if (url.indexOf("?") != -1) {
        var str = url.substr(url.indexOf("?") + 1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
      }
      return theRequest;
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 50px;
  text-align: center;
}
.header {
  width: 85%;
  margin: auto;
  margin-top: 5%;
}
.main {
  margin: auto;
  width: 75%;
}
.footer {
  margin: auto;
  width: 75%;
  text-align: left;
  padding: 20px;
}
.el-header {
  color: #333;
  text-align: center;
}
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 30px;
}
.el-aside {
  color: #333;
  text-align: left;
  line-height: 200px;
}

.el-main {
  color: #333;
  text-align: left;
}
</style>
