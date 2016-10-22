<template>
  <div class="hello">
    <h2 class='ui header'>{{ msg }}</h2>
    <h3 class='ui header'>{{ testResponse }}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Garden View',
      testResponse: ''
    }
  },
  mounted () {
    this.$http.get('api')
      .then((res) => {
        console.info('got thing!', res.body.msg)
        this.testResponse = res.body.msg
      }, (error) => {
        console.error('failed to get resource', error)
      })
  }
}
</script>

<style scoped>
</style>
