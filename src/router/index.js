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
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

router.beforeEach((to, from, next) => {

  //to가 index 페이지일 때,
  if (to.path == '/')
  {

    //from이 index 페이지 일 때는 페이지 이동
    if (from.path == '/')
    {
      next()
    }

    //from이 index 페이지가 아닌데, 로그인 되지 않았을 때,
    if (store.state.name == '')
    {
      next(false)
    }

  //to가 index페이지가 아닐 때(이미 로그인 되어 있는 상태)
  } else
  {

    //로그인 되어 있는데, index 페이지로 이동하려할 때,
    if (from.path == '/')
    {

      //
      if (store.state.name != '')
      {
        next(false)
      } 
    }
  }

  //if (this.$store.state.name == '') next('/')
})

export default router
