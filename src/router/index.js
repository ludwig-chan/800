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
          component: HomeView,
          meta: { title: '首页' }
        },
        {
          path: 'ffa/grs-new/qualification/shopinfo',
          name: 'shop-info',
          component: () => import('../views/ShopInfoView.vue'),
          meta: { title: '店铺基本信息' }
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
      component: () => import('../views/NewPageView.vue'),
      meta: { title: '店铺榜单-抖音电商罗盘' }
    },
    {
      path: '/shop/chance/rank-shop',
      name: 'rank-shop',
      component: () => import('../views/NewPageView.vue'),
      meta: { title: '店铺榜单-抖音电商罗盘' }
    }
  ]
})

// 路由守卫：根据路由meta设置页面标题和图标
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // 动态切换网站图标
  const favicon = document.querySelector("link[rel='icon']")
  if (favicon) {
    if (to.path === '/new-page' || to.path === '/shop/chance/rank-shop') {
      // new page 使用 tiktok 图标
      favicon.href = '/src/assets/ico/tiktok.ico'
    } else {
      // 其他页面使用默认图标
      favicon.href = '/src/assets/ico/q6t3g-cto5x-001.ico'
    }
  }
  
  next()
})

export default router