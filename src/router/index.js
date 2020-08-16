import Vue from 'vue'
import Router from 'vue-router'
import Vuextest from '@/components/Vuextest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vuextest',//과제 테스트한 vue 파일입니다
      component: Vuextest,
    }
  ]
})
