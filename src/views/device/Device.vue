<template>
<div>
    
  <el-table :data="tableData" border style="width:100%;margin:0 auto; text-algin:center">
        <el-table-column prop="name" label="名称" width="300px" header-align="center"></el-table-column>
        <el-table-column prop="type" label="类型" width="300px" header-align="center"></el-table-column>
        <el-table-column prop="number" label="数量" width="300px" header-align="center"></el-table-column>
    </el-table>
</div>
</template>
