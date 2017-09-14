<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <login></login> -->
    <Register></Register>
    <!-- <stories></stories> -->
    <!-- <famous></famous> -->
  </div>
</template>

<script>
// import Login from './components/Login.vue'
import Register from './components/Register'
// import Stories from './components/Stories'
// import Famous from './components/Famous'

export default {
  name: 'app',
  components: {
    // Login,
    Register
    // Stories,
    // Famous
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}
#app a {
  color: #42b983;
  text-decoration: none;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
