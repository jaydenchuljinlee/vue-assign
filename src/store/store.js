// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    user: {},
    counter: 0
  },
  //Getter
  getters: {
    getCounter(state) {
      return state.counter
    },
    doubleCounter(state) {
      return state.counter*2
    },
    getUser(state) {
      return state.user
    }
  },
  //Mutation
  mutations: {
    addCounter(state, payload) {//count 증가
      return state.counter++
    },
    subCounter(state,payload) {//count 감소
      return state.counter--
    },
    setUser(state, payload) {//user 셋팅

      state.user = payload
      
    },
  },
  //Action
  actions: {
    asyncIncrement(context, payload) {//action을 통한 증가
      return setTimeout(() => {

        console.log(context)
        console.log(payload)

        context.commit('addCounter', payload.by)
      }, payload.duration)
    },
    asyncDecrement(context, payload) {//action을 통한 감소
      return setTimeout(() => {
        context.commit('subCounter', payload.by)
      }, payload.duration)
    },
    axiosTest(context, payload) {//user 비동기 호출

      //user 객체 파싱
      var param = {}

      param.email   = payload.user.email
      param.company = payload.user.company
      param.address = payload.user.address
      param.name    = payload.user.name

      //header 설정
      let config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      //비동기 호출
      axios.post('/api', JSON.stringify(param), config)
        .then((res) => {

          context.commit('setUser', res.data)

        })
        .catch((ex) => {

          console.log(ex)
        })
    }
  }
})
