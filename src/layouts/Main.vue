<template>
  <div class="container">
    <Header></Header>
    <slot class="contents" name="contents"></slot>
    <Bottom></Bottom>
    <slot></slot>
  </div>
</template>

<script>
  import Header from '@/layouts/Header'
  import Bottom from '@/layouts/Bottom'

  export default {
      components: {
        Header,Bottom,
    }
  }
</script>

<style>
  .container {
    max-width: 700px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }
</style>
