<template>
  <div class="container">
    <Header></Header>
    <slot class="contents" name="contents"></slot>
    <slot></slot>
  </div>
</template>

<script>
  import Header from '@/layouts/Header'

  export default {
      components: {
        Header,
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
