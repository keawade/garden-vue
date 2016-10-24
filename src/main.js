import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

// import App from './App'
import App from './App'
import Foo from './components/Foo'
import Bar from './components/Bar'
import Home from './components/Home'

Vue.http.options.root = 'http://localhost:3000'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    component: App,
    children: [{
      path: '',
      component: Home
    }, {
      path: 'foo',
      component: Foo
    }, {
      path: 'bar',
      component: Bar
    }]
  }, {
    path: '*',
    redirect: '/'
  }]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: `<router-view class="view"></router-view>`
})
