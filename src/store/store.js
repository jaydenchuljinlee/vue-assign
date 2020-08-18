// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    inserted: 'jin',
    diary: [
      {
        title: '1번',
      },
      {
        title: '2번',
      },
      {
        title: '3번',
      },
      {
        title: '4번',
      },
      {
        title: '5번',
      },
      {
        title: '6번',
      }],
  },
  //Getter
  getters: {
    getuser(state) {
      return state.name
    },
    getInserted(state) {
      return state.inserted
    },
    getDiary(state) {
      return state.diary
    },
  },
  //Mutation
  mutations: {
    setUser(state, payload) {//count 증가

      //console.log("mutations: " + payload)

      state.name = payload
    },
    insertDiary(state, payload) {

      console.log("mutations: " + payload)

      state.diary = payload
    },
  },
  //Action
  actions: {
    asyncSetUser(context, payload) {//action을 통한 증가

      //console.log("actions: " + payload)

      context.commit('setUser', payload)
    },
    asyncInsertDiary(context, payload) {//action을 통한 증가

      console.log("actions: " + payload)

      context.commit('insertDiary', payload)
    },
  }
})
