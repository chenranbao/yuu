<template>
  <div class="echartLayout">
    <div id="container" style="width:100%; height:100%; overflow:hidden;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import imgSrc from '../assets/logo.png'
  export default {
    name: "personRelation",
    data() {
      return {
        myChart: null,
        chartData:[],
        chartLink:[]
      }
    },
    mounted() {
      this.initEchart()
    },
    methods: {
      initEchart() {
        let dom = document.getElementById("container");
        this.myChart = echarts.init(dom);
        this.chartData=this.dataEChart();
        this.chartLink=this.linkEChart();
        let option = {
          tooltip:{
            show:false
          },
          series: [
            {
              edgeLabel: {
                normal: {
                  formatter:"{c}\n99",
                  show:true
                }
              },
              edgeSymbol: ['circle', 'arrow'],
              force:{
                repulsion:2000
              },
              layout:'force',
              roam:false,
              draggable : false,
              itemStyle:{
                normal:{
                  color: '#6495ED'
                },
                //鼠标放上去有阴影效果
                emphasis: {
                  shadowColor: '#3721db',
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 40,
                },
              },
              label:{
                normal:{
                  show:true
                }
              },
              nodes: [
            { 'id': 1, 'category':  0, 'name': 'MALL62\r\n业务系统',  x: -220, y: 400 ,
              'symbolSize': 100, edgeSymbol: ['arrow', 'none'], itemStyle: {color: '#FE6D00' , borderColor: 'rgba(254,109,0,0.4)' , borderWidth: 22},
              
              label: { show: true,backgroundColor: {
                  image: `image://${imgSrc}`,
                },  position: 'inside', color: '#ffffff' , fontSize: 18 , fontWeight: 300}},
              ],
              //头像
              //symbol: `image://${imgSrc}`,
              symbolSize:86,
              type:'graph',
              links: this.chartLink,
              data:this.chartData
            }
          ]
        };
        this.myChart.setOption(option);
        this.myChart.on('click', function (params) {
          console.log(params.data)//获取点击的头像的数据信息
        });
        let _this= this
        window.addEventListener('resize', function() {_this.myChart.resize()})
      },
      /**
       * 数据集合
       */
      dataEChart(){
        let data = [
          {
           'id': 1, 'category':  0, 'name': 'MALL62\r\n业务系统',  x: -220, y: 400 ,
            'symbolSize': 100, edgeSymbol: ['arrow', 'none'], itemStyle: {color: '#FE6D00' , borderColor: 'rgba(254,109,0,0.4)' , borderWidth: 22},
            label: { show: true,  position: 'inside', color: '#ffffff' , fontSize: 18 , fontWeight: 300}
          },
          {
            name: '张2',
            id: '2',
          },
          {
            name: '张3',
            id: '3',
          },
          {
            name: '张4',
            id: '4',
          },
          {
            name: '张5',
            id: '5',
          },
          {
            name: '张6',
            id: '6',
          },
          {
            name: '张7',
            id: '7',
          },
          {
            name: '张6',
            id: '8',
          },
          {
           'id': 9, 'category':  3, 'name': '梭子',  x: 320, y: 500 ,
            'symbolSize': 100, edgeSymbol: ['arrow', 'none'], itemStyle: {color: '#FE6D00' , borderColor: 'rgba(254,109,0,0.4)' , borderWidth: 22},
            label: { show: true,  position: 'inside', color: '#ffffff' , fontSize: 18 , fontWeight: 300}
          },
        ];
        return data;
      },
      /**
       * 关系数据集合
       */
      linkEChart(){
        let dataLink=[
          {value: "同事",source: "1",target: "2",lineStyle: {
              normal: {
                curveness: 0.2,
                type:'dotted'  //'dotted'虚线 'solid'实线
              },
            }},
          {value: "同事",source: "1",target: "3"},
          {value: "同事",source: "1",target: "4"},
          {value: "同学",source: "1",target: "5"},
          {value: "同学",source: "1",target: "6"},
          {value: "同学",source: "1",target: "7"},
          {value: "爸爸",source: "1",target: "8"},
          {value: "索子",source: "3",target: "9"},
        ];
        return dataLink;
      },
    }
  }
</script>

<style scoped>
  .echartLayout {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 1px solid red;
  }
</style>