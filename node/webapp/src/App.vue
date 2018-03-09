<template>
  <div id="app">
    <router-view name="Header"></router-view>
    <div class="content">
    <router-view/>
    </div>
    <router-view name="Footer"></router-view>
    <router-view name="404"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  margin: 0;
  color: rgba(31,37,38,.75);
}
a,a:hover,a:link,a:visited{
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #000; */
}
.content{
  min-height: 500px;
}
.m-t-md{
  margin-top: 20px;
}
.m-t-lg{
  margin-top: 50px;
}
.m-t-xl{
  margin-top: 50px;
}
.m-t-xs{
  margin-top: 5px;
}
.m-t-sm-v{
  margin-top: 15px;
}
.m-t-sm{
  margin-top: 10px;
}
</style>
