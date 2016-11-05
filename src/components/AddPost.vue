<template>
  <form @submit.prevent='post' class='ui action input fluid'>
    <div v-if='loading' class='ui active inverted dimmer'>
      <div class='ui loader'></div>
    </div>
    <input v-model='content' type='text' placeholder='Add a post...' />
    <button type='submit' class='ui button'>Post</button>
  </form>
</template>
<script>
  export default {
    data () {
      return {
        content: '',
        loading: false
      }
    },
    methods: {
      post () {
        this.loading = true
        this.$http.post('post', {
          contentType: 'webremix',
          content: this.content,
          token: this.$store.state.token
        }).then((res) => {
          this.loading = false
          this.content = ''
        }, (res) => {
          console.error('[AddPost] failed to add post')
        })
      }
    }
  }
</script>
<style scoped>
	.top-padder {
		padding-top: 14px;
	}
  .input {
    font-size: 1.2rem;
    resize: none;
  }
</style>