
import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
import HomePadrao from '@/views/HomePadrao.vue'
import LoginPadrao from '@/views/LoginPadrao.vue'
import SitePadrao from '@/views/SitePadrao.vue'

const routes = [
    {
        path: '/', //localhost:8080/site
        component: SitePadrao
    },
    {
        path: '/home', //localhost:8080/home
        component: HomePadrao
    },
    {
        path: '/login', //localhost:8080/login
        component: LoginPadrao
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router