<template>
  <div class="main">
       <div class="login">
      <div class="buttons">
        <router-link to="/login" v-if="!token">
          <button class="btn btn-primary btn-sm mr-3">Login</button>
        </router-link>        
          <button v-if="token" @click="resetLogin" class="btn btn-primary btn-sm">Logout</button>       
        <router-link class="link ml-3 mt-2" to="#">
          <h6>Cadastro</h6>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
     data(){
    return {
       session: false
    }
  },
  computed: {
   
    username() {
      return localStorage.username;
    },
    token() {
      // return localStorage.token;
      return this.$store.state.user.user.token
    },
  },
  mounted(){
    if(localStorage.token){
      this.session = true
    }
  },
    methods:{
        resetLogin(){
            localStorage.removeItem('token')
            this.$router.go()
        }
    }
}
</script>

<style>

</style>