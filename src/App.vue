<template>
	<div id="app">
		<AppHeader />
		<router-view></router-view>
	</div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader
  },
  computed: {
    token () {
      return this.$store.state.token // try disabling
    },
    isAuthenticated () {
      return this.$store.state.token // try disabling
    }
  },
  watch: {
    token () {
      if (this.isAuthenticated) {
        this.$router.push('/')
      }
    }
  },
  methods: {
  }
}
</script>

<style>
	.top-padder {
		padding: 14px 0;
	}
</style>