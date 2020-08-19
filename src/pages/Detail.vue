<template>
  <main-layout>
    <div>
      {{ $store.getuser }}
      {{ diary.title }}
      <button @click="$store.dispatch('asyncDeleteDiary',index)">삭제</button>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '@/layouts/Main'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        index: 0,
        diary: {},
      }
    },
    created() {

      let self = this
      let str = window.location.href

      self.index = str.charAt(str.length - 1)

      self.diary = self.$store.getters.getDiary[self.index]
      
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
