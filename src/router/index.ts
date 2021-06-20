import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw
} from 'vue-router'
import Home from '@/views/Home.vue'
import Test from '@/views/Test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('@/views/Vuex.vue') // 懒加载 Axios 组件
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
