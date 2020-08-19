// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['name']
    })
  ],
  state,
  getters,
  mutations,
  actions
})

export default store
