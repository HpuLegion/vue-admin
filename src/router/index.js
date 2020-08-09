import Vue from 'vue'
import VueRouter from 'vue-router'

//解决Avoided redundant navigation to current location: "/index". 的路由重复报错的问题
//报错地点在 后台首页 -- 点击首页 处
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

//优化 ----- component: ()=>import('@/views/Layout')  引用出现多次
import Layout from '@/views/Layout/index.vue'

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
    path: '/console',
    name: 'Console',
    redirect: "index",
    meta:{
      name:'控制台'
    },
    hidden:false,
    component: Layout,
    // component: Layout,
    children:[
      {
        path: '/index',
        name: 'Index',
        meta:{
          name:'首页'
        },
        component: ()=>import('@/views/Console/index.vue')
      }
    ]
  },
  {
    path: '/paking',
    name: 'Paking',
    meta:{
      name:'停车场'
    },
    hidden:false,
    component: Layout,
    children:[
      {
        path: '/listManager',
        name: 'ListManager',
        meta:{
          name:'列表管理'
        },
        component: ()=>import('@/views/ListManager')
      },
      {
        path: '/addPaking',
        name: 'AddPaking',
        meta:{
          name:'新增停车场'
        },
        component: ()=>import('@/views/AddPaking')
      },
    ]
  },

  // {
  //   path: '/info',
  //   name: 'Info',
  //   meta:{
  //     name:'信息管理'
  //   },
  //   // component: ()=>import('@/views/Layout'),
  //   component: Layout,
  //   children:[
  //     {
  //       path: '/infoList',
  //       name: 'InfoList',
  //       meta:{
  //         name:'信息列表'
  //       },
  //       component: ()=>import('@/views/Info/infoList.vue')
  //     },
  //     {
  //       path: '/infoCate',
  //       name: 'InfoCate',
  //       meta:{
  //         name:'信息分类'
  //       },
  //       component: ()=>import('@/views/Info/infoCate.vue')
  //     },
  //     {
  //       path: '/infoDetails',
  //       name: 'InfoDetails',
  //       meta:{
  //         name:'信息详情'
  //       },
  //       component: ()=>import('@/views/Info/infoDetails.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/userManage',
  //   name: 'UserManage',
  //   meta:{
  //     name:'用户管理'
  //   },
  //   // component: ()=>import('@/views/Layout'),
  //   component: Layout,
  //   children:[
  //     {
  //       path: '/userList',
  //       name: 'UserList',
  //       meta:{
  //         name:'用户列表'
  //       },
  //       component: ()=>import('@/views/UserManage/userList.vue')
  //     }
  //   ]
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
