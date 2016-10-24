<template>
  <div class="app-header">
    <div class='ui secondary pointing menu'>
      <router-link to="/" class='item'>Home</router-link>
      <router-link to="/foo" class='item'>Messages</router-link>
      <router-link to="/bar" class='item'>Friends</router-link>
      <div class="right menu">
        <a class="ui item">
          Logout
        </a>
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
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="accounts" component={Accounts}/>
        <Route path="statements" component={Statements}/>
      </Route>
    </Router>
