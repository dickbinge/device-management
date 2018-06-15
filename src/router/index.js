import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login/Login.vue'
import Home from '@/views/home/Home.vue'
import Account from '@/views/user/Account.vue'
import Device from '@/views/device/Device.vue'
import DeviceList from '@/views/device/DeviceList.vue'
Vue.use(Router)

export default new Router({
  // mode:'history', 在跟后台交互的时候使用
  routes: [
    {
      path:'/',
      name:'Login',
      component:Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'/user',
          name:'Account',
          component:Account
        },
        {
          path:'/device',
          name:'Device',
          component:Device
        }
      ]
    },
    {
      path:'/user',
      name:'Account',
      component:Account
    },
    {
      path:'/device',
      name:'Device',
      component:Device
    },
    {
      path:'/device',
      name:'DeviceList',
      component:DeviceList
    }
  ]
})
