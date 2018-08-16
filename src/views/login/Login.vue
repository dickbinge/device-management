<template>
    <div id="container">
        <div id="header"></div>
        <div id="content">
            <!--登录页面-->
<<<<<<< HEAD
          <h2 class="slog_title"></h2>
=======
>>>>>>> 8bdb377d708d994ffc86f72d652594ad12dd41be
            <div id="login_frame">
                <div id="image_logo"><img src="../../assets/login_img.jpg" alt="标题图片"/></div>
                <form name="form1">
                    <span class="label_input" for="userName">账号</span>
                    <el-input type="text" name="userName" class="text_field" placeholder="请输入用户名"  v-model="userName" clearable ref="content"/><br>
                    <span><label class="label_input" for="passWord">密码</label></span>
                    <el-input type="password" name="passWord"  class="text_field " v-model="passWord" clearable/>
                   <p class="el_checkbox"><el-checkbox v-model="checked">记住密码</el-checkbox></p>
                    <div id="login_control">
                        <el-button type="primary" id="btn_login"  class="btn" @click="Login" size="medium">登录</el-button>
                        <!--<el-button type="primary"  class="btn" @click="Reset" size="mini">重置</el-button>-->
                    </div>
                    <div class="resit_info">
                      <span @click="forget">忘记密码？</span>
                      <span @click="regist">去注册</span>
                    </div>
                </form>
                <div class="row">
<<<<<<< HEAD
                    <div class="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
                        <transition name="slide-fade">
                            <p v-if="show_LoginInfo" v-bind:class="{ errorInfo: isError,sucInfo:isSuc}">{{loginInfo}}</p>
                        </transition>
                    </div>
=======
                        <div class="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
                            <transition name="slide-fade">
                                <p v-if="showTishi" v-bind:class="{ errorInfo: isError,sucInfo:isSuc}">{{tishi}}</p>
                            </transition>
                        </div>
>>>>>>> 8bdb377d708d994ffc86f72d652594ad12dd41be
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import {setCookie,getCookie} from '../../assets/js/cookie.js'
import Conf from '../../config';
export default {
  data(){
     return{
        dialogVisible:false,
		    userName:'',
        passWord:'',
        loginInfo:'',
        show_LoginInfo:false,
        formLabelWidth: '100px',
        isError:false,
        isSuc:false,
        checked:false
	  }
  },
  mounted(){
	  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
     let self=this;
     var obj=getCookie();
     if(obj!=null){
       self.userName=obj.name;
       self.passWord=obj.password;
       self.checked=true;
       if(obj.name=="9999"||obj.password=="9999") {
         setTimeout(function(){
           self.$router.push({name:'Home',params:{username:self.userName}})
         }.bind(this),3000)
       }else{
         setTimeout(function(){
           self.$router.push({path:'/userInfo/devicelist'});
         }.bind(this),3000)
       }
     }else{
       return false;
     }
  },
  methods:{
  Login(){      //用户登录操作
    let self=this;
    if(self.userName==""||self.passWord==""){
        self.show_LoginInfo=true;
        self.loginInfo="请输入用户名或密码!";
        self.isError=true;
        return false;
    }else{
        let data={'username':this.userName,'password':this.passWord};
        /*接口请求*/
        let urlJson="../../../static/userName.json";   //本地测试json文件
        let url=Conf.APIUrl + "/user/login";
        let adminName='9999',adminPass='111111';
        self.$http.post(url,data).then(res=>{
          if(res.body.result=='1'){
              self.loginInfo="登录成功!";
              self.isSuc=true;
              self.show_LoginInfo=true;
              if(self.checked){  //勾选，需要记住密码
                setCookie(self.userName,self.passWord,7);
              }

              if(self.userName==adminName){  //管理员进入管理主界面
                  setTimeout(function(){
                    self.$router.push({name:'Home',params:{username:self.userName}})
                  }.bind(this),1000)
              }else{               //普通用户进入对应的
                  setTimeout(function(){
                    self.$router.push({name:'User',params:{username:self.userName}})
                  }.bind(this),1000)
              }
          }
          else{
              self.show_LoginInfo=true;
              self.loginInfo="用户名或密码错误";
              self.isError=true;
              self.userName='';
              self.passWord='';
          }
        })
      }
    },
    forget(){

    },
    regist(){

    }
  }
}
</script>
<style>
  .resit_info{
    margin-top: 10px;
    width: 300px;
    height: 30px;
  }
  .resit_info span{
    font-size: 10px;
    display: block;
    float: left;
    padding-left: 100px;
  }
  .resit_info span:hover{
    cursor:pointer;
    color:orange;
    font-style: italic;
  }
  .resit_info span:visited{
    color: blue;
  }
  p.el_checkbox{
    margin-top: 12px;
    padding-left: 10px;
    width: 280px;
  }
  .slog_title{
    width: 523px;
    height: 108px;
    background-image:url("../../assets/login_slogan.png");
    position: absolute;
    margin-left: -210px;
    margin-top: -280px;
    top: 50%;
    left: 50%;
  }
  .row{
    margin-top:10px;
  }
    body{
        background-image: url(../../assets/login_screen1_bg.jpg);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    .errorInfo{
        color:red;
        font-size: 13px;
<<<<<<< HEAD
=======
    }
    .sucInfo{
        color: green;
        font-size: 13px;
    }
    #login_frame{
        width: 400px;
        height: 350px;
        padding: 13px;

        position: absolute;
        left: 50%;
        top:50%;
        margin-left: -200px;
        margin-top: -200px;
        background-color: rgba(240, 255, 255, 0.5);
        border-radius: 10px;
        text-align: center;
>>>>>>> 8bdb377d708d994ffc86f72d652594ad12dd41be
    }
    .sucInfo{
        color: green;
        font-size: 13px;
    }
    #login_frame{
        width: 400px;
        height: 400px;
        padding: 13px;
        position: absolute;
        left: 50%;
        top:50%;
        margin-left: -200px;
        margin-top: -140px;
        background-color: rgba(240, 255, 255, 0.6);
        border-radius: 10px;
        text-align: center;
    }
    #image_logo{
        margin-top: 22px;
        border-radius:15px;
    }
    .label_input {
        font-size: 14px;
        font-family: 微软雅黑;
        width: 50px;
        height: 38px;
        line-height: 28px;
        text-align: center;
        color: black;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;

    }
    .text_field  {
        width: 200px;
        height: 18px;
        margin-top: 10px;
    }
    #login{
        font-size:12px;
        text-align:center;
        padding:0px;
        vertical-align:middle ;
        line-height:22px;
        margin:0px;
        Height:30px;
        Width:60px;
    }
    #login_control{
        padding-top:10px;
    }
    .btn{
        height:35px;
        width: 200px;
        font-size:12px;
        text-align:center;
        padding:0px;
        vertical-align:middle ;
        line-height:22px;
        margin:0px;
    }
    #btn_login{
         margin-left: 20px;

    }
    #btn_reset{
        margin-left: 20px;
    }
    #p_foget{
        font-size:10px;
        margin-left:30px;
        /* text-align: right; */
    }
    a #forget_pwd:hover {color:#FF9900}
    .p_reg{
        margin-top: 20px;
        font-size: 12px;
        font-family: 微软雅黑;
    }
    .a_regist{
        color:blue;
        cursor:pointer;
    }
    .a_regist:hover{
        color:#41b883;
    }
