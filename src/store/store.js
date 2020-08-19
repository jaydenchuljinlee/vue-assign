// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

Vue.use(Vuex)
Vue.use(Router)

export default new Vuex.Store({
  state: {
    name: '',
    inserted: ['jin','iron','jayden'],
    diary: [
      {
        title: '날이 좋아서 날이 좋지 않아서 날이 적당해서 퇴근하고 싶었다.',
        contents: '날이 좋아서 날이 좋지 않아서 날이 적당해서 퇴근하고 싶었다.',
        name: 'jin',
        createdDate: '2020년 8월 19일',
        updatedDate: '',
        isShow:true,
      },
      {
        title: '파국이다.',
        contents: '파국이다',
        name: 'iron',
        createdDate: '2020년 8월 19일',
        updatedDate: '',
        isShow: true,
      },
      {
        title: '아저씨가 도깨비죠?',
        contents: '아저씨가 도깨비죠?',
        name: 'jayden',
        createdDate: '2020년 8월 19일',
        updatedDate: '',
        isShow: true,
      },
    ],
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

      state.diary.push(payload) 
    },
    deleteDiary(state, payload) {

      state.diary.splice(payload,1)
    }
  },
  //Action
  actions: {
    asyncSetUser(context, payload) {//action을 통한 증가

      //console.log("actions: " + payload)

      context.commit('setUser', payload)
    },
    asyncInsertDiary(context, payload) {//action을 통한 증가

      let self = this

      //console.log("actions: " + payload)

      context.commit('insertDiary', payload)

      self.$router.push("/diary/list")
    },
    asyncDeleteDiary(context, payload) {//action을 통한 증가

      let self = this

      //console.log("actions: " + payload)

      context.commit('deleteDiary', payload)

      var isDelete = confirm("정말로 삭제하시겠습니까?")

      console.log(self.router)

      if (isDelete) {
        context.commit('deleteDiary', payload)

        self.$router.push("/diary/list")
      }
    },
  }
})
