<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ testResponse }}</h2>
    <button v-on:click='getThing'>Get Thing</button>
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
  methods: {
    getThing () {
      console.log(this.$http.options.root)
      this.$http.get('api')
        .then((res) => {
          console.info('got thing!', res.body.msg)
          this.testResponse = res.body.msg
        }, (error) => {
          console.error('failed to get resource', error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
