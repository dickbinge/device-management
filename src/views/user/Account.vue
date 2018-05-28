<template>
<div>
  <div id="head">
    <span style="float:left;margin-bottom:10px;">
       <el-input placeholder="请输入内容" v-model="selectLabel" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="用户" value="1"></el-option>
          <el-option label="设备" value="2"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </span>
    <span style="float:right;">
        <el-button type="primary" size="small" @click="addUser">增加用户</el-button>
        <el-button type="danger" size="small">批量删除</el-button>
    </span>
    <el-dialog title="新增用户" :visible.sync="dialogFormVisible" style="width:1000px; margin:0 auto;text-algin:center">
  <el-form :model="form">
    <el-form-item label="用户名" :label-width="formLabelWidth">
       <el-input type="text" v-model="form.name"  size="small"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
       <el-input type="password" v-model="form.password"  size="small"></el-input>
    </el-form-item>
     <el-form-item label="电话" :label-width="formLabelWidth">
       <el-input type="text" v-model="form.phone"  size="small"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth">
       <el-input type="text" v-model="form.email"  size="small"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="reset" size="small">取 消</el-button>
    <el-button type="primary" @click="confrim" size="small">确 定</el-button>
  </div>
</el-dialog>
  </div>   
  <el-table :data="tableData" type="index" border style="width:100%;height:400px;margin:0 auto; text-algin:center" 
  @row-click='handleRowHandle'>
     <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="username" label="姓名" width="200"   header-align='center' ></el-table-column>
        <el-table-column prop="phone" label="电话" width="250"  header-align='center'></el-table-column>
        <el-table-column prop="email" label="邮箱" width="280"  header-align='center'></el-table-column>
        <el-table-column label="View"  header-align='center'>
            <template slot-scope="scope">
                <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
        <el-table-column label="Delete"  header-align='center'>
            <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index,tableData)" type="text" size="small">移除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
    <div id="device" v-if="showde">
      <device-Info></device-Info>
    </div>
</div>

</template>

<style>
  #device{
    margin-top:30px;
  }
  .el-select .el-input {
    width: 100px;
  }
  .dialog-footer{
    text-align: center;
  }
</style>
<script>
import Device from '@/views/device/Device'
   export default{
     data(){
       return{
         selectLabel:'',
         tableData:[],
         showde:false,
         select:'',
         dialogFormVisible: false,
         form: {
          name: '',
          password: '',
          phone:'',
          email:''
        },
        formLabelWidth: '120px'
       }
     },
     components:{
        "device-Info":Device
     },

     mounted(){
        this.getData();
     },
     ready:{

     },

     methods:{
       getData(){
          let _this=this;
          var url="http://localhost:8008/api/v1.0/user/info";  //后台请求
          this.$http.get(url).then(res=>{
            var obj={};
            _this.tableData=res.body.data;
          })
       },
       handleRowHandle(){
          this.showde=true;

       },search(){
          let data={'inputUser':this.selectLabel,'selectValue':this.select};
          var url="http://localhost:8008/api/v1.0/user/infoInput"; 
          this.$http.post(url,this.selectLabel).then(res=>{
            _this.tableData=res.body.data;
          })
       },addUser(){
         var self=this;
          self.dialogFormVisible=true;
         
       },confrim(){
          var self=this;
          let data={'id':'','username':this.form.name,'password':this.form.password,'phone':this.form.phone,'email':this.form.email,'type':''};
          var url="http://localhost:8008/api/v1.0/user/addcount";
          
          self.$http.post(url,data).then(res=>{
             var result=res.body.result;
             if(result!="0"){
                self.$notify({
                  title: '提示',
                  message: '当前用户名已存在，请修改后重新注册！',
                  type: 'info',
                  position: 'bottom-right',
                  showClose: false,
                  duration:1000
                });
                return false;
             }else{
                self.insertUser();
                self.dialogFormVisible=false;
             }
          })
       },
       reset(){
          this.dialogFormVisible=false;
       },
       insertUser(){
         var self=this;
         let data={'id':'','username':this.form.name,'password':this.form.password,'phone':this.form.phone,'email':this.form.email,'type':''};
         var url="http://localhost:8008/api/v1.0/user/info";
          self.$http.post(url,data).then(res=>{
            if(res.body.id!=null){
              self.$notify({
                title: '提示',
                message: '用户信息添加成功！',
                type: 'success',
                position: 'bottom-right',
                showClose: false,
                duration:1000
              });
            }
          })
          self.getData();
       },
        deleteRow(index, rows) {
          var id=rows[index].id;
          rows.splice(index, 1);
          var self=this;
          let data={'id':id,'username':'','password':'','phone':'','email':'','type':''};
          var url="http://localhost:8008/api/v1.0/user/info";
          self.$http.delete(url,data).then(res=>{
            if(res.body.result){
                self.$notify({
                title: '提示',
                message: '用户信息成功删除！',
                type: 'info',
                position: 'bottom-right',
                showClose: false,
                duration:1000
              });
            }
             self.getData();
          });
      }
     }
     
   }
</script>