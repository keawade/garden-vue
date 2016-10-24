import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import auth from './auth'

Vue.use(VueResource)
Vue.use(VueRouter)

// import App from './App'
import App from './App'
import Feed from './components/Feed'
import Following from './components/Following'
import Profile from './components/Profile'
import Login from './components/Login'

Vue.http.options.root = 'http://localhost:3000'

const requireAuth = (to, from, next) => {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    component: App,
    children: [{
      path: '',
      component: Feed,
      beforeEnter: requireAuth
    }, {
      path: 'following',
      component: Following,
      beforeEnter: requireAuth
    }, {
      path: 'profile',
      component: Profile,
      beforeEnter: requireAuth
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/login')
      }
    }]
  }, {
    path: '*',
    redirect: '/'
  }]
})

const data = {}

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  data,
  template: `<router-view class="view"></router-view>`
})
