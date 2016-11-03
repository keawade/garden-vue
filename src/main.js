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
import Users from './components/Users'
import Profile from './components/Profile'
import Auth from './components/Auth'

Vue.http.options.root = 'http://garden-api.herokuapp.com/api'

const requireAuth = (to, from, next) => {
  if (!store.state.isAuthenticated) {
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
      path: 'users',
      component: Users,
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
        store.commit('setToken', '')
        store.commit('setIsAuthenticated', false)
        store.commit('setUser', {})
        next('/login')
      }
    }]
  }, {
    path: '*',
    redirect: '/'
  }]
})

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
  store
}).$mount('#app')
