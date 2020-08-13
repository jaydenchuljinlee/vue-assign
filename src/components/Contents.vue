<template>
  <div>
    <div class="top-view">
      <slot name="message"></slot>
      <slot name="title"></slot>
    </div>
    <div class="contents">
      <slot name="nameview"></slot>
      <slot name="userContents"></slot>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Contents'
}
</script>

