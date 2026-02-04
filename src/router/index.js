import { createRouter, createWebHistory } from 'vue-router'
import MainMenu from '../pages/MainMenu.vue'
import OnePlayer from '../pages/OnePlayer.vue'
import TwoPlayer from '../pages/TwoPlayer.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainMenu
        },
        {
            path: '/play/one',
            name: 'one-player',
            component: OnePlayer
        },
        {
            path: '/play/two',
            name: 'two-player',
            component: TwoPlayer
        }
    ]
})

export default router
