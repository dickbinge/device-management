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
                    <div id="position">
                        <el-radio v-model="user"  label="1" >用户</el-radio>
                        <el-radio v-model="user"  label="2"> 管理员</el-radio>
                    </div>
                    <div id="login_control">
                        <el-button type="primary" id="btn_login"  class="btn" @click="Login">登录</el-button>
                        <!-- <input type="button" id="btn_login" value="登录" class="btn" @click="Login"/> -->
                        <el-button type="primary"  class="btn" @click="Reset">重置</el-button>
                        <span id="p_foget" class="a_regist" @click="forgetPass">忘记密码？</span>
                        
                        <el-dialog title="提示" :visible.sync="dialogVisible" height='30%' width="30%" :before-close="handleClose">
                            <el-form :model="form">
                                <el-form-item label="账号" :label-width="formLabelWidth">
                                <el-input v-model="form.name" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" :label-width="formLabelWidth">
                                <el-input v-model="form.password" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                            </div>
                        
                        </el-dialog>

                        <p class="p_reg" >没有账号？<span class="a_regist" v-on:click="ToRegister">立即注册</span></p> 
                        <p v-show="showTishi">{{tishi}}</p> 
                    </div>
                </form>
            </div>
            <!--注册页面-->
            <div id="regist_frame" v-show="showRegist">
                <div id="image_logo"><img src="../../assets/login_img.jpg" alt="标题图片"/></div>
                <h4>{{registMsg}}</h4>
                <span class="label_input" for="userName">账号</span>
                <input type="text" name="userName" id="regist_userName" class="text_field" placeholder="请输入用户名"  v-model="userName"/><br>
                <span><label class="label_input" for="passWord">密码</label></span>
                <input type="password" name="passWord" id="regist_passWord" class="text_field " v-model="passWord"/><br>
                <span><label class="label_input" for="passWord">确认</label></span>
                <input type="password" name="repassWord" id="re_passWord" class="text_field " v-model="passWord"/>
                <div id="login_control">
                    <input type="button" id="btn_login" value="注册" class="btn" @click="Regist"/>
                    <input type="reset" id="btn_reset" value="重置" class="btn"/> 

                    <p class="p_reg">已有账号<span class="a_regist" v-on:click="ToLogin">立即登录</span></p>  
                    <p v-show="showTishi">{{tishi}}</p>
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
        padding-top:10px;
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
         margin-left: 70px;

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
             this.$http.get(urlJson).then(res=>{
                var result=res.body.result;
                for(var i=0;i<result.length;i++){
                   name.push(result[i].userName);
                   pass.push(result[i].password);
                  //用户名正确，密码错误
                   if(name.indexOf(this.userName)===-1){
                        this.showTishi=true;
                        this.tishi="请输入正确的用户名!";
                        return false;
                   }
                   else if(pass.indexOf(this.passWord)===-1){
                      this.showTishi=true;
                      this.tishi="请输入正确的密码!";
                      return false;
                   }else{
                      this.tishi="登录成功!";
                      this.showTishi=true;
					  setCookie('username',this.userName,1000*60);  //将用户名存到cookie中
                      setTimeout(function(){
                          this.$router.push({path:'home',query:{userName:this.userName}})
                      }.bind(this),1000)
                   }
                }
             })
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