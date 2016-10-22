import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

import App from './App'

Vue.http.options.root = 'http://localhost:3000'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
