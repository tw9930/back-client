<template>
  <div class="warp">
    <div class="login_comp">
      <div class="logo_img">
        <img src="./imgs/log.png" alt="log">
      </div>
      <el-form  class="login_form" ref="login" :rules="rules" :model="login">
        <!--   登录-->
        <el-form-item class="login_input " prop="user"   >
          <el-input prefix-icon="iconfont icon-geren"  v-model="login.username">   </el-input>
        </el-form-item>
        <!--   密码-->
        <el-form-item  class="login_input" prop="pass">
          <el-input prefix-icon=" iconfont icon-dingdan"  type="password" v-model="login.password">   </el-input>
        </el-form-item>

        <!--  按钮-->
        <el-row class="buts">
          <el-button type="success"  :plain="true" @click="login_form()" >登录</el-button>
          <el-button type="info" :plain="true" @click="login_reset">重置</el-button>
        </el-row>
      </el-form>

    </div>
  </div>



</template>

<script>

export default {
    data(){
      return{
        login: {
          username: 'admin',
          password: 123456,

         },
        rules: {
          username: [
            {required: true, message: '请输入用户名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          password:[
            {required: true, message: '请输入用户密码', trigger: 'blur'},
            {min: 6, max:16, message: '长度在 6到 16 个字符', trigger: 'blur'}
          ]
        }
      }
    },
  methods:{

   //   需要拿到表单的引用对象，可以通过ref绑定获取到该对象
   login_reset(){
     this.$refs.login.resetFields() //重置表单数据
   },
    async login_form(){
       //对表单进行验证
       this .$refs.login.validate( async (val)=>{
       //  验证后进行登录发请求
         if (!val){
           alert("请输入正确格式的用户与密码")
         }else {
          const {data:res } = await this.$http.post('login',this.login) //进行登录发请求 发现返回是个promise对象，可以使用async await，取得返回的值
          if( res.meta.status >=200 && res.meta.status <= 299){
            //为了守卫导航已经token验证需要保存token
            window.sessionStorage.setItem('token',res.data.token )
            //登录弹窗
            this.$message({message: '恭喜你，登录成功',});
          //  登录成功后编程式导航跳转到主页
            this.$router.push('/home')
          } else {  this.$message.error('密码或者账号错误');} // 错误弹窗
         }
       })
   }
  }
}
</script>

<style lang="less" scoped >
  .warp{
    background-image: url("./imgs/img.png");
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  .login_comp{

    width: 450px;
    height: 450px;
    background-color: skyblue;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

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
        width: 80%;
        margin: 20px auto;
      }
    }
    .buts{
      left: 50%;
      display: flex;
      //justify-content: flex-end;
    }
  }

</style>
