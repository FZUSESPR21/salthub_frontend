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
  <div class="detail" style="background-color:#f3f3f3;position:absolute;top:0">
    <Header></Header>
    <div class="main">
      <el-container style="background-color:white;">
        <el-header height="150px" style="font-size:30px">{{title}}</el-header>
        <hr>
        <el-container>
          <el-aside width="200px">
            <div>
             <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
             <span style="font-size:18px">{{authorName}}</span>
            </div>
          </el-aside>
          <el-container>
            <el-main style="font-size:18px">
              {{content}}
            </el-main>
            <el-footer height="120px">
              <div style="float:right">
                <el-button round style="background-color:red;color:white">点赞</el-button>
                <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                <br>
                <span style="font-size:15px">2021年4月3日</span>
                <el-button type="text" style="color:red">举报</el-button>
              </div>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
      <div v-for="comment in comments" :key="comment.id" style="background-color:white;border:solid #f3f3f3 1px">
        <el-container>
          <el-aside width="200px">
            <div>
             <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
             <span style="font-size:20px">{{comment.name}}</span>
            </div>
          </el-aside>
          <el-container>
            <el-main style="font-size:20px">
              {{comment.content}}
            </el-main>
            <el-footer height="120px">
              <div style="float:right">
                <el-button round style="background-color:red;color:white">点赞</el-button>
                <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                <br>
                <span style="font-size:15px">2021年4月3日</span>
                <el-button type="text" style="color:red">举报</el-button>
              </div>
            </el-footer>
          </el-container>
        </el-container>
      </div>
      <hr>
      <div>
        <v-CreateComment></v-CreateComment>
      </div>
    </div>

    <!-- <div class="footer">
      <span>评论</span>
      <el-input
        type="textarea"
        :rows="10"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <div style="margin-top:10px;height:60px">
        <div style="float:right">
          <el-button type="primary" round>发送</el-button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Header from '@/components/Layout/Header'
import CreateComment from '@/components/Comment/CreateComment'
  export default {
    name: 'Detail',
    components: {
      Header,
      'v-CreateComment': CreateComment
    },
    data() {
      const item = {

      };
      return {
        title: '2022福州大学考研指导来了，必看！！最强考研经验',
        content: '学校简介：福州大学是创立于1958年的高校，在进入211工程后开始高速发展，现在在全国的排名大概在60到90名之间，省内排名第2，属于中游的211高校。福大的化学、机械、计算机、电气还有经管类的管理科学与工程等都非常不错，起码在福建省内就业基本没啥压力，每年有许多上市企业来福大校招。总的来说，是一所性价比非常高的院校。研究生院简介：学校现有17个学院和单位培养研究生：数学与计算机科学学院、物理与信息学院、化学化工学院、土木工程学院、机械工程及自动化学院、材料科学与工程学院、生物科学与工程学院、电气工程与自动化学院、环境与资源学院、管理学院、法学院、人文社会科学学院、公共管理学院、外国语学院、软件学院、厦门工艺美术学院、图书馆。全校现有1个化肥催化剂国家工程研究中心，1个教育部工程研究中心，1个省部共建国家重点实验室培育基地，3个省部共建教育部重点实验室，7个省级工程（技术）研究（设计）中心，1个省高校分析测试中心，7个省（高校）重点（开放）实验室，2个省级文科研究基地，1个省行业技术开发基地。拥有1个国家理科基础科学研究和教学人才培养基地，1个国家集成电路人才培养基地。学校拥有1个国家重点学科，1个国家级重点（培育）学科，7个国家“211工程”重点学科建设项目，23个省级重点学科。已有化学、化学工程与技术、土木工程、电气工程4个博士后流动站，9个一级学科博士点，35个一级学科硕士点，11个专业学位授权点，即工商管理硕士（MBA）、法律硕士（JM）、金融、应用统计、国际商务、社会工作、艺术、翻译、会计、工程管理和工程硕士（含22个工程领域）。办学规模：目前在校全日制学生近30000名，其中博士、硕士研究生近5000名，此外各类专业学位研究生2000多名。建校以来，已为国家培养了全日制博硕士研究生、本专科毕业生10万多名。学校为国家教育部批准可招收外国和港、澳、台地区本科生、研究生的高校。学校拥有2个国家级人才培养基地，3个国家级实验教学示范中心，在省内外建立了320多个校外实践教学基地。办学条件：学校目前有怡山、旗山、铜盘、厦门工艺美院（鼓浪屿校区和集美校区）、泉港、晋江等7个校区，占地面积5000余亩。学校办学主体位于福州地区大学城旗山校区。现有公共用房总面积105余万平方米，固定资产总值近19亿元；教学科研仪器设备值6亿多元；图书馆藏书197万册，数字资源51200GB，中外期刊7000多种，并拥有清华同方中国学术期刊全文数据库等36个数据库资源，还拥有教育部科技查新工作站；学校网络中心是中国教育和科研计算机网福州主节点，校园网已初步建成一个全校范围内高速畅通的信息服务基础平台；体育运动场地面积17多万平方米。更多关于福州大学学校情况，可点击下面链接进行查看：https://baike.sogou.com/v54620.html',
        authorName: '王大虎',
        comments: [
          {name: '烤鸭人', content: '楼主好人'},
          {name: '王小虎', content: '66666666666666666'},
          {name: '烤盐人', content: '收藏了'},
        ],
        textarea: '',
      }
    },
    created: {

    },
    methods: {
    },
  };
</script>

<style scoped>
  .title{
  font-size: 50px;
  text-align: center;
  }
  .header{
    width: 85%;
    margin: auto;
    margin-top: 5%;
  }
  .main{
    margin: auto;
    width: 75%;
  }
  .footer{
    margin: auto;
    width: 75%;
    text-align: left;
    padding: 20px;
  }
 .el-header {
    color: #333;
    text-align: center;
    line-height: 200px;
    font-size: 30px;
  }
  .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
    font-size: 30px;
  }
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    color: #333;
    text-align: left;
  }
</style>
