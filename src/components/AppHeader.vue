<template>
  <div class='app-header'>
    <div class='ui secondary pointing menu'>
      <div class='ui container'>
        <router-link to='/' class='item'>Feed</router-link>
        <router-link to='/following' class='item'>Following</router-link>
        <router-link to='/users' class='item'>Find Users</router-link>
        <div class='right menu'>
          <router-link to='/profile' class='item'>Profile</router-link>
          <router-link v-if='!isAuthenticated' to='/logout' class='item'>Logout</router-link>
          <router-link v-if='isAuthenticated' to='/login' class='item'>Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isAuthenticated: this.$store.isAuthenticated
      }
    }
  }
</script>
<style scoped>


</style>
