// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口文件
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/styles/reset.css"
import "./assets/styles/border.css" // 1像素边框解决
import "./assets/styles/iconfont.css"
import fastClick from 'fastclick' // 解决移动端，300ms点击延时

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app', // index.html的挂载点
  router,
  components: { App }, // 局部组件
  template: '<App/>' //直接渲染
})
