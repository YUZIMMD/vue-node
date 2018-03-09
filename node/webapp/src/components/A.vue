<template>
   <div>
    <el-button @click="visible = true">按钮</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>欢迎使用 Element</p>
    </el-dialog>
    <ul id="list" class="swipe-out">
        <li >1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

 <script>
 import '../plugins/hammer.min.js';
 import SwipeOut from '../plugins/swiperout.js'
 export default {
  name: 'index',
  data () {
    return { 
      visible: false,
       msg: 'Welcome to Your Vue.js App'
      }
  },
   methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  },
  mounted: function(){
     this.drawLine();
      var list = document.getElementById("list");
      new SwipeOut(list);

      list.addEventListener("delete", function(evt) {
        console.log($('#list').length);
  // do something, like an ajax call to server
  // evt.target references the list item
   
});
  }
}
  </script>
  <style scoped>
  .swipe-out .delete-btn {
  padding: 6px 8px;
  border-radius: 6px;
  border: solid 1px rgb(96,23,18);
  background-image: linear-gradient(top, rgb(242,153,157), rgb(213,62,41));
  background-image: -webkit-linear-gradient(top, rgb(242,153,157), rgb(213,62,41));
  background-image: -moz-linear-gradient(top, rgb(242,153,157), rgb(213,62,41));
  background-image: -o-linear-gradient(top, rgb(242,153,157), rgb(213,62,41));
  text-shadow: 0em -0.1em rgb(51,51,51);
  color: #fff;
  font: bold 14px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
}
  </style>
  
