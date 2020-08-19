<template>
  <main-layout>
    <div>
      <input v-model="diary.title" />
      <input v-model="diary.contents" />
      <button @click="save">저장</button>
      <button @click="cancel">취소</button>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '@/layouts/Main'
  import { mapGetters, mapActions } from 'vuex' 

  export default {
    data() {
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
    mounted() {

      let self = this

      self.diary.name= self.getUser
      self.diary.createdDate= '2020년 8월 19일'
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
    methods: {
      save() {

        let self = this

        if (self.diary.title == '' || self.diary.contents == '') {
          alert("제목과 내용을 채워주세요!")
          return
        }

        self.$store.dispatch('asyncInsertDiary', self.diary)

        self.$router.push("/diary/list")
      },
      cancel() {

        self.$router.push("/diary/list")
      },

    },
    actions: {
      ...mapActions({
        asyncInsertDiary: 'asyncInsertDiary'
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
