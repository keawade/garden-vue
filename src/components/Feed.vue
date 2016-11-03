<template>
	<div class='ui container top-padder'>
		<div class='ui segment'>
			<img class='ui large image' src='/static/short-paragraph.png' />
		</div>
		<div class='ui segment'>
			<img class='ui large image' src='/static/short-paragraph.png' />
		</div>
		<div class='ui segment'>
			<img class='ui large image' src='/static/short-paragraph.png' />
		</div>
		<div class='ui segment'>
			<img class='ui large image' src='/static/short-paragraph.png' />
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
    // this.$http.get('feed', {
    //   token: this.$store.state.token
    // }).then((res) => {
    //   this.feed = res.body
    // }, (res) => {
    //   console.error('[Feed] failed to get feed', res.body)
    // })
    }
  }
</script>
<style scoped>

</style>