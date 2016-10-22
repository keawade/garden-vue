<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click='getThing'>Get Thing</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Garden View'
    }
  },
  methods: {
    getThing () {
      this.$http.get('http://localhost:3000/api')
        .then((res) => {
          console.info('got thing!', res.body.msg)
        }, (error) => {
          console.error('failed to get resource', error)
          return 'error'
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
