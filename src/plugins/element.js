import Vue from 'vue'
import {
    Menu,
    Submenu,
    MenuItem,

    Container,
    Button,
    Form,
    FormItem,
    Input,
    Row,
    Header,
    Calendar,
    Aside,
    Main,
Message} from "element-ui";
 // message 需要挂载到vue的全局属性上才能正常使用
Vue.prototype.$message = Message
//注册UI组件 这样才能正常使用
Vue.use(Form)
Vue.use(Button)
Vue.use(Row)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Calendar)
Vue.use(Main)
Vue.use(Button)
Vue.use(Container)
Vue.use(Menu)

Vue.use(MenuItem)
Vue.use(Submenu)
