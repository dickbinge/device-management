<template>
<el-container>
    <el-header height="80px"
      :style="{ 'background-color': blue }">
        <div>
            <h3>欢迎您{{name}}</h3>
            <div id="nameInfo">
                <p id="name">{{name}}&lt;1150239561@qq.com&gt; </p>
                <span id="logout" @click="logout" >注销登录</span>
            </div>
        </div>
    </el-header>
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
    #menu{
        position: absolute;
        left: 5px;
        width: 200px;
        height: 700px !important;
    }
</style>
<script>
import {setCookie,getCookie,delCookie} from '../../assets/js/cookie.js'
   export default {
       data(){
           return{
               name:'',
               tableData:[
                   {
                        name: 'jingbin',
                        phone: '17686840508',
                        email:"1455655@qq.com"
                   }
               ]
           }
       },
       mounted(){
           let uname=getCookie('username')
           this.name=uname
           if(uname==''){
               this.$router.push('/')
           }
       },
       methods:{
           logout(){
               delCookie('username')
               this.$router.push('/')
           }
       }
   }
</script>
