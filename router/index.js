import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import User from '../views/user'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes :[
        {
            path: '/',
            name: 'Main',
            component: Main,
            children:[
                {
                    path: '/home',
                    name: 'home',
                    component: ()=> import('../views/home')
                },{
                    path: '/user',
                    name: 'user',
                    component: User
                }
            ]
        }
    ]
})

export default router