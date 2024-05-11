import { createRouter, createWebHistory } from 'vue-router'
import Homepage from "@/views/Homepage.vue";
import Detail from "@/views/detail.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail
        }
    ]
})

export default router
