import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import router from "./router/router.js";
import './plugins/element'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import store from './store'
axios.defaults.baseURL =  'http://127.0.0.1:8888/api/private/v1/' //配置请求的默认地址
//将axios挂载到全局对象上
Vue.prototype.$http = axios
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
