<template>
  <div class="hello">
    Parent counter : {{ getCounter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <button @click="asyncIncrement({ by: 50, duration: 500})">Increment</button>
    <button @click="axiosTest({ user: 'lee'})">AxiosTest</button>
  </div>
</template>

<script>
import Child from '@/components/Child'
import axios from 'axios'
import { mapGetters,mapMutations,mapActions } from 'vuex' 

  export default {
    name: 'VuexTest',
    data() {
      return {
        user: {
          email: 'asddqe111@gmail.com',
          name: 'chuljin',
          address: 'jib',
          company: 'watchteck'
        }
      }
    },
    components: {
      'child' : Child
    },
    computed: {
      ...mapGetters({
        getCounter : 'getCounter'
      }),
      doubleCounter() {
        return this.$store.getters.doubleCounter
      }
    },
    methods: {
      ...mapMutations({
        addCounter: 'addCounter',
        subCounter: 'subCounter'
      }),
      ...mapActions([
        'asyncIncrement',
        'asyncDecrement',
        'axiosTest',
      ]),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

</style>