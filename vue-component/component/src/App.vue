<template>
  <div id="app">
    <img src="./assets/logo.png">
    <component :is="currentComponent"></component>
    <p>This is very useful...</p>
    <a href="#" @click="currentComponent = 'hello'">Show Hello</a>
    <a href="#" @click="currentComponent = 'greet'">Show Greet</a>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Greet from './components/Greet'

export default {
  // name: 'app',
  components: {
    Hello,
    Greet
  },
  data () {
    return {
      currentComponent: 'hello'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
