import Vue from "vue";
import VueRouter from "vue-router";

import route from "./route.js";
Vue.use(VueRouter)
export default new VueRouter( {
    routes:route
})