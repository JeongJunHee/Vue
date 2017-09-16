<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Welcome to dynamic components!</h1>
    <ul class="nav nav-tabs">
      <li v-for="page in pages" :class="isActivePage(page) ? 'active' : ' ' ">
        <a @click="setPage(page)">{{ page | capitalize }}</a>
      </li>
    </ul>
    <component :is="activePage"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import Login from './components/Login.vue'
import Register from './components/Register'
import Stories from './components/Stories'
// import Famous from './components/Famous'

Vue.filter('capitalize', function (value) {
  return value.charAt(0).toUpperCase() + value.substr(1)
})

export default {
  name: 'app',
  components: {
    Login,
    Register,
    Stories
    // Famous
  },
  data () {
    return {
      pages: [
        'stories',
        'register',
        'login'
      ],
      activePage: 'stories'
    }
  },
  methods: {
    setPage (newPage) {
      this.activePage = newPage
    },
    isActivePage (page) {
      return this.activePage === page
    }
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