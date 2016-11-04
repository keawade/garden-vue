<template>
  <div class='ui container top-padder'>
    <div v-if='users.length === 0' class='ui segment'>
      <div class='loader-height'>
        <div class='ui active text loader'>Loading</div>
      </div><br /><br /><br />
    </div>
    <div v-else class='ui four cards'>
      <div v-for='user in users' class='card'>
        <div class='content'>
          <div class='header'>{{ user.username }}</div>
          <div class='meta'>{{ user.username }}</div>
          <div class='description'>{{ user.username }}</div>
        </div>
        <div class='extra content'>
          <button class='fluid ui basic secondary button' v-on:click='unfollow(user)' v-if='$store.state.user.following.indexOf(user._id) > -1'>Unfollow</button>
          <button class='fluid ui basic primary button' v-on:click='follow(user)' v-else>Follow</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        users: []
      }
    },
    created () {
      this.$http.get('user', {
        token: this.$store.state.token
      }).then((res) => {
        this.users = res.body.map((user) => {
          return user._id === this.$store.state.user._id ? undefined : user
        }).filter((user) => {
          return user !== undefined
        })
        console.info('users', this.users)
      }, (res) => {
        console.log('[Users] failed to get users', res)
      })
    },
    methods: {
      follow (user) {
        console.log('[UserItem] following', user.username)
        this.$http.post(`user/${user.username}/follow`, {
          token: this.$store.state.token
        }).then((res) => {
          this.$store.commit('setUser', res.body)
        }, (res) => {
          console.error('[UserItem] failed to follow user', res.body)
        })
      },
      unfollow (user) {
        console.log('[UserItem] unfollowing', user.username)
        this.$http.put(`user/${user.username}/unfollow`, {
          token: this.$store.state.token
        }).then((res) => {
          this.$store.commit('setUser', res.body)
        }, (res) => {
          console.error('[UserItem] failed to unfollow user', res.body)
        })
      }
    }
  }
</script>
<style scoped>
	.top-padder {
		padding-top: 14px;
	}
</style>