<template>
  <div class="hello">
    
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'AxiosTest',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        selectedName: '선택된 이름 없음',//선택된 회원의 이름
        selected: false,//선택된 정보인지를 판단하는 변수
      }
    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

</style>
