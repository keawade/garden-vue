<template>
	<div class='ui four column stackable grid container top-padder'>
    <div v-for='user in users' class='column'>
		  <user-item :user='user' />
    </div>
	</div>
</template>
<script>
  import UserItem from './UserItem'
  export default {
    data () {
      return {
        users: []
      }
    },
    created () {
      this.$http.get('user')
        .then((res) => {
          this.users = res.body.map((user) => {
            return user._id === this.$store.state.user._id ? undefined : user
          }).filter((user) => {
            return user !== undefined
          })
        }, (res) => {
          console.log('[Users] failed to get users', res)
        })
    },
    components: {
      UserItem
    }
  }
</script>
<style scoped>
	.top-padder {
		padding-top: 14px;
	}
</style>