<!-- 
 * @description: 晒研论坛-后台首页-数据可视化动态排序折线图
 * @fileName: echarts.vue 
 * @author: NoMornings 
 * @date: 2021-04-28 12:13:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.1 
!-->
<template>
  <div id="echarts"></div>
</template>

<style lang="scss" scoped>
#echarts {
  width: 870px;
  height: 400px;
  margin-top: 20px;
}
</style>

<script>
import * as echarts from "echarts";
import $ from "jquery";
export default {
  data() {
    return {
    }
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      var ROOT_PATH =
        "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";
      var chartDom = document.getElementById("echarts");
      var myChart = echarts.init(chartDom);
      var option;
      $.get(
        // 测试数据
        ROOT_PATH + "/data/asset/data/life-expectancy-table.json",
        function (_rawData) {
          var countries = [
            "Finland",
            "France",
            "Germany",
            "Iceland",
            "Norway",
            "Poland",
            "Russia",
            "United Kingdom",
          ];
          var datasetWithFilters = [];
          var seriesList = [];
          echarts.util.each(countries, function (country) {
            var datasetId = "dataset_" + country;
            datasetWithFilters.push({
              id: datasetId,
              fromDatasetId: "dataset_raw",
              transform: {
                type: "filter",
                config: {
                  and: [
                    { dimension: "Year", gte: 1950 },
                    { dimension: "Country", "=": country },
                  ],
                },
              },
            });
            seriesList.push({
              type: "line",
              datasetId: datasetId,
              showSymbol: false,
              name: country,
              endLabel: {
                show: true,
                formatter: function (params) {
                  return params.value[3] + ": " + params.value[0];
                },
              },
              labelLayout: {
                moveOverlap: "shiftY",
              },
              emphasis: {
                focus: "series",
              },
              encode: {
                x: "Year",
                y: "Income",
                label: ["Country", "Income"],
                itemName: "Year",
                tooltip: ["Income"],
              },
            });
          });

          option = {
            animationDuration: 10000,
            dataset: [
              {
                id: "dataset_raw",
                source: _rawData,
              },
            ].concat(datasetWithFilters),
            title: {
              text: "Page Views of SaltHub",
            },
            tooltip: {
              order: "valueDesc",
              trigger: "axis",
            },
            xAxis: {
              type: "category",
              nameLocation: "middle",
            },
            yAxis: {
              name: "Page Views",
            },
            grid: {
              right: 140,
            },
            series: seriesList,
          };

          myChart.setOption(option);
        }
      );

      option && myChart.setOption(option);
    },
  },
};
</script>