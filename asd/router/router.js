import Vue from "vue";
import VueRouter from "vue-router";

import route from "./route.js";
Vue.use(VueRouter)

//创建路由器
const routes  = new VueRouter({
    routes: route
})
// 路由守卫导航
/***
routes.beforeEach((to,form,next)=>{
//    to 代表即将去哪里，form：代表当前要离开的路由 next：
        if(to.path ==='/login') return next() //如果去的是登录页面直接放行
        let token = window.sessionStorage.getItem('token') //保存token
        if (token) {return next() } else next('/login') //检查token

})
 ***/
export default routes
