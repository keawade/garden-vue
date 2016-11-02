import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

// import App from './App'
import App from './App'
import Feed from './components/Feed'
import Following from './components/Following'
import Profile from './components/Profile'
import Login from './components/Login'

Vue.http.options.root = 'http://garden-api.herokuapp.com'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    component: App,
    children: [{
      path: '',
      component: Feed
    }, {
      path: 'following',
      component: Following
    }, {
      path: 'profile',
      component: Profile
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/logout',
      beforeEnter (to, from, next) {
        next('/login')
      }
    }]
  }, {
    path: '*',
    redirect: '/'
  }]
})

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
