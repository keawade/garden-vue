<template>
	<div class='ui container top-padder'>
		<div v-for='post in feed' class='ui segment'>
      <div>{{ post.author_id.username }}</div>
      <div>{{ post.content }}</div>
      <div>{{ post.createdAt }}</div>
		</div>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        feed: []
      }
    },
    created () {
      this.$http.get('feed', {
        headers: {
          token: this.$store.state.token
        }
      }).then((res) => {
        console.info('thing', res.body)
        this.feed = res.body
      }, (res) => {
        console.error('[Feed] failed to get feed', res.body)
      })
    }
  }
</script>
<style scoped>

</style>