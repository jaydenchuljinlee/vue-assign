<template>
  <div class="hello">
    <contents>
      <h1 slot="message">{{ msg }}</h1>
      <h2 slot="title">Axios Test</h2>

      <h3 slot="nameview">{{ selectedName }}</h3>
      <user-component slot="userContents" @isSelected="isSelected">
        <template v-if="selected" #userSlot="data">
          <div class="details">
            <address-info :addr="data.userInfo.address"></address-info>
            <company-info :company="data.userInfo.company"></company-info>
          </div>
        </template>
      </user-component>
    </contents>
  </div>
</template>

<script>
  import Contents from '@/components/Contents'//슬롯으로 템플릿을 만든 컴포넌트입니다
  import UserComponent from '@/components/UserComponent'//회원 정보 템플릿 컴포넌트입니다
  import AddressInfo from '@/components/AddressInfo'
  import CompanyInfo from '@/components/CompanyInfo'

  export default {
    name: 'AxiosTest',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        user: {},//선택한 단일 회원 정보

        selectedName: '선택된 이름 없음',//선택된 회원의 이름
        selected: false,//선택된 정보인지를 판단하는 변수
      }
    },
    components: {
      'contents': Contents,
      'user-component': UserComponent,
      'address-info': AddressInfo,
      'company-info': CompanyInfo,
    },
    methods: {
      isSelected() {

        let self = this

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
