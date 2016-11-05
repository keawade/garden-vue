<template>
	<div class='ui container top-padder'>
    <div v-if='feed.length === 0' class='ui segment'>
      <div class='loader-height'>
        <div class='ui active text loader'>Loading</div>
      </div><br /><br /><br />
    </div>
		<div v-else>
      <AddPost />
      <div v-for='post in feed' class='ui segment'>
        <div>{{ post.author_id.username }}</div>
        <div>{{ post.content }}</div>
        <div>{{ post.createdAt }}</div>
      </div>
    </div>
	</div>
</template>
<script>
  import AddPost from './AddPost'
  export default {
    data () {
      return {
        feed: []
      }
    },
    components: {
      AddPost
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