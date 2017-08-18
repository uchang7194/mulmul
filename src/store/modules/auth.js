const state = {
  is_token: false
}
const getters = {
  getToken (state) {
    return state.is_token
  }
}
const mutations = {
  SET_TOKEN (state, payload) {
    if (payload) {
      window.localStorage.setItem('token', payload)
      state.is_token = true
    } else {
      window.localStorage.removeItem('token')
      state.is_token = false
    }
  },
  HAS_TOKEN (state, payload) {
    state.is_token = payload
  }
}
const actions = {
  setToken ({commit}, payload) {
    console.log(payload)
    commit('SET_TOKEN', payload)
  },
  hasToken ({commit}, payload) {
    commit('HAS_TOKEN', payload)
  }
}
export const auth = {
  state,
  getters,
  mutations,
  actions
}
