
const mutations = {
  setUser(state, payload) {//count 증가

    //console.log("mutations: " + payload)

    state.name = payload
  },
  insertDiary(state, payload) {

    console.log("mutations: " + payload)

    state.diary.push(payload)
  },
  deleteDiary(state, payload) {

    state.diary.splice(payload, 1)
  }
}

export default mutations
