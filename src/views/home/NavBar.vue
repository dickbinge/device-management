<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      unique-opened
      router
      active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>Account</span>
          </template>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>Device</span>
          </template>
        </el-submenu>

          <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>Setting</span>
          </template>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<style>

</style>

<script>
import Account from '@/views/user/Account'
import Device from '@/views/device/Device'
  export default {
    components:{
       'navaccount':Account
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>