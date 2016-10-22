<template>
  <div id="app">
    <AppHeader />
    <Hello />
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
</style>
