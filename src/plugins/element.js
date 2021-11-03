import Vue from 'vue'
import {
    MessageBox,
    Dialog,
    Pagination,
    Tooltip,
    Switch,
    Table,
    TableColumn,
    Card,
    Menu,
    Submenu,
    MenuItem,
    Breadcrumb,
    BreadcrumbItem,
    Container,
    Button,
    Form,
    Col,
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
Vue.prototype.$confirm = MessageBox


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
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Card)
Vue.use(Col)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)

Vue.use(MenuItem)
Vue.use(Submenu)
