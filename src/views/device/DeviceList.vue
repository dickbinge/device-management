<template>
<div id="deContent">
    <h4>Tream Project</h4>
    <div id="userInfo">
        <p>欢迎您：{{this.$route.params.username}} </p> 
        <span id="logout" @click="quit">注销登录</span>
    </div>
    <el-table :data="tableData" border style="width:100%;margin:0 auto; text-algin:center">
        <el-table-column type="index" width="50" header-align="center"></el-table-column>
        <el-table-column prop="name" label="名称" width="200px" header-align="center"></el-table-column>
        <el-table-column prop="type" label="类型" width="200px" header-align="center"></el-table-column>
        <el-table-column prop="number" label="数量" width="200px" header-align="center"></el-table-column>
        <el-table-column prop="description" label="描述" width="400px" header-align="center"></el-table-column>
    </el-table>
</div>
</template>
<style>
 #deContent{
     width: 1050px;
     height: 800px;
     margin:0 auto;
 }
 #userInfo{
     position: relative;
     left: 400px;
     top: 0px;
 }
 span {
     margin-left: 20px;
     cursor:pointer;
     font-size: 13px;
 }
 span :hover{color:#41b883;}
</style>

<script>
 export default {
    data(){
        return{
           tableData:[]
        }
    },
     mounted(){
        this.getData();
    },
    methods: {
       quit(){
           this.$router.push('/');
       },
       getData(){
            let self=this;
            var name=self.$route.params.username;  //获取当前页面的用户
            let data={'username':name};
            var tempData=[];
            var url="http://localhost:8088/api/v1.0/device/infoByUserName";  //后台请求
            self.$http.post(url,data).then(res=>{
                 var deviceList=res.body;
                $.each(deviceList,function(i){
                    var obj={};
                    obj.id=deviceList[i][0];
                    obj.name=deviceList[i][1];
                    obj.type=deviceList[i][3];
                    obj.number=deviceList[i][4];
                    obj.description=deviceList[i][2];
                    tempData[i]=obj;
                })
                self.tableData=tempData;
            })
       }
    }
  }
</script>