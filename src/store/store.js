// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    getCounter(state) {

      return state.counter
    },
    doubleCounter(state) {
      return state.counter*2
    }
  },
  mutations: {
    addCounter(state, payload) {
      return state.counter++
    },
    subCounter(state,payload) {
      return state.counter--
    }
  },
  actions: {
    asyncIncrement(context, payload) {
      return setTimeout(() => {

        console.log(context)
        console.log(payload)

        context.commit('addCounter', payload.by)
      }, payload.duration)
    },
    asyncDecrement(context, payload) {
      return setTimeout(() => {
        context.commit('subCounter', payload.by)
      }, payload.duration)
    },
    axiosTest(context, payload) {

        console.log(payload)

        axios.get('/api',
          JSON.stringify(payload.user))
        .then((res) => {

          console.log(res)

        })
        .catch((ex) => {

          console.log(ex)
        })




    }
  }

})
