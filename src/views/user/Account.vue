<template>
<div>
  <div id="head">
    <span style="float:left;margin-bottom:10px;">
        <el-input  placeholder="请输入内容" size="small">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </span>
    <span style="float:right;">
        <el-button type="primary" size="small">增加用户</el-button>
        <el-button type="danger" size="small">批量删除</el-button>
    </span>
  </div>   
  <el-table :data="tableData" type="index" border style="width:100%;margin:0 auto; text-algin:center" 
  @row-click='handleRowHandle'>
     <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="姓名" width="200"   header-align='center' ></el-table-column>
        <el-table-column prop="phone" label="电话" width="250"  header-align='center'></el-table-column>
        <el-table-column prop="email" label="邮箱" width="280"  header-align='center'></el-table-column>
        <el-table-column label="View"  header-align='center'>
            <template slot-scope="scope">
                <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
        <el-table-column label="Delete"  header-align='center'>
            <template slot-scope="scope">
                <el-button @click.native.prevent="delete(scope.$index,tableData)" type="text" size="small">移除</el-button>
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
</style>
<script>
import Device from '@/views/device/Device'
   export default{
     data(){
       return{
         tableData:[],
         showde:false
       }
     },
     components:{
        "device-Info":Device
     },
    //  mounted(){
    //    var data=[];
    //    let _this=this;
    //     var url="http://localhost:8088/api/v1.0/user/info";  //后台请求
    //          this.$http.get(url).then(res=>{
    //            var obj={};
    //            var result=res;
    //            obj.name=res.username;
    //            obj.phone=res.phone;
    //            obj.email=res.email;
    //          })
    //  },
     methods:{
       handleRowHandle(){
          this.showde=true;
       }
     }
   }
</script>