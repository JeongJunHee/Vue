<template>
    <div id="register">
      <h2>Register Form</h2>
      <input placeholder="First Name" class="form-control">
      <input placeholder="Last Name" class="form-control">
      <input placeholder="Email address" class="form-control">
      <input placeholder="Pick a password" class="form-control">
      <input placeholder="Confirm password" class="form-control">
      <button class="btn btn-primary">Sign up</button>
      <famous :stories="stories"></famous>
    </div>
</template>

<script>
import Famous from './Famous.vue'

export default {
  components: {
    Famous
  },
  props: ['stories'],
  created () {
    console.log('register')
  }
}
</script>

<style scoped>
input {
  margin-top: 10px;
}

button {
  margin-top: 10px;
  width: 100%;
}

</style>