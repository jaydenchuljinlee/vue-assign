<template>
  <div>
    <ul>
      <li v-for="user in $store.state.users" :class="{'clicked' : bindClass(user)}" @click="selectedUser(user)">
        {{ user.name }}
      </li>
    </ul>
    <div class="details" v-if="isSelected">
      <address-info></address-info>
      <company-info></company-info>
    </div>
  </div>
</template>
<script>
  import AddressInfo from '@/components/AddressInfo'
  import CompanyInfo from '@/components/CompanyInfo'

  export default {
    name: 'UserComponent',
    data() {
      return {
        isSelected: false,
       }
    },
    components: {
      'address-info': AddressInfo,
      'company-info': CompanyInfo,
    },
    methods: {
      selectedUser (u) {
        
        let self = this
        
        self.$store.state.user = u
        self.isSelected = true
      },
      bindClass(u) {

        let self = this

        if (self.$store.state.user == undefined) return false

        if (u.name == self.$store.state.user.name) {
          return true
        } else {
          return false
        }
      }
    }
}
</script>

<style scoped>

  ul {
    list-style-type: none;
    padding: 0;
    position: relative;
  }

  li {
    display: inline-block;
    margin: 0 10px 5px 5px;
    border: 1px solid black;
    width: 200px;
    height: 100px;
    line-height: 100px;
    vertical-align: middle;
    background-color: white;
    color: black;
  }

  .clicked {
    background-color: #00bcd4de;
    color:white;
  }
</style>
