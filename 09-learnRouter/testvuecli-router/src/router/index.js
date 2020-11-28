import Vue from 'vue'
import VueRouter from 'vue-router'
// 这里也是路由懒加载
const Home = () => import('../views/Home.vue')
import UserView from '../views/User.vue'

// 1.通过Vue.use（插件），安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirct: '/home',
    component: Home
  },
  {
    path: '/user/:userId',
    component: UserView
  },
  {
    path: '/profile',
    component: ()=>import('../views/Profile.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 这种方法的路由加载是懒加载 
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {path: '', redirect: 'news'},
      {path: 'news', component: () => import('../views/AboutNews.vue')},
      {path: 'msgs', component: () => import('../views/AboutMsg.vue')}
    ]
  }
]

// 2.创建VueRouter对象
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router