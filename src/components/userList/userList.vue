<template>
<div>
<!--  面包屑 顶部 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>

  </el-breadcrumb>
<!--卡片区域 -->
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
          <el-dialog title="添加信息" :visible.sync="postUserShow" label-width="100px" @close = "resetAddUserFrom(0 )" >
            <el-form :rules="rules" :model="postUsers"    label-width="100px" ref="postUsers">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="postUsers.username" ></el-input>
              </el-form-item>
              <el-form-item label="用户密码" prop="password">
                <el-input v-model="postUsers.password"  type="password"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="postUsers.email" ></el-input>
              </el-form-item>
              <el-form-item label="电话" prop="mobile">
                <el-input v-model="postUsers.mobile" ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="postUserShow = false">取 消</el-button>
              <el-button type="primary" @click="addUser">确 定</el-button>
            </div>

        </el-dialog>
      </div>
      <!-- 修改用户区域  -->
    <el-dialog title="修改用户" label-width="80px" :visible.sync="isVisible"  @close = "resetAddUserFrom(1)" > 
      <el-form :rules="rules" :model="userEdits"    label-width="100px" ref="userEdits">
              <el-form-item label="用户名">
                <el-input  :placeholder="userEdits.username"
                            :disabled="true"> ></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="userEdits.email" ></el-input>
              </el-form-item>
              <el-form-item label="手机" prop="mobile">
                <el-input v-model="userEdits.mobile" ></el-input>
              </el-form-item>
      </el-form>
              <div slot="footer" class="dialog-footer">
              <el-button @click="isVisible = false">取 消</el-button>
              <el-button type="primary"  @click="usermod">确 定</el-button>
            </div>
    </el-dialog>
<!-- 删除用户 -->

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
            <template slot-scope="scope">

              <el-button type="primary" icon="el-icon-edit" size="mini" @click="userEdit(scope.row)"></el-button>
        
              <el-button type="danger"  icon="el-icon-delete" size="mini" @click="userDelete(scope.row)"></el-button>
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
    //自定义效验规则 效验手机号
    let verifyMobile = ( value, callback)=>{
      if(!value) callback()
       value =Number(value)
      if (value.toString() === "NaN"){
          callback(new Error('请输入数字'))
      }else {
        let patt = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
        if (!patt.test(value)){
          callback(new Error("请输入正确格式手机号"))
        }
        callback()
      }
        }


    return {
// 修改用户参数
        userEdits:{
              id: "",
            username:'',
            mobile:'',
            email:'',

        },
      // 修改用户的对话框显示影藏
      isVisible:false,
      //添加用户 规则
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        email: [
          { required: false, message: '请输入邮箱', trigger: 'blur' },
          {type:'email', message: '邮箱格式错误', trigger: ['blur', 'change']  }
        ],
        mobile: [
          { required: false, message: '请输入手机号', trigger: 'blur' },
          // { type: 'number', message: '请输入正确格式手机号', trigger: 'blur' },
          {validator:verifyMobile,  trigger: ['blur','change']}
        ],

      },
      // 请求用户列表
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
      // 修改用户信息
      usermod(){
        this.$refs.userEdits.validate(async (isSucceed)=>{
          if(isSucceed){
            // 发送请求修改用户信息
             const {data:res} = await this.$http.put(`users/${this.userEdits.id}`,this.userEdits)
            if (res.meta.status >=200 && res.meta.status <=299){
              this.getUsers()
             this.$message.info('更新成功')
             this.postUserShow = false
             this.isVisible = false
           }
         else {
           this.$message.error('更新失败')
           }
          }else this.$message.error('更新失败')
            

        })
      },

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
    //  修改用户信息的操作
      userEdit(userList){
          this.userEdits.id = userList.id
          this.userEdits.username = userList.username
          this.isVisible = true;
      },
// 删除用户
      userDelete(userid) {
      this.$confirm.confirm('是否删除该用户', '确认信息', {
          confirmButtonText: '删除',
          cancelButtonText: '取消'
        })
          .then(async() => {
          const {data:res} =await this.$http.delete(`users/${userid.id}`)
             if (res.meta.status >=200 && res.meta.status <=299){
              this.getUsers()
           }
        
            this.$message({
              type: 'info',
              message: res.meta.msg
            });
          })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
          });
      },
      userWarning(){

      },
  //分页的一些操作
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
        this.$message.info('修改成功')
      }else {
        this.$message.error(res.meta.msg)
        this.getUsers()
      }
    },
    clearable(){
      this.getUsers()
    },
  //  重置添加的用户表单
    resetAddUserFrom( flag){
      if(flag){
           this.$refs.userEdits.resetFields()
      }else   this.$refs.postUsers.resetFields()
        
        
    },
  //  添加用户预验证
    addUser(){
       //预验证
       this.$refs.postUsers.validate(async (isSucceed) =>{
         //通过发请求，添加用户
         if (isSucceed){
           const {data:res} = await  this.$http.post('users',this.postUsers)
           if (res.meta.status >=200 && res.meta.status <=299){
             this.$message.info('添加用户成功')
             this.postUserShow = false
           }
         else {
           this.$message.error('添加失败')
           }
         }else {
           this.$message.error("添加失败")
         }
       })

    }
  },
  computed:{

  }
}
</script>

<style lang="less">

</style>
