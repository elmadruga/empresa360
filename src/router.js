
import HomePadrao from '@/views/HomePadrao.vue'
import LoginPadrao from '@/views/LoginPadrao.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
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
    history: createWebHashHistory(),
    routes: routes
})

export default router