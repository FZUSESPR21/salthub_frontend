<!-- 
 * @description: 晒研论坛-通知组件
 * @fileName: MessageTime.vue 
 * @author: xiaohan
 * @date: 2021-06-07 14:42:59
 * @后台人员:  
 * @path:  /message
 * @version: V1.0.0 
!-->
<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        placement="top"
        v-for="(item, index) in noticeList"
        :key="index"
      >
        <el-card>
          <p class="is-size-5">{{item.title}}</p>
          <h4>{{item.content}}</h4>
          <p>{{item.accountName}} 发布于 {{item.releaseTime}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import { getAllNotice } from "@/api/notice";
export default {
  data() {
    return {
      noticeList: [],
      page: {
        total: 0,
        totalpage: 0,
        current: 1,
        pageSize: 20,
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      let params = { current: this.page.current };
      //获取所有公告
      getAllNotice(params).then((response) => {
        const { data } = response;
        console.log(data);
        this.page.current = data.data.current;
        if (this.page.current === 1) {
          //请求第一页就直接赋值
          this.page.total = data.data.total;
          this.page.totalpage = data.data.pages;
          this.noticeList = data.data.records;
          //异步加载完文章列表之后 重新渲染tab pane
          this.forceRerender();
        } else {
          //将后面页码的数据和之前的数据拼合
          for (let i in data.data.records) {
            this.noticeList.push(data.data.records[i]);
          }
        }
      });
    },
    load() {
      let vm = this;
      if (getScrollTop() + getWindowHeight() >= getScrollHeight()) {
        if (vm.page.current < vm.page.totalpage) {
          //先判断下一页是否有数据
          vm.page.current += 1; //查询条件的页码+1
          console.log(vm.page.current); //打印当前页码
          this.init(this.activeName); //拉取数据
        } else {
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.load);
  },
  destroyed() {
    window.removeEventListener("scroll", this.load, false);
  },
};
</script>
