<template>
  <div id="app">
    <AppHeader />
    <div class='thing'>
      <router-view class='ui grid container'></router-view>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
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
    AppHeader,
    Hello
  }
}
</script>

<style>
  .thing {
    padding-top: 40px;
  }
</style>
