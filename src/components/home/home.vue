<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<style lang="less">
.el-header{
  background-color:#b3c0d1;
}
.el-aside{
    background-color:#d3dce6;
  }
.el-main{
  position: absolute;
      background-color: #e9eef3;
    }
</style>