<template>
  <div class='app-header'>
    <div class='ui secondary pointing menu'>
      <div class='ui container'>
        <router-link to='/' class='item'>Feed</router-link>
        <router-link to='/following' class='item'>Following</router-link>
        <router-link to='/users' class='item'>Find Users</router-link>
        <div class='right menu'>
          <router-link to='/profile' class='item'>Profile</router-link>
          <router-link v-if='$store.state.isAuthenticated' to='/logout' class='item'>Logout</router-link>
          <router-link v-else to='/login' class='item'>Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>


</style>
