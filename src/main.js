import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "../router";
import './assets/less/index.less'
import store from "./store/index"
import http from 'axios'
import '../api/mock'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http = http;

router.beforeEach((to, from, next) => {
    store.commit('getToken')
    const token = store.state.user.token
    // 没有token，直接回去login页
    if (!token && to.name !== 'login') {
        next({name: 'login'})
    }else{
        next()
    }
})

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
