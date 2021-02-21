import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'//@符号代表src
import home from '@/pages/home'
import list from '@/pages/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
