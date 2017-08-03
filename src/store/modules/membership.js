const state = {
  isActive: false
}
const getters = {
  getIsActiveMembership (state) {
    return state.isActive
  }
}
const mutations = {
  changeIsActive (state) {
    state.isActive = !state.isActive
  }
}
const actions = {
  changedIsActive ({commit}) {
    commit('changeIsActive')
  }
}
export default {}