<template>
  <div>
    <div class='ui container'>
      <h1 class='ui header'>Login</h1>
    </div>
    <br />
    <div class='ui container'>
      <div class='ui error message' v-if='$route.query.redirect'>
        You need to login first.
      </div>
    </div>
    <br />
    <div class='ui container'>
      <div class='ui segment'>
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
          <p v-if='error' class='error'>Bad login information</p>
        </form>
      </div>
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

<style>
.error {
  color: red;
}
</style>