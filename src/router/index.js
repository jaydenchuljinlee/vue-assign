import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import NotFound from '@/pages/404'
import List from '@/pages/List'
import Home from '@/pages/Home'

Vue.use(Router)
Vue.use(store)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail',
      name: 'List',
      component: List
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

router.beforeEach((to, from, next) => {

  if ((store.state.name == '' && from.path == '/' && to.path != '/')
    || (store.state.name != '' && from.path != '/' && to.path == '/'))
  {
    next(false)
  } else
  {
    next()
  }
  
})

export default router
