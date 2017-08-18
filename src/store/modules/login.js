const state = {
  isLoginActived: false,
  password: '',
  email: ''
}

const getters = {
  getLoginActived (state) {
    return state.isLoginActived
  },
  getLoginPassword (state) {
    return state.password
  },
  getLoginEmail (state) {
    return state.email
  }
}

const mutations = {
  initLoginData (state) {
    state.email = ''
    state.password = ''
  },
  // 로그인 창 활성화 유무
  changeIsLoginActived (state) {
    state.isLoginActived = !state.isLoginActived
    console.log(state.isLoginActived)
  },
  changeLoginFocus (state, payload) {
    state.isLoginActived && (payload.target.getAttribute('class') === 'login') ? state.isLoginActived = false : state.isLoginActived = state.isLoginActived
  },
  setLoginDataAll (state, payload) {
    state.email = payload.email
    state.password = payload.password
  },
  setLoginPassword (state, payload) {
    state.password = payload
  },
  setLoginEmail (state, payload) {
    state.email = payload
  }
}

const actions = {
  initLoginData ({commit}) {
    commit('initLoginData')
  },
  isChangedLoginActive ({commit}) {
    commit('changeIsLoginActived')
  },
  isChangedLoginFocus ({commit}, payload) {
    commit('changeLoginFocus', payload)
  },
  setLoginDataAll ({commit}, payload) {
    commit('setLoginDataAll', payload)
  },
  setLoginPassword ({commit}, payload) {
    commit('setLoginPassword', payload)
  },
  setLoginEmail ({commit}, payload) {
    commit('setLoginEmail', payload)
  }
}

export const login = {
  state,
  getters,
  mutations,
  actions
}
