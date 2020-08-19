<template>
  <main-layout>
    <div class="contents">
      <div>
        <button @click="pageMove('w')">쓰기</button>
        <input v-model="searchVal" @keyup.enter="search" />
        <button @click="reset">초기화</button>
      </div>
      <table>
        <thead>
        <th>날짜</th>
        <th>제목</th>
        <th>작성자</th>
        </thead>
        <tbody>
          <tr v-if="diary.isShow" v-for="(diary,index) in getDiary">
            <td>{{ diary.createdDate }}</td>
            <td><a v-on:click="pageMove(index)">{{ diary.title }}</a></td>
            <td>{{ diary.name }}</td>
            <td><button @click="$store.dispatch('asyncDeleteDiary',index)">x</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '@/layouts/Main'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        searchVal: '',
        copy: [],
        pageNum: 0,
      }
    },
    mounted() {

      let self = this

      self.copy = self.getDiary
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
        asyncDeleteDiary: 'asyncDeleteDiary',
      }),
    },
    methods: {
      pageMove(param) {

        let self = this

        if (typeof (param) == Number) {

          self.pageNum = param

          self.$router.push("/diary/" + self.pageNum)
        } else {

          if (param == 'w') {

            self.$router.push("/diary/write")
          }
        }
        
      },
      search() {

        let self = this

        const word = self.searchVal

        self.copy.forEach((e) => {

          if (e.title.indexOf(word) == -1) {
            e.isShow = false
          } else {
            e.isShow = true
          }
        })

      },
      reset() {

        let self = this

        self.searchVal=''
      }
    }
  }
</script>

<style>
  
</style>
