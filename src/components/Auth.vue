<template>
  <div class='ui two column grid container top-padding'>
    <Login />
    <Register />
  </div>
</template>
<script>
import Login from './Login'
import Register from './Register'
export default {
  components: {
    Login,
    Register
  }
}
</script>
<style scoped>
  .top-padding {
    padding-top: 14px;
  }

</style>
