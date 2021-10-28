// 创建路由对象 里面包含多路由
import login from "../components/login/login.vue";
import home from "../components/home/home";
export default
    [
        {
        //    路由重定向
            path:'/',
            redirect:'/login'

        }
        ,{
            path:'/login',
            component:login

        }
        ,{
        path: '/home',
        component: home
        }
    ]


