<template>
  <a :bind:href="link">
     <slot></slot>
  </a>
</template>

<script>
  export default {
    data() {
      return {
        link:'',
      }
    },
    props: [
      'index',
    ],
    mounted() {
      
      let self = this
      
      self.link = "/detail?index="+self.index
      
    },
}
</script>

<style scoped>
  .active {
    color: cornflowerblue
  }
</style>
