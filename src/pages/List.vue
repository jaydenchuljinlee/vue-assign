<template>
  <main-layout>
    <table>
      <tbody>
        <tr v-for="diary in getDiary">
          <td>{{ diary.title }}</td>
        </tr>
      </tbody>
    </table>
  </main-layout>
</template>

<script>
  import MainLayout from '@/layouts/Main'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        diary: '',
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
