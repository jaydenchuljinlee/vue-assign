<template>
  <div class="container">
    <Header></Header>
    <slot class="contents" name="contents"></slot>
    <slot></slot>
  </div>
</template>

<script>
  import Header from '@/layouts/Header'

  export default
  {
      components:
      {
        Header,
      }
  }
</script>

<style>
  .contents {
    background-color: #d0ddef94
  }
</style>
