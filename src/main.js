import Vue from 'vue'
import App from './App.vue'
import router from "./router/router.js";
import './plugins/element'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import store from './store'
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
