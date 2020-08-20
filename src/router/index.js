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

const router = new Router
  ({
  routes: [
    {//인덱스 페이지는 /login 페이지를 재호출
      path: '/',
      redirect: '/login'
    },
    {//로그인 페이지
      path: '/login',
      name: 'Login',
      component: Login
    },
    {//다이어리 리스트 페이지
      path: '/diary/list',
      name: 'List',
      component: List
    },
    {//다이어리 작성 페이지
      path: '/diary/write',
      name: 'Write',
      component: Write
    },
    {//다이어리 상세정보 페이지
      path: '/diary/:index',
      name: 'Detail',
      component: Detail,
      beforeEnter: (to, from, next) =>
      {

        let len = store.state.diary.length// 현재 다이어리 갯수

        let cur = Number(to.path.substring(to.path.lastIndexOf('/')+1))// :index에 해당하는 값

        //파라미터가 숫자가 아니거나 다이어리 인덱스보다 높을 경우
        if (isNaN(cur) || cur >= len)
        {
          next('/diary/list')
        } else
        {
          next()
        }
      }
    },
    {//그 외, 나머지 url은 404페이지로 이동
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

router.beforeEach((to, from, next) =>
{

  //로그인 안된 메인 페이지에서 이동이나
  //로그인 상태에서 로그인페이지 이동을 제어
  if (store.state.name != '' && to.path == '/login')
  {
    next('/diary/list')
  } else if (store.state.name == '' && !(to.path == '/' || to.path == '/login'))
  {
    next('/login')
  } else {

    next()
  }
})

export default router
