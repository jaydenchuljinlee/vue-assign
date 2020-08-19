<template>
  <main-layout slot>
    <div>
      {{ $store.getuser }}
      {{ diary.title }}
      <button v-if="diary.isOwn" @click="$store.dispatch('asyncDeleteDiary',index)">삭제</button>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '@/layouts/Main'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        index: 0,// 현재 다이어리의 index 번호
        diary: {},//현재 다이어리 객체
      }
    },
    mounted() {

      let self = this
      let url = window.location.href//현재 url

      self.index = url.charAt(url.length - 1)//url index 번호

      self.diary = self.$store.getters.getDiary[self.index]// 다이어리 객체 생성

      //삭제 버튼을 보여줄지 체크
      if (self.getUser == self.diary.name) {
        self.diary.isOwn = true
      }
      
    },
    components: {
      MainLayout
    },
    computed: {
      ...mapGetters({
        getUser: 'getuser',
        getDiary: 'getDiary',
      }),
    },
    actions: {
      ...mapActions({
        asyncInsertDiary: 'asyncInsertDiary',
        asyncDeleteDiary: 'asyncDeleteDiary',
      }),
    }
  }
</script>

<style>
</style>
