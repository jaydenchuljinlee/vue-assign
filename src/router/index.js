import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import NotFound from '@/pages/404'
import List from '@/pages/List'
import Login from '@/pages/Login'
import Detail from '@/pages/Detail'
import Write from '@/pages/Write'

Vue.use(Router)
Vue.use(store)

const router = new Router({
  routes: [
    {
      path: '/',
      alias: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/diary/list',
      name: 'List',
      component: List
    },
    {
      path: '/diary/write',
      name: 'Write',
      component: Write
    },
    {
      path: '/diary/:index',
      name: 'Detail',
      component: Detail
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

router.beforeEach((to, from, next) => {

  //로그인 안된 메인 페이지에서 이동이나
  //로그인 상태에서 로그인페이지 이동을 제어 
  if ((store.state.name == '' && (from.path == '/login' || from.path == '/') && (to.path != '/' && to.path != '/login'))
    || (store.state.name != '' && (from.path != '/' || from.path != '/login') && (to.path == '/' && to.path == '/login')))
  {
    next(false)
  } else
  {
    next()
  }
  
})

export default router
