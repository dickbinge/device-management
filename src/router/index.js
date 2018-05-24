import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login/Login.vue'
import Home from '@/views/home/Home.vue'

Vue.use(Router)

export default new Router({
  // mode:'history', 在跟后台交互的时候使用
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/',
      name:'Login',
      component:Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
    
  ]
})
