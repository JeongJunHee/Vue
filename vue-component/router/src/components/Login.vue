<template>
	<div id="login">
		<h2>Sign in</h2>
		<input class="form-control" type="email" placeholder="Email address">
		<input class="form-control" type="password" placeholder="Password">
		<button class="btn btn-primary">Sign in</button>
	</div>
</template>

<script>
export default {
  created () {
    console.log('login')
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