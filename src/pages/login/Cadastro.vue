<template>
  <div class="main">
       <div class="login">
      <h2>Coloque seus dados</h2>
      <label class="mt-2" for="email">Email:</label>
      <input v-model="username" type="email" />
      <label class="mt-2" for="username">Username:</label>
      <input v-model="username" type="text" />
      <label class="mt-3" for="password">Password:</label>
      <input v-model="password" type="password" />
      <button v-on:click="enviarDadosLogin" class="btn btn-primary mt-3">
        Cadastrar
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../scss/colors.scss";
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  .login {
    display: flex;
    flex-direction: column;
    width: 40%;
    background-color: $light;
    padding: 4%;
    border-radius: 7%;
    input {
      border: none;
      border-bottom: solid 0.5px $secondary;
      background-color: $light;
    }
    input:focus {
      outline: none;
    }
  }
}
</style>