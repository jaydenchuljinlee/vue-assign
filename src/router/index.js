import Vue from 'vue'
import Router from 'vue-router'
import AxiosTest from '@/components/AxiosTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AxiosTest',//과제 테스트한 vue 파일입니다
      component: AxiosTest,
    }
  ]
})
