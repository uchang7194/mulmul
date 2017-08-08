import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login.js'
import membership from './modules/membership.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    login,
    membership
  }
})
