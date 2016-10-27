<template>
	<div class='ui container top-padding'>
		<div class='ui segment'>
				<div class='ui error message' v-if='$route.query.redirect'>
					You need to login first.
				</div>
				<div class='ui error message' v-if='error'>
					Bad login information.
				</div>
			<form @submit.prevent='login' class='ui form'>
				<div class='field'>
					<label>User Name</label>
					<input v-model='email' placeholder='email'>
				</div>
				<div class='field'>
					<label>Password</label>
					<input v-model='pass' placeholder='password' type='password'> (hint: password1)<br>
				</div>
				<button class='ui button' type='submit'>Login</button>
			</form>
		</div>
	</div>
</template>

<script>
import auth from '../auth'
export default {
  data () {
    return {
      email: 'joe@example.com',
      pass: '',
      error: false
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      })
    }
  }
}
</script>

<style scoped>
  .top-padding {
    padding-top: 14px;
  }
</style>