<template>
    <div>
       <!--  面包屑顶部部 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>权限管理</el-breadcrumb-item>
  <el-breadcrumb-item>角色列表</el-breadcrumb-item>
  </el-breadcrumb>
  <!-- 卡片 -->
  <el-card >
<!-- 添加角色 -->
      <div>
        <el-row :gutter="20">
              <el-col :span="6"> <div ><el-button type="primary">添加角色 </el-button> </div> </el-col>
            </el-row><br>
      </div>
      <!-- 角色表格 -->
  <div>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
       <el-table-column
      type="index"
    > <i class="el-icon-arrow-right"></i></el-table-column>
    
    <el-table-column
    label="#"
    type="index"
    ></el-table-column>
    <el-table-column
      prop="roleName"
      label="角色名称"
     >
    </el-table-column>
    <el-table-column
      prop="roleDesc"
      label="角色描述"
     >
    </el-table-column>
<el-table-column
      prop="level"
      label="操作"
      width="300px"
      >
  <!--            作用域插槽-->
            <template slot-scope="scope">

              <el-button type="primary" icon="el-icon-edit" size="mini" @click="roleEdit(scope.row)"> 剪辑</el-button>
        
              <el-button type="danger"  icon="el-icon-delete" size="mini" @click="roleDelete(scope.row)">删除</el-button>
             
                <el-button type="warning" icon="el-icon-finished" size="mini" @click="roleWarning"> 分配角色</el-button>
           
            </template>


    </el-table-column>

 
  </el-table>
  </div>
</el-card>
    </div>
</template>
<script>
export default {
    data(){
            return {
                tableData:[]
            }
        },
    created(){
        this.getRoles()
    },
    methods:{
        // 发送请求获取权限数据
        async getRoles(){
        //    获取角色列表
            const {data:res}= await this.$http.get('roles')
            if(res.meta.status>=200 && res.meta.status<=299) {
              console.log(res);
              this.tableData = res.data;
        }  else this.$message.info('刷新失败')
    },
    // 角色列表的操作
      roleEdit(){

      },
    roleDelete(){

    },
    roleWarning(){

    },
    },
  
}
</script>

<style lang="less" scoped>



</style>