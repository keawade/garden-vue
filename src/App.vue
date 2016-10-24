<template>
  <div id="app">
    <AppHeader />
    <div class='thing'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello, this is your computer speaking.',
      testResponse: ''
    }
  },
  components: {
    AppHeader
  }
}
</script>

<style>
  .thing {
    padding-top: 20px;
  }
</style>
