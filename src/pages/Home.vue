<template>
  <main-layout slot>
    <input v-model="name" />
    <button @click="checkLogin(getInserted)">로그인</button>
  </main-layout>
</template>

<script>
  import MainLayout from '@/layouts/Main'
  import { mapGetters, mapMutations, mapActions } from 'vuex' 

  export default {
      data() {
        return {
          name: '',
          }
      },
      components: {
        MainLayout
      },
      computed: {
        ...mapGetters({
          getInserted: 'getInserted',
          getUser: 'getuser',
        }),
      },
      methods: {
        ...mapMutations({
          setUser: 'setUser'
        }),
        checkLogin(inserted) {

          let self = this

          //console.log(self.name)

          //이름을 입력하지 않았을 때,
          if (self.name == '') {

            alert("이름을 입력해주세요!")
            return
          } else {

            //등록된 사용자가 아닐 때,
            if (self.name != inserted) {

              alert("등록된 사용자가 아닙니다!")
              return
            }

            self.$store.dispatch('asyncSetUser', self.name)
            self.$router.push('/list')
            //console.log("getters: " + self.getUser)
          }
        },
      },
      actions: {
        ...mapActions({
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
