<template>
  <div class='column'>
    <div class='ui segment'>
      <div v-if='loading' class='ui active inverted dimmer'>
        <div class='ui loader'></div>
      </div>
      <h1 class='header'>Register</h1>
      <div class='ui error message' v-if='error'>
        {{ error }}
      </div>
      <form @submit.prevent='register' class='ui form'>
        <div class='field'>
          <label>User Name</label>
          <input v-model='username' placeholder='User Name'>
        </div>
        <div class='field'>
          <label>Password</label>
          <input v-model='password' placeholder='Password' type='password'>
        </div>
        <div class='field'>
          <label>Confirm Password</label>
          <input v-model='confirmpass' placeholder='Password' type='password'>
        </div>
        <button @click='resetError' class='ui button' type='submit'>Register</button>
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
        confirmpass: '',
        error: '',
        loading: false
      }
    },
    methods: {
      resetError () {
        this.error = ''
      },
      register () {
        if (this.password !== this.confirmpass) {
          this.error = 'Passwords do not match.'
          return
        }
        this.loading = true
        this.$http.post('auth/signup', {
          username: this.username,
          password: this.password
        }).then((res) => {
          console.log('res', res)
          this.$store.commit('setToken', res.body.token)
          this.$store.commit('setIsAuthenticated', true)
          this.$store.commit('setUser', { username: res.body.username })
          this.loading = false
        }, (res) => {
          console.log('res', res)
          this.error = res.body.error
          this.loading = false
        })
      }
    }
  }
</script>
<style scoped>


</style>
