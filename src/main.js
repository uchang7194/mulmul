// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router/'
import {store} from './store/'
import axios from 'axios'
import './scss/stylesheet.scss'

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
/* eslint-disable no-new */
// console.log(loginStore)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
