//配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
/*
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
*/
const Home = ()=> import('../components/Home')
const About = ()=> import('../components/About')
const User = ()=> import('../components/User')
const Message = () => import('../components/Message')
const News = () => import('../components/News')
const Profile =() => import('../components/Profile')
const Good = () => import('../components/Good')


//通过Vue.use(插件)安装插件
Vue.use(VueRouter)


//创建VueRoRouter对象
const routes = [
  {
    path: '',
    //redirect重定向
    redirect: '/home'
  },
  {
    path:'/home',
    component: Home,
    meta:{
      title: "首页"
    },
    children: [
      {
        path: '',
        redirect: 'message'
      },
      {
        path: 'message',
        component: Message,
        meta:{
          title: "消息"
        }
      },
      {
        path: 'news',
        component: News,
        meta: {
          title: "新闻"
        }
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: "关于"
    }
  },
  {
    path: '/user/:userName',
    component: User,
    meta: {
      title: "用户"
    }
  },
  {
    name: 'profile1',
    path: '/profile',
    component: Profile,
    meta: {
      title: "档案"
    }
  },
  {
    path: '/good',
    component: Good,
    meta: {
      title: "商品"
    },
    beforeEnter(to,form,next){
      console.log("beforeEnter,good");
      next();
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})


router.beforeEach((to,from,next) => {
  console.log(to)
  console.log("+++++++++++");  //前置钩子(守卫)
  document.title = to.matched[0].meta.title;
  next();
})

router.afterEach((to,from) =>{
  console.log("----------")  //后置钩子(守卫)
})

export default router
