import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/CateGory')
const Profile = () => import('../views/profile/Profile')
const Shopcart = () => import('../views/shopcart/ShopCart')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/shopcart',
      component: Shopcart
    }

  ],
  mode: 'history'
})
