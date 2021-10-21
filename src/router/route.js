import login from "../components/login/login.vue";
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
    ]


