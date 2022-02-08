import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('../views/home')
                }, {
                    path: '/user',
                    name: 'user',
                    component: () => import('../views/user')
                }, {
                    path: '/mall',
                    name: 'mall',
                    component: () => import('../views/mall')
                }, {
                    path: 'other/page1',
                    name: 'page1',
                    component: () => import('../views/other/pageOne')
                }, {
                    path: 'other/page2',
                    name: 'page2',
                    component: () => import('../views/other/pageTwo')
                }
            ]
        }
    ]
})

export default router