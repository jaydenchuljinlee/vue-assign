<template>
  <main-layout slot>
    <div class="col-md-10">
      <img src="@/assets/logo.png">
      <br />
      <b><i>View 다이어리에 오신걸 환영합니다!</i></b>
      <div class="col-md-6 border mx-auto p-4 mt-3">
        <i class="m-3">등록자 정보 : {{ getInserted }}</i>
        <br />
        <div class="m-3">
          <input class="form-coltrol rounded border-info" v-model="name" placeholder="이름을 입력해주세요..."/>
          <button class="btn btn-outline-info btn-sm rounded-pill" @click="checkLogin(getInserted)">로그인</button>
        </div>
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
          name: '',
          }
      },
      components:
      {
        MainLayout
      },
      computed:
      {
        ...mapGetters({
          getInserted: 'getInserted',
          getUser: 'getuser',
        }),
      },
    methods:
    {
        //로그인 인증 메서드
      checkLogin(inserted)
      {

        let self = this

        //이름을 입력하지 않았을 때,
        if (self.name == '')
        {

          alert("이름을 입력해주세요!")
          return
        } else
        {

          //등록된 사용자가 아닐 때,
          if (inserted.indexOf(self.name) == -1)
          {

            alert("등록된 사용자가 아닙니다!")
            return
          }

          //사용자 정보 등록
          self.$store.dispatch('asyncSetUser', self.name)
          //등록 후 리스트 페이지 이동
          self.$router.push('/diary/list')
            
        }
      },
    },
    actions:
    {
      ...mapActions({
        asyncSetUser: 'asyncSetUser'
      }),
    }
  }
</script>

<style>

</style>
