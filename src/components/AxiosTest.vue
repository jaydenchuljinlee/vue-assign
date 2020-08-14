<template>
  <div class="hello">
    <contents>
      <h1 slot="message">{{ msg }}</h1>
      <h2 slot="title">Axios Test</h2>

      <h3 slot="nameview">{{ selectedName }}</h3>
      <user-component slot="userContents"></user-component>
    </contents>
  </div>
</template>

<script>
  import Contents from '@/components/Contents'//슬롯으로 템플릿을 만든 컴포넌트입니다
  import UserComponent from '@/components/UserComponent'//회원 정보 템플릿 컴포넌트입니다
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
    created() {// $el이 생성되고, data와 methods 등이 만들어진 다음. -> 돔이 생성되기 이전
      axios.get('/api/users/')
        .then((res) => {

          let self = this
           
          self.$store.state.users = res.data
        })
        .catch((ex) => {
          console.log(ex)

        })
    },
    components: {
      'contents': Contents,
      'user-component': UserComponent,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

</style>
