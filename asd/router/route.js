// 创建路由对象 里面包含多路由
import home from "../components/home/home";
export default
    [
        {  path:'/',
        redirect:'/home',
        component:home
        },

      {
        path: '/home',
        component: home,
       
        },
       
    
    ]


