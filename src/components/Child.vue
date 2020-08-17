<template>
  <div>
    <hr>
    Child counter : {{ $store.getters.getCounter }} <br>
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>

  export default {
    computed: {
      doubleCounter() {
        return this.$store.getters.doubleCounter
      }
    },
  }
</script>
