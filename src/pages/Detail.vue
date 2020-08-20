<template>
  <main-layout slot>
    <div class="contents p-3  rounded">
      <div class="text-right my-3">
        <button class="btn btn-outline-info btn-sm" v-if="diary.isOwn" @click="$store.dispatch('asyncDeleteDiary',index)">삭제</button>
        <span v-if="!diary.isOwn">작성자만 삭제할 수 있습니다.</span>
      </div>
      <table class="table border">
        <colgroup>
          <col width="25%" />
          <col width="25%" />
          <col width="25%" />
          <col width="25%" />
        </colgroup>
        <tbody>
          <tr>
            <td>작성일</td>
            <td class="border">{{ diary.createdDate }}</td>
            <td class="border">작성자</td>
            <td>{{ diary.name }}</td>
          </tr>
          <tr>
            <td class="border">제목</td>
            <td colspan="3">{{ diary.title }}</td>
          </tr>
          <tr>
            <td colspan="4">
              <textarea class="form-control" rows="7" disabled>{{ diary.contents }}</textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '@/layouts/Main'
  import { mapGetters, mapActions } from 'vuex'

  export default
  {
    data()
    {
      return {
        index: 0,// 현재 다이어리의 index 번호
        diary: {},//현재 다이어리 객체
      }
    },
    mounted()
    {

      let self = this
      let url = window.location.href//현재 url

      self.index = url.charAt(url.length - 1)//url index 번호

      self.diary = self.$store.getters.getDiary[self.index]// 다이어리 객체 생성

      //삭제 버튼을 보여줄지 체크
      if (self.getUser == self.diary.name)
      {
        self.diary.isOwn = true
      }
      
    },
    components:
    {
      MainLayout
    },
    computed:
    {
    ...mapGetters({
      getUser: 'getuser',
      getDiary: 'getDiary',
    }),
    },
    watch:
    {
      $route(to, from)
      {
        let self = this
        let url = window.location.href//현재 url

        self.index = url.charAt(url.length - 1)//url index 번호

        self.diary = self.$store.getters.getDiary[self.index]// 다이어리 객체 생성

        //삭제 버튼을 보여줄지 체크
        if (self.getUser == self.diary.name) {
          self.diary.isOwn = true
        }
      }
    },
    actions:
    {
      ...mapActions({
        asyncInsertDiary: 'asyncInsertDiary',
        asyncDeleteDiary: 'asyncDeleteDiary',
      }),
    }
  }
</script>

<style>
</style>
