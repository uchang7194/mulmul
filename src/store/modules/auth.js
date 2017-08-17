const state = {
  token: ''
}
const getters = {
  getToken (state) {
    return state.token
  }
}
const mutations = {
  SET_TOKEN (state, payload) {
    state.token = payload
  }
}
const actions = {
  setToken ({commit}, payload) {
    payload = payload || ''
    console.log(payload)
    commit('SET_TOKEN', payload)
  }
}
export const auth = {
  state,
  getters,
  mutations,
  actions
}
