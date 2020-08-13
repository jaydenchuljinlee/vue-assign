<template>
  <ul>
    <li v-for="user in users" :class="{'clicked' : bindClass(user)}" @click="selectedUser(user)">
      {{ user.name }}
    </li>
    <slot v-if="isSelected" name="userSlot" :userInfo="user"></slot>
  </ul>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'UserComponent',
    data() {
      return {
        user: {},
        users: [],
        isSelected: false,
        currnetUser: {},
       }
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
      selectedUser (u) {

        let self = this
        
        self.user = u
        self.isSelected = true
        self.currnetUser = u

        self.$emit('isSelected')
      },
      bindClass(u) {

        let self = this


        if (self.currnetUser == undefined) return false

        if (u.name == self.currnetUser.name) {
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
