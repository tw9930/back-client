<template>
  <el-container>
    <!--    头部-->
    <el-header>
      <div>
        <img src="./image/logo.png" alt="logo" height="60px">
        <span> 后台管理系统</span>
      </div>
      <el-button type="info">退出</el-button>
    </el-header>
    <el-container>
      <!--      侧边栏  -->
      <el-aside width="200px">
        <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#409eff"
            :router= "true"
            :default-active='default_active'
        >
<!--          发现这样点开一个菜单时发现其他也会跟着展开。这是因为他们的index值一样-->
          <el-submenu :index="menus.id.toString()"    v-for="(menus,index) in menus" :key="menus.id" >
            <!--            一级菜单模板区-->
            <template slot="title">
              <i :class="  iconObj[index]"></i>
              <span> {{ menus.authName }} </span>
            </template>
<!--            二级菜单  -->
            <el-menu-item :index="'/'+itemList.path " v-for="itemList in menus.children"  :key ="itemList.id"  @click = active(itemList.path)>
              <i class="el-icon-menu" ></i>{{ itemList.authName }}</el-menu-item>
          </el-submenu>
        </el-menu>


      </el-aside>
      <!--      主体  -->
      <el-main>
<!--     route占位符-->
        <router-view>

        </router-view>

      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      //cai菜单列表的图标
      iconObj:[  'el-icon-user-solid',
        'el-icon-key',
        'el-icon-shopping-bag-1',
        'el-icon-s-order',
        'el-icon-edit-outline'],
      default_active: '',
      menus: ''

    }
  },
  //在初始化模板时发送请求获取菜单数据
  created() {
    this.getMenuData()
  },
  methods: {
    //   发送请求获取菜单数据
    async getMenuData() {
      const {data: res} = await this.$http.get('menus')

      if (res.meta.status >= 200 || res.meta.status <= 299) {

        let {data} = res
        this.menus = data
      } else console.log(res.meta.msg)
    },
    active(path){
      window.sessionStorage.setItem('default-active',path)
      this.default_active = '/' + window.sessionStorage.getItem('default-active')
    }

  }


}


</script>


<style lang="less" scoped>
.el-container {
  height: 100%;
}

.el-header {
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  background-color: #3c3f41;
  align-items: center;

  div {
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;

    span {
      margin-left: 15px;
    }
  }
}

.el-main {
  background-color: #e9eef3;

}

.el-aside {
  background-color: #545c64;

}

</style>
