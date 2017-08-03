const state = {
  is_btn_clicked: false,
  password: '',
  email: ''
}

const getters = {
  getBtnClicked (state) {
    return state.is_btn_clicked
  },
  getPassword (state) {
    return state.password
  },
  getEmail (state) {
    return state.email
  }
}

const mutations = {
  // 로그인 창 활성화 유무
  changeBtnClicked (state) {
    state.is_btn_clicked = !state.is_btn_clicked
  },
  setPassword (state, payload) {
    state.password = payload
  },
  setEmail (state, payload) {
    state.email = payload
  }
}

const actions = {
  isChangedLoginModalState ({commit}) {
    commit('changeBtnClicked')
  },
  setPassword ({commit}, payload) {
    commit('setPassword', payload)
  },
  setEmail ({commit}, payload) {
    commit('setEmail', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
