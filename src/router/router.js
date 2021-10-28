import Vue from "vue";
import VueRouter from "vue-router";

import route from "./route.js";
Vue.use(VueRouter)
//全局路由导航守卫
// router.beforeEach((to,form,netx)=>{
// if (to.name){
//     netx()
// }
//
// })

//创建路由器
const routes  = new VueRouter({
    routes: route
})
routes.beforeEach((to,form,next)=>{
//    to 代表即将去哪里，form：代表当前要离开的路由 next：
})
export default routes
