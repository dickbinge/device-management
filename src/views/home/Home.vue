<template>
    <el-container>
         <el-header class="header">
          <navheader></navheader>
      </el-header>
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
                    <span @click="showAccount">Account</span>
                </template>
                </el-submenu>

                <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span @click="showDevice">Device</span>
                </template>
                </el-submenu>
            </el-menu>
            </el-col>
        </el-row>
        </el-aside>
        <el-main>
            <div v-if="account">
                <account-Info></account-Info>
            </div>
            <div v-if="device">
                <device-Info></device-Info>
            </div>
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
import NavMenu from '@/views/home/NavBar'
import NavHear from '@/views/home/NavHear'
import Account from '@/views/user/Account'
import Device from '@/views/device/Device'
import DeviceList from '@/views/device/DeviceList'
//import Setting from '@views/'
   export default {
       data(){
           return{
               name:'',
               account:true,
               device:false,
               setting:false,
               tableData:[
                   {
                        name: 'jingbin',
                        phone: '17686840508',
                        email:"1455655@qq.com"
                   }
               ]
           }
       },
        components: {
            'navmenu': NavMenu,
            'navheader':NavHear,
            'account-Info':Account,
             'device-Info':DeviceList
        },
       mounted(){
           let uname=getCookie('username')
           this.name=uname
           if(uname==''){
               this.$router.push('/')
           }
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
