<template>
  <div class='column'>
    <div class='ui segment'>
      <h1 class='header'>Register</h1>
      <div class='ui error message' v-if='error'>
        Bad login information.
      </div>
      <form @submit.prevent='login' class='ui form'>
        <div class='field'>
          <label>User Name</label>
          <input v-model='email' placeholder='User Name'>
        </div>
        <div class='field'>
          <label>Password</label>
          <input v-model='pass' placeholder='Password' type='password'>
        </div>
        <div class='field'>
          <label>Confirm Password</label>
          <input v-model='pass' placeholder='Password' type='password'>
        </div>
        <button class='ui button' type='submit'>Register</button>
      </form>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>


</style>
