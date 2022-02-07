import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import User from '../views/User'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes :[
        {
            path: '/',
            name: 'Home',
            component: Home
        },{
            path: '/user',
            name: 'User',
            component: User
        }
    ]
})

export default router