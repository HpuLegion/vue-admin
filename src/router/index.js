import Vue from 'vue'
import VueRouter from 'vue-router'

//解决Avoided redundant navigation to current location: "/index". 的路由重复报错的问题
//报错地点在 后台首页 -- 点击首页 处
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    meta:{
      name:'登录'
    },
    hidden:true,
    component: ()=>import('@/views/Login')
  },
  {
    path: '/login',
    name: 'Login',
    meta:{
      name:'登录'
    },
    hidden:true,
    component: ()=>import('@/views/Login')
  },
  // 后台控制主页面
  {
    path: '/layout',
    name: 'Layout',
    meta:{
      name:'后台首页'
    },
    component: ()=>import('@/views/Layout'),
    children:[
      {
        path: '/index',
        name: 'Index',
        meta:{
          name:'首页'
        },
        component: ()=>import('@/views/Layout/index.vue')
      }
    ]
  },
  {
    path: '/info',
    name: 'Info',
    meta:{
      name:'信息管理'
    },
    component: ()=>import('@/views/Layout'),
    children:[
      {
        path: '/infoList',
        name: 'InfoList',
        meta:{
          name:'信息列表'
        },
        component: ()=>import('@/views/Info/infoList.vue')
      },
      {
        path: '/infoCate',
        name: 'InfoCate',
        meta:{
          name:'信息分类'
        },
        component: ()=>import('@/views/Info/infoCate.vue')
      },
      {
        path: '/infoDetails',
        name: 'InfoDetails',
        meta:{
          name:'信息详情'
        },
        component: ()=>import('@/views/Info/infoDetails.vue')
      }
    ]
  },
  {
    path: '/userManage',
    name: 'UserManage',
    meta:{
      name:'用户管理'
    },
    component: ()=>import('@/views/Layout'),
    children:[
      {
        path: '/userList',
        name: 'UserList',
        meta:{
          name:'用户列表'
        },
        component: ()=>import('@/views/UserManage/userList.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
