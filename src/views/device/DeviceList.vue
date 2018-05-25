<template>
<div>
     <span style="float:left;margin-bottom:10px;">
        <el-input  placeholder="请输入内容" size="small">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </span>
  <el-table :data="tableData" border style="width:100%;margin:0 auto; text-algin:center">
        <el-table-column prop="name" label="名称" width="300px" header-align="center"></el-table-column>
        <el-table-column prop="type" label="类型" width="300px" header-align="center"></el-table-column>
        <el-table-column prop="number" label="数量" width="300px" header-align="center"></el-table-column>
         <el-table-column label="分配"  header-align='center'>
            <template slot-scope="scope">
                <el-button @click="allot" type="text" size="small">分配</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
 export default {
    data(){
        return{
           
        }
       },
    methods: {
       allot(){

       }
    }
  }
</script>