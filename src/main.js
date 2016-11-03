import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

// import App from './App'
import App from './App'
import Feed from './components/Feed'
import Following from './components/Following'
import Profile from './components/Profile'
import Auth from './components/Auth'

Vue.http.options.root = 'http://garden-api.herokuapp.com'

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
      component: Auth
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

const authRequest = (user, pass, cb) => {
  console.log('auth request')
}

const auth = {
  login (user, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (store.state.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    authRequest(user, pass, (res) => {
      if (res.authenticated) {
        store.commit('setToken', res.token)
        store.commit('setUser', user)
        store.commit('setIsAuthenticated', true)
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        store.commit('setIsAuthenticated', false)
        this.onChange(false)
      }
    })
  },

  getToken () {
    return store.state.token
  },

  logout (cb) {
    store.commit('setToken', '')
    store.commit('setUser', {})
    store.commit('setIsAuthenticated', false)
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn () {
    return !!store.state.token
  },

  onChange () {}
}

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    token: '',
    user: {},
    isAuthenticated: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setIsAuthenticated (state, toggle) {
      state.isAuthenticated = toggle
    },
    setUser (state, user) {
      state.user = user
    }
  }
})

new Vue({
  router,
  store,
  auth
}).$mount('#app')
