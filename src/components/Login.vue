<template>
  <div class='column'>
    <div class='ui segment'>
      <h1 class='header'>Login</h1>
      <div class='ui error message' v-if='$route.query.redirect'>
        You need to login first.
      </div>
      <div class='ui error message' v-if='error'>
        Bad login information.
      </div>
      <form @submit.prevent='login' class='ui form'>
        <div class='field'>
          <label>User Name</label>
          <input v-model='username' placeholder='User Name'>
        </div>
        <div class='field'>
          <label>Password</label>
          <input v-model='password' placeholder='Password' type='password'>
        </div>
        <button class='ui button' type='submit'>Login</button>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        username: '',
        password: '',
        error: ''
      }
    },
    methods: {
      resetError () {
        this.error = ''
      },
      login () {
        this.$http.post('auth/login', {
          username: this.username,
          password: this.password
        }).then((res) => {
          console.log('res', res)
          this.$store.commit('setToken', res.body.token)
          this.$store.commit('setIsAuthenticated', true)
          this.$http.get(`user/${res.body.username}`, {token: this.$store.state.token})
            .then((userRes) => {
              console.log('userRes', userRes)
              this.$store.commit('setUser', userRes.body)
            }, (userRes) => {
              console.error('[Login] failed to get user', userRes)
              this.$store.commit('setToken', '')
              this.$store.commit('setIsAuthenticated', false)
            })
          console.log('success!')
        }, (res) => {
          console.log('res', res)
          this.error = res.body.error
        })
      }
    }
  }
</script>
<style scoped>


</style>
