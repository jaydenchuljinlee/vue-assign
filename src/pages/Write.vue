<template>
  <main-layout slot>
    <div class="contents p-3 rounded">
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
            <td class="border" v-model="diary.createdDate">{{ diary.createdDate }}</td>
            <td class="border">작성자</td>
            <td>{{ getUser }}</td>
          </tr>
          <tr>
            <td class="border">제목</td>
            <td colspan="3"><input type="text" class="form-control" v-model="diary.title" placeholder="제목을 입력해주세요..."/></td>
          </tr>
          <tr>
            <td colspan="4">
              <textarea class="form-control" rows="7" v-model="diary.contents" placeholder="내용을 입력해주세요..."></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-center">
        <button class="btn btn-outline-info btn-sm" @click="save">저장</button>
        <button class="btn btn-outline-info btn-sm" @click="cancel">취소</button>
      </div>
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
        diary: {
          title: '',
          contents: '',
          name: '',
          createdDate: '',
          updatedDate: '',
          isShow: true,
        },
      }
    },
    mounted()
    {

      let self = this

      self.diary.name= self.getUser

      let today = new Date()          // 대한민국 표준시

      let year  = today.getFullYear() // 년도 정보
      let month = today.getMonth() + 1// 월 정보
      let date  = today.getDate()     // 날짜 정보

      self.diary.createdDate = year + "년 " + month + "월 " + date + "일 " 
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
    methods:
    {
      //다이어리 작성 후 저장하는 메서드
      save()
      {

        let self = this

        //제목이나 내용이 비어있다면
        if (self.diary.title == '' || self.diary.contents == '')
        {
          alert("제목과 내용을 채워주세요!")
          return
        }

        //vuex를 통해 다이어리 배열에 저장
        self.$store.dispatch('asyncInsertDiary', self.diary)
      },
      //작성 도중 취소했을 때의 메서드
      cancel()
      {

        let self = this

        //리스트 페이지로 이동
        self.$router.push('List')
      },

    },
    actions:
    {
      ...mapActions({
        asyncInsertDiary: 'asyncInsertDiary',
        asyncSetUser: 'asyncSetUser'

      }),
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
