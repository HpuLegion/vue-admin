import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: ()=>import('@/views/Login')
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('@/views/Login')
  },
  // 后台控制主页面
  {
    path: '/console',
    name: 'Console',
    component: ()=>import('@/views/Layout')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
