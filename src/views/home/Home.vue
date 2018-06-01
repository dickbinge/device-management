<template>
    <el-container>
         <!-- <el-header class="header">
          <div id="head">
              <h4>欢迎您:{{this.$route.params.username}}</h4>
          </div>
      </el-header> -->
      <el-container>
        <el-aside width="180px">
           <el-row class="tac">
            <el-col :span="24">
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            unique-opened
            router
            active-text-color="#ffd04b">
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
<style>
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
</style>
<script>
import {setCookie,getCookie,delCookie} from '../../assets/js/cookie.js'
import NavHear from '@/views/home/NavHear'
import Account from '@/views/user/Account'
import Device from '@/views/device/Device'
import DeviceList from '@/views/device/DeviceList'

   export default {
       data(){
           return{
               name:'',
               account:true,
               device:false,
               setting:false
           }
       },
        components: {
            'navheader':NavHear,
            'account-Info':Account,
            'device-Info':DeviceList
        },
       mounted(){
           let uname=getCookie('username')
           this.name=uname
        //    if(uname==''){
        //        this.$router.push('/')
        //    }
       },
       methods:{
        //    logout(){
        //        delCookie('username')
        //        this.$router.push('/')
        //    }
        showAccount(){
            this.account=true;
            this.device=false;
            this.setting=false;
        },
        showDevice(){
            this.account=false;
            this.device=true;
            this.setting=false;
        },
        showSetting(){
            this.account=false;
            this.device=false;
            this.setting=true;
        },
        handleOpen(){

        },
        handleClose(){

        }
       }
   }
</script>
