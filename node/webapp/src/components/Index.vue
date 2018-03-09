<template>
   <div>
     <el-container>
       <el-header height="100px">
         <i class="el-icon el-icon-info"></i>
         <el-menu class="menu-icon" mode="horizontal" text-color="#c8c8c8" background-color="#000" active-text-color="#fff" >
          <el-menu-item index="1"><a href="javascript: void(0)" class="el-icon-bell"></a></el-menu-item>
          <el-menu-item index="2"><a href="javascript: void(0)" class="el-icon-setting"></a><el-tag>0</el-tag></el-menu-item>
        </el-menu>
         <el-menu :default-active="activeIndex" class="" mode="horizontal" text-color="#c8c8c8" background-color="#000" active-text-color="#fff" >
          <el-menu-item index="1"><a href="#" target="_blank">在线商城</a></el-menu-item>
          <el-menu-item index="2"><a href="#" target="_blank">坚果Pro2</a></el-menu-item>
          <el-menu-item index="3"><a href="#" target="_blank">坚果Pro</a></el-menu-item>
          <el-menu-item index="4"><a href="#" target="_blank">Smartisan OS</a></el-menu-item>
          <el-menu-item index="5"><a href="#" target="_blank">Smartisan OS</a></el-menu-item>
          <el-menu-item index="6"><a href="#" target="_blank">欢喜云</a></el-menu-item>
          <el-menu-item index="7"><a href="#" target="_blank">应用下载</a></el-menu-item>
          <el-menu-item index="8"><a href="#" target="_blank">官方论坛</a></el-menu-item>
        </el-menu>
       </el-header>
       <el-main>
         <el-menu :default-active="activeIndex" class="" mode="horizontal" text-color="#666" background-color="#ededed" active-text-color="#5079d9" >
          <el-menu-item index="1"><a href="#" target="_blank">首页</a></el-menu-item>
          <el-menu-item index="2"><a href="#" target="_blank">手机</a></el-menu-item>
          <el-menu-item index="3"><a href="#" target="_blank">“足迹系列”手感膜</a></el-menu-item>
          <el-menu-item index="4"><a href="#" target="_blank">“足迹系列”保护套</a></el-menu-item>
          <el-menu-item index="5"><a href="#" target="_blank">空气净化类</a></el-menu-item>
          <el-menu-item index="6"><a href="#" target="_blank">品牌周边</a></el-menu-item>
          <el-menu-item index="7"><a href="#" target="_blank">第三方商品</a></el-menu-item>
          <el-menu-item index="8"><a href="#" target="_blank">全部商品</a></el-menu-item>
          <el-menu-item index="8"><a href="#" target="_blank">服务</a></el-menu-item>
        </el-menu>
       </el-main>
       <el-footer></el-footer>
     </el-container>
  </div>
</template>

 <script>
 export default {
  name: 'Index',
  data () {
    return {
      activeIndex: '1'
     }
  },
  mounted: function(){
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/users',
      headers: {
        'Content-Type': 'http://localhost:3000/api/users'
      },
      success: function(res){
        console.log(res);
      }
    });
        
  }
}
  </script>
  <style scoped>
    .el-header{
      background-color: #000;
      padding: 20px;
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


  </style>
  
