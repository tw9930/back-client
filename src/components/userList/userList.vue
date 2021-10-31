<template>
<div>
<!--  面包屑  -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>

  </el-breadcrumb>
<!--卡片区域-->
  <el-card>
    <div >
<!--      搜索添加区域 -->
      <el-row :gutter="20">
        <el-col :span="7">
          <div >  <el-input placeholder="请输入内容" v-model="resData.query"  @clear="clearable" clearable > <el-button @click="getUsers"  slot="append" icon="el-icon-search"></el-button>
          </el-input> </div>
        </el-col>
        <el-col :span="6"> <div ><el-button type="primary" @click="postUserShow = true">添加用户 </el-button> </div> </el-col>
      </el-row>
<!--      点击添加用户区域-->
      <div>
          <el-dialog title="添加信息" :visible.sync="postUserShow">
            <el-form :rules="rules" :model="postUsers"  label="用户名" >
              <el-form-item  >
                <el-input v-model="postUsers.username"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="postUserShow = false">取 消</el-button>
              <el-button type="primary" @click="postUserShow = false">确 定</el-button>
            </div>

        </el-dialog>
      </div>
<!--      用户表格区域-->
      <div>
        <el-table :data ='usersList' border style="width: 100%;margin-top: 15px">
          <el-table-column type="index" label="#"> </el-table-column>
          <el-table-column label="用户" prop="username"></el-table-column>
          <el-table-column label="邮箱"  prop="email"></el-table-column>
          <el-table-column label="电话"  prop="mobile"></el-table-column>
          <el-table-column label="角色"  prop="role_name"></el-table-column>
          <el-table-column label="状态">
            <!--            作用域插槽-->
            <template slot-scope="scope">
              <el-switch
                  @change="switchover(scope.row)"
                  v-model="scope.row.mg_state"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
              </el-switch>
            </template>

          </el-table-column>
          <el-table-column label="操作" >
<!--            作用域插槽-->
            <template >

              <el-button type="primary" icon="el-icon-edit" size="mini" @click="userEdit"></el-button>
              <el-button type="danger" icon="el-icon-delete" size="mini" @click="userDelete"></el-button>
              <el-tooltip content="分配角色" :enterable='false'>
                <el-button type="warning" icon="el-icon-finished" size="mini" @click="userWarning"></el-button>
              </el-tooltip>
            </template>

          </el-table-column>
        </el-table>

      </div>
      <div>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="this.resData.pagenum"
            :page-sizes="[1,2, 3,4]"
            :page-size="2"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
      </div>
    </div>
  </el-card>

</div>
</template>

<script>
export default {
  name:'userList',
  data(){
    return {
      rules: {
        username: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],

      },
      formLabelWidth:'120px',
      resData:{
        query:'',
        pagenum:1, //多少页
        pagesize:2,//多少条
      },
      usersList:[],
      total:0,
      postUserShow:false,//添加用户显示隐藏
      postUsers:{ //添加用户表单参数
        username:'',
        password:'',
        email:'',
        mobile:''
      }
    }
  },
 created() {
    // 在初识化完成后发送请求
  this.getUsers()
 },

  methods:{
     //发送请求获取用户列表数
     async getUsers(){
    const {data:res} = await this.$http.get('users',{
      params:this.resData
    })
       //对请求后的数据进行处理
       if (res.meta.status >=200 || res.meta.status <= 299){
         this.usersList = res.data.users
         this.total = res.data.total
       }else {
         this.$message.error(res.meta.msg)
       }
    },
    //  对用户的操作
      userEdit(){

      },
      userDelete(){

      },
      userWarning(){

      },
  //分页的一些操作
  //
    handleSizeChange(newVal){
      this.resData.pagesize = newVal
      this.getUsers()
    },
    handleCurrentChange(newVal){
      this.resData.pagenum = newVal
      this.getUsers()
    },
    //当角色状态发生改变时调用回调，参数是新的值
    async switchover(newVal){
     //  亲请求新的数据改变数据最新的状态
     const {data:res} =  await this.$http.put(`users/${newVal.id}/state/${newVal.mg_state}`)
      if (res.meta.status >= 200 && res.meta.status <= 299){
        this.$message.info('；修改成功')
      }else {
        this.$message.error(res.meta.msg)
        this.getUsers()
      }
    },
    clearable(){
      this.getUsers()
    }
  },
  computed:{

  }
}
</script>

<style lang="less">

</style>
