<!-- 
 * @description: 晒研论坛-后台首页-数据可视化折线图堆叠
 * @fileName: echartsTest.vue 
 * @author: NoMornings 
 * @date: 2021-06-11 11:58:18 
 * @后台人员:  
 * @path:  
 * @version: V1.0.1 
!-->
<template>
  <div id="echarts"></div>
</template>

<style lang="scss" scoped>
#echarts {
  width: 830px;
  height: 350px;
  margin-top: 20px;
}
</style>

<script>
import * as echarts from "echarts";
import $ from "jquery";
export default {
  data() {
    return {};
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      var chartDom = document.getElementById("echarts");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: " ",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["用户数量", "文章数量", "新增用户", "新增文章"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "用户数量",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "文章数量",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "新增用户",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "新增文章",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>
