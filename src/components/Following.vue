<template>
	<div class='ui container top-padder'>
		<div class='ui four cards'>
			<router-link v-for='(follower, index) in followers' class='card' to='"/users/" + follower.username'>
        <div class='content'>
          <div class='header'>{{ follower.username }}</div>
          <div class='description'>{{ content[index].content }}</div>
        </div>
        <div class='extra content'>
          <button class='fluid ui basic secondary button' v-on:click='unfollow(user)'>Unfollow</button>
        </div>
      </router-link>
		</div>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        followers: [],
        content: []
      }
    },
    created () {
      this.$http.get(`user/${this.$store.state.user.username}/following`).then((followersRes) => {
        this.followers = followersRes.body
        const posts = followersRes.body.map((follower) => {
          return this.$http.get(`user/${follower.username}/posts`)
        })
        Promise.all(posts).then((postsData) => {
          postsData.map((usersPosts) => {
            this.content.push(usersPosts.body[0])
          })
        }).catch((error) => {
          console.error('[Following] failed to resolve followers posts promises', error)
        })
      }).catch((error) => {
        console.error('[Following] failed to resolve followers promises', error)
      })
    },
    methods: {

    }
  }
</script>
<style scoped>
	.top-padder {
		padding-top: 14px;
	}
</style>