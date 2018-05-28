<template>
<div>
     <span>修改密码</span>
       <span class="label_input" for="userName">账号</span>
        <el-input type="text" name="userName" id="userName" class="text_field" placeholder="请输入用户名"  v-model="userName" clearable/><br>
        <span><label class="label_input" for="passWord">密码</label></span>
        <el-input type="password" name="passWord" id="passWord" class="text_field " v-model="passWord" clearable/>
        <div id="login_control">
            <el-button type="primary" id="btn_login"  class="btn" @click="Login" size="mini">确定</el-button>
           
            <el-button type="primary"  class="btn" @click="Reset" size="mini">取消</el-button>
</div>
</template>