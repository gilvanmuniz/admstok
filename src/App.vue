<template>
  <div id="nav"> 
    <MenuLogin />  
    <Menu />
    <hr />
  </div>
  <router-view />
</template>
<script>
import Menu from "./components/Menu";
import MenuLogin from "./components/MenuLogin";
export default {
  components: {
    Menu,
    MenuLogin
  },
};
</script>
<style lang="scss">
@import 'scss/colors.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  .login {
    width: 100%;
    background-color: $light;
    .buttons {
      display: flex;
      justify-content:flex-end;
      align-items: center;
      margin-right: 4%;
      .link{
        text-decoration: none;
      }
    }
  }
}
</style>
