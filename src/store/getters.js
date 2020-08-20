
const getters =
{
  getuser(state) {//현재 로그인한 사용자 정보를 불러옴
    return state.name
  },
  getInserted(state) {//등록된 사용자 정보를 불러옴
    return state.inserted
  },
  getDiary(state) {//다이어리 배열 정보를 불러옴
    return state.diary
  },
}

export default getters
