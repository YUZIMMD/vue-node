<template>
   <div>
     <el-container>
       <el-header height="70px">
         <img src="../../assets/logo.png" class="logoStyle"/>
         <el-menu class="menu-icon" mode="horizontal" text-color="#c8c8c8" background-color="#000" active-text-color="#fff" >
          <el-menu-item index="1"><a href="javascript: void(0)" class="el-icon-bell"></a></el-menu-item>
          <el-menu-item index="2"><a href="javascript: void(0)" class="el-icon-setting"></a><el-tag>0</el-tag></el-menu-item>
        </el-menu>
         <el-menu :default-active="activeIndex" class="" mode="horizontal" text-color="#c8c8c8" background-color="#000" active-text-color="#fff" >
          <el-menu-item index="1"><a href="#" target="_blank">首页</a></el-menu-item>
          <el-menu-item index="2"><a href="#" target="_blank">关于我们</a></el-menu-item>
          <el-menu-item index="3"><a href="#" target="_blank">我们的作品</a></el-menu-item>
          <el-menu-item index="4"><a href="#" target="_blank">顾客的评价</a></el-menu-item>
          <el-menu-item index="5"><a href="#" target="_blank">关于我们</a></el-menu-item>
        </el-menu>
       </el-header>
     </el-container>
  </div>
</template>

 <script>
 export default {
  name: 'heada',
  data () {
    return {
      activeIndex: '1'
     }
  },
  mounted: function(){
   
        
  }
}
  </script>
  <style scoped>
    .el-header{
      background-color: #000;
      padding: 10px 20px;
    }
    .el-header .el-menu{
      border: none;
      float: right;
    }
    .el-menu-item.is-active{
      border: none;
    }
    .el-header .el-menu-item a:hover{
      color: #fff;
    }
    .el-header .el-icon{
      color: #fff;
      float: left;
      font-size: 50px;
      line-height: 60px;
    }
   .el-header  .el-tag{
      background-color: #969696;
      border-radius: 50%;
      color: #fff;
      line-height: 20px;
      height: 20px;
    }
    .el-header .menu-icon a{
      font-size: 20px;
    }
    .el-main{
      background-color: #ededed;
    }
    .el-main .el-menu{
      border: none;
    }
    .el-main .el-menu .el-menu-item:hover{
      background-color: #ededed !important;
      color: #5079d9 !important;
    }
    .logoStyle{
      width: 60px;
      height: 50px;
      float: left;
      padding-left:50px; 
    }
  </style>
  
