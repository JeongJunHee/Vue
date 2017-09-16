<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Welcome to Routing!</h1>
    <router-link :to="{ name: 'hello' }" exact>Home</router-link>
    <router-link :to="{ name: 'login' }">Login</router-link>
    <router-link :to="{ name: 'stories.all' }">Stories</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
  /* color: #2c3e50; */
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  /* color: #42b983; */
  /* text-decoration: none; */
}

.logo {
  width: 100px;
  height: 100px
}

.router-link-active {
  color: #42b983
}

</style>
