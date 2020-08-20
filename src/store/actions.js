import router from '../router'

const actions =
{
  asyncSetUser(context, payload)
  {//action을 통한 사용자 정보 커밋

    context.commit('setUser', payload)
  },
  asyncInsertDiary(context, payload)
  {//action을 통한 다이어리 요소 추가에 대한 커밋

    context.commit('insertDiary', payload)

    //요소 추가 후, 리스트 페이지로 이동
    router.push("List").catch(err => { })
  },
  asyncDeleteDiary(context, payload)
  {//action을 통한 다이어리 요소 제거에 대한 커밋

    var isDelete = confirm("정말로 삭제하시겠습니까?")

    //다이어리 요소를 확인하기 위해 confirm으로 확인 후 제거
    if (isDelete)
    {
      context.commit('deleteDiary', payload)

      //요소 제거 후, 리스트 페이지로 이동
      router.push("List").catch(err => { })
    }
  },
}

export default actions
