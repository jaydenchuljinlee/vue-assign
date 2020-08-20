
const mutations =
{
  setUser(state, payload)
  {//사용자 이름 등록

    state.name = payload
  },
  insertDiary(state, payload)
  {//다이어리 요소 추가

    state.diary.push(payload)
  },
  deleteDiary(state, payload)
  {//다이어리 요소 제거

    state.diary.splice(payload, 1)
  }
}

export default mutations
