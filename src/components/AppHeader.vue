<template>
  <div class='app-header'>
    <div class='ui secondary pointing menu'>
      <router-link to='/' class='item'>Feed</router-link>
      <router-link to='/following' class='item'>Following</router-link>
      <div class='right menu'>
        <router-link to='/profile' class='item'>Profile</router-link>
        <router-link to='/logout' class='item'>Logout</router-link>
        <router-link to='/login' class='item'>Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>

    <Router>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='accounts' component={Accounts}/>
        <Route path='statements' component={Statements}/>
      </Route>
    </Router>
