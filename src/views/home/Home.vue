<template>
    <el-container>
      <el-container>
        <el-aside width="180px">
           <el-row class="tac">
            <el-col :span="24">
            <el-menu :default-active="$route.path" 
            class="el-menu-vertical-demo" 
            @open="handleOpen"
            @close="handleClose"
            unique-opened
            router
            active-text-color="#ffd04b" 
            background-color="rgb(252,250,240)" 
            style="height:600px;">
                <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <router-link to="/user">用户</router-link>
                </template>
                </el-submenu>
                <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <router-link to="/device">设备</router-link>     
                </template>
                </el-submenu>
            </el-menu>
            </el-col>
        </el-row>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  
</template>
<style scoped>
    body{    
        background-image: url(../../assets/background.jpg);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    #nameInfo{
        position: absolute;
        right: 30px;
        top: 10px;
    }
    #nameInfo p{
        font-size: 15px;
        font-family: 微软雅黑;
    }
    #nameInfo span #logout{
        color:blue;
        cursor:pointer;
        text-align: right;
    }
    #nameInfo span #logout:hover{
         color:#41b883;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 299px;
        min-height: 300px;
        background: #27304D;
    }

    .el-menu {
        list-style: none;
        margin: 0;
        padding-left: 0;
        vertical-align: top;
        text-align: left;
    }
</style>
<script>
import {setCookie,getCookie,delCookie} from '../../assets/js/cookie.js'
import Account from '@/views/user/Account'
import Device from '@/views/device/Device'
import DeviceList from '@/views/device/DeviceList'

   export default {
       data(){
           return{
               name:''
           }
       },
        components: {
            'account-Info':Account,
            'device-Info':DeviceList
        },
       mounted(){
           let uname=getCookie('username')
           this.name=uname
       },
       methods:{
        handleOpen(){

        },
        handleClose(){

        }
       }
   }
</script>
