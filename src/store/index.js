import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    is_btn_clicked: false,
    login_input_focus: {
      email: false,
      pwd: false
    }
  },
  mutations: {
    changeBtnClicked (state) {
      state.is_btn_clicked = !state.is_btn_clicked
    },
    changeLoginFocus (state, payload) {
      let login = state.login_input_focus
      if (state.is_btn_clicked) {
        if (payload.el.getAttribute('id') === 'pwd') {
          login.email = false
          login.pwd = true
        } else if (payload.el.getAttribute('id') === 'email') {
          login.email = true
          login.pwd = false
        } else {
          login.email = false
          login.pwd = false
        }

        if (payload.el.getAttribute('class') === 'login') {
          state.is_btn_clicked = false
        }
      } else {
        login.email = false
        login.pwd = false
      }
    }
  },
  actions: {

  },
  getters: {
    getBtnClicked (state) {
      // state.is_btn_clicked = !state.is_btn_clicked
      return state.is_btn_clicked
    },
    getLoginInputFocus (state) {
      return state.login_input_focus
    }
  }
})
