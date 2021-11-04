// 创建路由对象 里面包含多路由
import login from "../components/login/login.vue";
import home from "../components/home/home";
import userList from "../components/userList/userList";
import welcome from "../components/welcom/welcom";
import permission_list from "../components/Permission_list/Permission_list";
import Roles from "../components/Permission_list/roles";


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
        //home路由的子路由配置
        children:[{ path:'/welcome',component:welcome,},
            {path: '/users',component: userList},
            {  path:'/rights',    component:permission_list },
            {  path:'/roles',    component:Roles }
        ],
        },
       
    
    ]