</style>
<<<<<<< HEAD
=======
<script>
import {setCookie,getCookie} from '../../assets/js/cookie.js'
//提供认证服务的restApi
var authUrl=''
export default {
  data(){
     return{
        dialogVisible:false,
		userName:'',
        passWord:'',
        tishi:'',
        showTishi:false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '100px',
        isError:false,
        isSuc:false
	  }
  },
  mounted(){
	  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
     if(getCookie('userName')){
        this.$router.push('/home')
     }
  },
  methods:{
      handleClose(done) {   //弹出窗口关闭前确认提示
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
       Login(){      //用户登录操作
          if(this.userName==""||this.passWord==""){
              this.showTishi=true;
              this.tishi="请输入用户名或密码!";
              this.isError=true;
              return false;
          }else{
             let data={'username':this.userName,'password':this.passWord};
             var name=[],pass=[];
             /*接口请求*/
             var urlJson="../../../static/userName.json";   //本地测试json文件
             var url="http://localhost:8088/api/v1.0/user/login";  //后台请求
             this.$http.post(url,data).then(res=>{
            //    localStorage.token = response.data.token
            //     localStorage.tokenExpired = response.data.tokenExpired
            //     localStorage.userDisplayName = response.data.displayName
                if(res.body.result=='1'){
                     this.tishi="登录成功!";
                     this.isSuc=true;
                      this.showTishi=true;
                      setTimeout(function(){
                          this.$router.push({name:'Home',params:{username:this.userName}})
                      }.bind(this),1000)
                }else{
                   this.showTishi=true;
                   this.tishi="用户名或密码错误";
                   this.isError=true;
                   this.userName='';
                   this.passWord='';
                }
             })

          }
      },
      Reset(){   //重置
          this.userName=''
          this.passWord=''
      },
     getSelectRadio(){  //获取当前单选框的值
		var retMsg='';
		var radio=document.getElementsByName('user');
		for(var i=0;i<radio.length;i++){
			if(radio[i].checked){
				retMsg=radio[i].value;
			}
		}
		return retMsg;
	  }
  }
}
</script>
>>>>>>> 8bdb377d708d994ffc86f72d652594ad12dd41be
