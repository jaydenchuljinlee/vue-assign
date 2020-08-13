<template>
  <div class="hello">
    <contents>
      <h1 slot="message">{{ msg }}</h1>
      <h2 slot="title">Axios Test</h2>

      <h3 slot="nameview">{{ selectedName }}</h3>
      <user-component slot="userContents" :bind="users" @changedUser="changedUser"></user-component>

      <address-info v-if="selected" slot="addr" v-bind:address="user.address"></address-info>
      <company-info v-if="selected" slot="company" v-bind:company="user.company"></company-info>

    </contents>
  </div>
</template>

<script>
  import axios from 'axios'
  import Contents from '@/components/Contents'//슬롯으로 템플릿을 만든 컴포넌트입니다
  import UserComponent from '@/components/UserComponent'//회원 정보 템플릿 컴포넌트입니다
  import AddressInfo from '@/components/AddressInfo'//상세 주소 정보 템플릿 컴포넌트입니다
  import CompanyInfo from '@/components/CompanyInfo'//회사 정보 템플릿 컴포넌트입니다

export default {
    name: 'AxiosTest',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        user: {},//선택한 단일 회원 정보
        users: [],//회원 리스트
        selectedName: '선택된 이름 없음',//선택된 회원의 이름
        selected:false,//선택된 정보인지를 판단하는 변수
      }
    },
    components: {
      'contents': Contents,
      'user-component': UserComponent,
      'address-info': AddressInfo,
      'company-info': CompanyInfo,
    },
    created() {// $el이 생성되고, data와 methods 등이 만들어진 다음. -> 돔이 생성되기 이전
      axios.get('/api/users/')
        .then((res) => {

          let self = this

          self.users = res.data
        })
        .catch((ex) => {
          console.log(ex)

        })
    },
    methods: {
      changedUser(u) {
        
        let self = this

        self.user = u
        console.log(self.user)
        self.selectedName = self.user.username
        self.selected = true
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
