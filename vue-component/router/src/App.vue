<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Welcome to Routing!</h1>
    <router-link :to="{ name: 'hello' }" active-class="my-active-class" exact>Home</router-link>
    <router-link :to="{ name: 'login' }">Login</router-link>
    <router-link :to="{ name: 'stories.all' }">Stories</router-link>
    <transition enter-active-class="animated rollIn">
      <router-view></router-view>
    </transition>
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
}
#app {
  /* color: #2c3e50; */
  margin-top: 50px;
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

/*
.fade-enter {
  opacity: 0
}

.fade-enter-active {
  transition: opacity 1s
}

.fade-enter-to {
  opacity: 0.8
}
*/
</style>
