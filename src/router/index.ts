import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
    },
    {
        path: '/policy',
        name: 'policy',
        component: () => import('@/views/PolicyView.vue')
    },

    // ✅ Catch-all 404 route - MUST be last
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../components/NotFound.vue'),
    }
  ],
})

export default router
