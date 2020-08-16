<template>
  <div class="hello">
    Parent counter : {{ $store.state.counter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <child v-bind:num="counter"></child>
  </div>
</template>

<script>
import Child from '@/components/Child'

  export default {
    name: 'VuexTest',
    data() {
      return {
        counter: 0,
      }
    },
    components: {
      'child' : Child
    },
    methods: {
      addCounter() {
        this.$store.state.counter++
      },
      subCounter() {
        this.$store.state.counter--
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

</style>