<template>
  <div v-if="seen" class="header">
    {{ name }}
    <button @click="logout">로그아웃</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex' 

  export default {
    data() {
      return {
        name: '',
        seen: false,
      }
    },
    created() {

      let self = this

      if (self.getUser != undefined && self.getUser != '')
      {
        self.name = self.getUser
        self.seen= true
      }
      
    },
    computed: {
      ...mapGetters({
        getUser: 'getuser',
      }),
    },
    methods: {
      logout() {
        let self = this

        self.seen = false

        self.$store.dispatch('asyncSetUser', '')
        self.$router.push("/login")
      }
    },
    actions: {
      ...mapActions({
        asyncSetUser: 'asyncSetUser'
      }),
    },
  }
</script>

<style>
</style>
