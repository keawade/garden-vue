<template>
  <div class='ui segment'>
    <h1 class='header'>{{ user.username }}</h1>
    <button v-if='!isFollowing' @click='follow'>Follow</button>
    <button v-if='isFollowing' @click='unfollow'>Unfollow</button>
  </div>
</template>
<script>
  export default {
    props: ['user'],
    name: 'user-item',
    data () {
      return {
        isFollowing: this.$store.state.user.following.indexOf(this.user._id) > -1
      }
    },
    methods: {
      follow () {
        console.log('[UserItem] following', this.user.username)
        this.$http.post(`user/${this.user._id}/follow`, {
          token: this.$store.state.token
        }).then((res) => {
          this.$store.commit('setUser', res.body)
        }, (res) => {
          console.error('[UserItem] failed to unfollow user', res.body)
        })
      },
      unfollow () {
        console.log('[UserItem] unfollowing', this.user.username)
        this.$http.put(`user/${this.user._id}/unfollow`, {
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

</style>
