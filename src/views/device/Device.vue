<template>
<div>
     <span style="float:left;margin-bottom:10px;">
       <el-input placeholder="请输入内容" v-model="selectLabel" class="input-with-select" clearable>
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="设备名称" value="1"></el-option>
          <el-option label="设备ID" value="2"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </span>
    <h3 style="display: inline;">Device List</h3>
    <span style="float:right;">
        <el-button type="primary" size="small" @click="addDevice">增加设备</el-button>
    </span>
  <el-table :data="tableData" border style="width:100%;margin:0 auto; text-algin:center;height:500px;">
        <el-table-column type="index" width="50" header-align="center"></el-table-column>
        <el-table-column prop="name" label="名称" width="200px" header-align="center"></el-table-column>
        <el-table-column prop="type" label="类型" width="200px" header-align="center"></el-table-column>
        <el-table-column prop="number" label="数量" width="200px" header-align="center"></el-table-column>
        <el-table-column prop="description" label="描述" width="300px" header-align="center"></el-table-column>
        <el-table-column label="分配"  header-align='center'>
            <template slot-scope="scope">
                <el-button type="text" size="small" @click.native.prevent="allot(scope.$index,tableData)">分配</el-button>
                <el-button type="text" size="small" @click.native.prevent="viewUser(scope.$index,tableData)">查看</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-dialog title="用户信息" :visible.sync="dialogTableVisible">
        <el-table :data="gridData" style="overflow: auto;" border max-height="400px"  @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="50" header-align="center" @select.native.prevent="changeFun(scope.$index,gridData)"></el-table-column>
            <el-table-column type="index" width="50" header-align="center"></el-table-column>
            <el-table-column prop="name" label="姓名" width="150" header-align="center"></el-table-column>
            <el-table-column prop="email" label="邮箱" width="200" header-align="center"></el-table-column>
            <el-table-column prop="phone" label="电话" header-align="center"></el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="confrim" size="small">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>
<style>
    .dialog-footer{
        text-align: center;
    }
</style>
<script>
 export default {
    data(){
        return{
           select:'',
           selectLabel:'',
           tableData:[],
           dialogTableVisible:false,
           gridData:[],
           editObj:{},  //存放父页面上选中行的设备ID
           checkData:[]
        }
    },
    mounted(){
        this.getData();
    },
    methods: {
        getData(){
            let self=this;
            var tempData=[];
            var url="http://localhost:8088/api/v1.0/device/info";  //后台请求
            self.$http.get(url).then(res=>{
                 var deviceList=res.body.data;
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
        },
        search(){
           if(this.selectLabel!=undefined&&this.selectLabel.length!=0){
                let data=this.selectLabel+';'+this.select;
                var tempData=[];
                var url="http://localhost:8088/api/v1.0/device/infoInput"; 
                var self=this;
                self.$http.post(url,data).then(res=>{
                   var deviceList=res.body.data;
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
           }else{
              this.getData();
           }
         
       },
       allot(index,rows){
           var self=this;
           self.editObj=rows[index]; 
           var curId=rows[index].id;
           self.dialogTableVisible=true;
           let data={'id':curId};
           var tempData=[]; 
           var url="http://localhost:8088/api/v1.0/user/allotUser"; 
           self.$http.post(url,data).then(res=>{
               var userList=res.data;
               $.each(userList,function(i){
                    var obj={};
                    obj.id=userList[i][0];
                    obj.name=userList[i][1];
                    obj.email=userList[i][2];
                    obj.phone=userList[i][3];
                    tempData[i]=obj;
               })
                this.gridData=tempData;
           })
       },
       addDevice(){

       },
       confrim(){
           var arrID=[];  //存放当前勾选用户的ID
           var deviceID=this.editObj.id; //获取需要分配的设备ID
           var strID='';
           var userID=this.checkData;
           var self=this;
           $.each(this.checkData,function(i){
               arrID.push(this.id);
               strID=strID+this.id+'&';
           })
           let data=deviceID+':'+strID;
           var url="http://localhost:8088/api/v1.0/user/allot"; 
            self.$http.post(url,data).then(res=>{
            var result=res.bodyText;
            if(result!=0){
                self.$notify({
                title: '提示',
                message: '成功分配！'+result+'个用户!',
                type: 'info',
                position: 'bottom-right',
                showClose: false,
                duration:1000
              });
            }
          }).then(res=>{
             self.dialogTableVisible=false;
             self.getData();
          })
       },
        handleSelectionChange(val) {
        this.checkData = val;
      },
      
    }
  }
</script>