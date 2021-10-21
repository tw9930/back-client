<template>
 <div class="login_comp">
   <div class="logo_img">
     <img src="./imgs/log.png" alt="log">
   </div>
   <el-form  class="login_form" ref="login" :rules="rules" :model="login">
     <!--   登录-->
     <el-form-item class="login_input " prop="user"   >
        <el-input prefix-icon="iconfont icon-geren"  v-model="login.user">   </el-input>
     </el-form-item>
     <!--   密码-->
     <el-form-item  class="login_input" prop="pass">
       <el-input prefix-icon=" iconfont icon-dingdan"  type="password" v-model="login.pass">   </el-input>
     </el-form-item>

     <!--  按钮-->
     <el-row class="buts">
       <el-button type="success" @click="login_form" >登录</el-button>
       <el-button type="info" @click="login_reset">重置</el-button>
     </el-row>
   </el-form>




 </div>


</template>

<script>

export default {
    data(){
      return{
        login: {
          user: '',
          pass: '',

         },
        rules: {
          user: [
            {required: true, message: '请输入用户名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          pass:[
            {required: true, message: '请输入用户密码', trigger: 'blur'},
            {min: 6, max:16, message: '长度在 6到 16 个字符', trigger: 'blur'}
          ]
        }
      }
    },
  methods:{
   login_reset(){
     this.$refs.login.resetFields()
   },
   async login_form(){
     try{
        let result =  await this.$refs.login.validate()
       console.log(result)
      }catch (err) {
       console.log(err.message)
     }
   }
  }
}
</script>

<style lang="less" scoped >
  .login_comp{
    width: 450px;
    height: 450px;
    background-color: #7e8c8d;
    position: relative;
    left: 50%;
    top: 200px;
    transform: translate(-50%);

    .logo_img{
      position: absolute;
      left: 50%;
      top :-50px;
      transform: translate(-50%);
      width: 150px;
      height: 150px;
      background-color: cadetblue;
      border-radius: 50%;
      img{
        width: 150px;
        height: 150px;
        border-radius: 50%;

      }
    }
    .login_form{
      position:absolute;
      bottom: 30%;
      width: 100%;
      .login_input{
        margin-left: 20%;
        width: 70%;
      }
    }
    .buts{
      display: flex;
      justify-content: flex-end;
    }
  }

</style>