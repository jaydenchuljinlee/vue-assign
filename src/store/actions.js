import router from '../router'

const actions = {
  asyncSetUser(context, payload) {//action을 통한 증가

    //console.log("actions: " + payload)

    context.commit('setUser', payload)
  },
  asyncInsertDiary(context, payload) {//action을 통한 증가

    let self = this

    //console.log("actions: " + payload)

    context.commit('insertDiary', payload)

    router.push("List").catch(err => { })
  },
  asyncDeleteDiary(context, payload) {//action을 통한 증가

    //console.log("actions: " + payload)

    var isDelete = confirm("정말로 삭제하시겠습니까?")

    if (isDelete) {
      context.commit('deleteDiary', payload)

      router.push("List").catch(err => { })
    }
  },
}

export default actions
