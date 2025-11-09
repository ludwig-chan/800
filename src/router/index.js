import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../components/MainLayout.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'shop-info',
          name: 'shop-info',
          component: () => import('../views/ShopInfoView.vue')
        },
        {
          path: 'shop-settings',
          name: 'shop-settings',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'activity',
          name: 'activity',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'marketing',
          name: 'marketing',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'tools',
          name: 'tools',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'xiaopu',
          name: 'xiaopu',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'business-analysis',
          name: 'business-analysis',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'experience',
          name: 'experience',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'violation',
          name: 'violation',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'data-center',
          name: 'data-center',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'cooperation',
          name: 'cooperation',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path: '/new-page',
      name: 'new-page',
      component: () => import('../views/NewPageView.vue')
    }
  ]
})

export default router