// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
    }
  }

})
