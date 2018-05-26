<template>
    <div id="container">
        <div id="header"></div>
        <div id="content">
            <!--登录页面-->
            <div id="login_frame" v-if="showLogin">
                <div id="image_logo"><img src="../../assets/login_img.jpg" alt="标题图片"/></div>
                <form name="form1" method="POST" action="">
                    <span class="label_input" for="userName">账号</span>
                    <el-input type="text" name="userName" id="userName" class="text_field" placeholder="请输入用户名"  v-model="userName" clearable/><br>
                    <span><label class="label_input" for="passWord">密码</label></span>
                    <el-input type="password" name="passWord" id="passWord" class="text_field " v-model="passWord" clearable/>

                    <div id="login_control">
                        <el-button type="primary" id="btn_login"  class="btn" @click="Login" size="mini">登录</el-button>
                        <el-button type="primary"  class="btn" @click="Reset" size="mini">重置</el-button>
                        
                    </div>
                </form>
                <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
                            <transition name="slide-fade">
                                <p v-if="showTishi">{{tishi}}</p>
                            </transition>
                        </div>
                </div>
            </div>

        </div>
        <div id="footer"><h4>{{welecomeYou}}</h4></div>
    </div>
    
</template>

<style>
    body{
        background-image: url(../../assets/background.jpg);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
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
    }
    #regist_frame{
        width: 400px;
        height: 400px;
        padding: 13px;

        position: absolute;
        left: 50%;
        top:50%;
        margin-left: -200px;
        margin-top: -200px;
        background-color: rgba(240, 255, 255, 0.5);
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
        height: 20px;  
        margin-top: 10px;
    }
    #position{
        margin-top: 3px;
        padding-top:5px;
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
        padding-top:30px;
    }
    .btn{
        height:30px;
        width: 60px;
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
<script>
import {setCookie,getCookie} from '../../assets/js/cookie.js'
//提供认证服务的restApi
var authUrl=''
export default {
  data(){
     return{
        dialogVisible:false,
        user:'1',
		userName:'',
        passWord:'',
		welecomeYou:'',
		postion:'',
		showLogin:true,
		showRegist:false,
        registMsg:'',
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
        formLabelWidth: '100px'
	  }
  },
  mounted(){
	  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
     if(getCookie('userName')){
        this.$router.push('/home')
     }
  },
  watch:{

  },
  methods:{
      handleClose(done) {   //弹出窗口关闭前确认提示
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
       ToRegister(){    //注册事件
			this.showLogin = false
			this.showRegist = true
			var position=this.getSelectRadio();
			switch(this.user){
				case '1': this.registMsg="用户注册";break;
				case '2': this.registMsg="管理员注册";break;
            }
       },
       forgetPass(){   //忘记密码
           var self=this;
           this.dialogVisible=true;
           this.form.name=self.username;
       },
	   ToLogin(){     //点击登录链接
			this.showRegist = false
			this.showLogin = true
	   },
       Login(){      //用户登录操作
          if(this.userName==""||this.passWord==""){
              this.showTishi=true;
              this.tishi="请输入用户名或密码!";
              return false;
          }else{
             let data={'username':this.userName,'password':this.passWord};
             var name=[],pass=[];
             /*接口请求*/
             var urlJson="../../../static/userName.json";   //本地测试json文件
             var url="http://localhost:8088/api/v1.0/user/info";  //后台请求
            //  this.$http.post(url,data).then(res=>{
            //    localStorage.token = response.data.token
            //     localStorage.tokenExpired = response.data.tokenExpired
            //     localStorage.userDisplayName = response.data.displayName
            //     this.$router.push('home')
            //  }),res=>{
            //      this.showTishi=true;
            //      this.tishi="用户名或密码错误";
            //  }
              this.tishi="登录成功!";
                      this.showTishi=true;
					  setCookie('username',this.userName,1000*60);  //将用户名存到cookie中
                      setTimeout(function(){
                          this.$router.push({path:'home',query:{userName:this.userName}})
                      }.bind(this),1000)
          }
      },
      Reset(){   //重置
          this.userName=''
          this.passWord=''
      },
      Regist(){  //注册
          if(this.userName==""||this.userName==""){
             alert("请输入用户名或密码！")
          }else{
              let data={'username':this.userName,'password':this.passWord};
          }
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