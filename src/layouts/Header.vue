<template>
  <div v-if="seen" class="mx-5 px-5 my-3">
    <div class="mx-4 px-5 text-right">
      <img class="float-left" src="@/assets/logo.png" width="50" height="30">
      <span>로그인 정보 :</span>
      <i class="text-info">{{ name }}</i>
      <button class="btn btn-secondary btn-sm" @click="logout">로그아웃</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex' 

  export default
  {
    data()
    {
      return {
        name: '',
        seen: false,
      }
    },
    created()
    {

      let self = this

      if (self.getUser != undefined && self.getUser != '')
      {
        self.name = self.getUser
        self.seen= true
      }
      
    },
    computed:
    {
      ...mapGetters({
        getUser: 'getuser',
      }),
    },
    methods:
    {
      logout()
      {
        let self = this

        self.seen = false

        self.$store.dispatch('asyncSetUser', '')
        self.$router.push("/login")
      }
    },
    actions:
    {
      ...mapActions({
        asyncSetUser: 'asyncSetUser'
      }),
    },
  }
</script>

<style>
</style>
