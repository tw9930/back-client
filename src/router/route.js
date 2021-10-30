// 创建路由对象 里面包含多路由
import login from "../components/login/login.vue";
import home from "../components/home/home";
import userList from "../components/userList/userList";
import welcome from "../components/welcom/welcom";
export default
    [
        {
        //    路由重定向
            path:'/',
            redirect:'/login' //重定向

        }
        ,{
            path:'/login',
            component:login

        }
        ,{
        path: '/home',
        component: home,
        redirect:'/welcome',
        children:[{ path:'/welcome',component:welcome,},
            {path: '/users',component: userList}
        ],


        }
    ]


