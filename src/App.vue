
<!-- 单文件组件 和  Vue.component() 不一样  为根组件-->
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!-- 显示当前路由，对应的内容-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
