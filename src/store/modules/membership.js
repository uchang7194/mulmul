const state = {
  isMembershipActive: false,
  member_info: {
    email: {
      value: '',
      validation: false
    },
    password_confirm: {
      value: '',
      is_ok: false
    },
    password: {
      value: '',
      validation: false
    },
    name: '',
    nickname: ''
  },
  member_input_focus: {
    email: false,
    password_confirm: false,
    password: false,
    name: false,
    nickname: false
  }
}
const getters = {
  getMembershipActive (state) {
    return state.isMembershipActive
  },
  getMembershipEmail (state) {
    return state.member_info.email.value
  },
  getMembershipEmailValidation (state) {
    return state.member_info.email.validation
  },
  getMembershipPasswordConfirmValue (state) {
    return state.member_info.password_confirm.value
  },
  getMembershipPasswordConfirmIsOk (state) {
    return state.member_info.password_confirm.is_ok
  },
  getMembershipPassword (state) {
    return state.member_info.password.value
  },
  getMembershipPasswordValidation (state) {
    return state.member_info.password.validation
  },
  getMembershipName (state) {
    return state.member_info.name
  },
  getMembershipNickName (state) {
    return state.member_info.nickname
  },
  getMembetshipFocuses (state) {
    return state.member_input_focus
  }
}
function toggleLoginInputFocus (obj, key) {
  // console.log('obj:', obj)
  // console.log('key:', key)
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (prop === key) {
        obj[prop] = true
      } else {
        obj[prop] = false
      }
    }
  }
}
const mutations = {
  changeisMembershipActive (state) {
    state.isMembershipActive = !state.isMembershipActive
  },
  changeMembershipFocus (state, payload) {
    console.log('payload: ', payload)
    if (state.isMembershipActive) {
      let target = (payload.nodeType === 1) ? target = payload : target = payload.target
      if (target.getAttribute('class') === 'membership') {
        state.isMembershipActive = false
      } else if (target.getAttribute('id') === 'membership-email') {
        toggleLoginInputFocus(state.member_input_focus, 'email')
      } else if (target.getAttribute('id') === 'membership-pwd') {
        toggleLoginInputFocus(state.member_input_focus, 'password')
      } else if (target.getAttribute('id') === 'membership-passwordConfirm') {
        toggleLoginInputFocus(state.member_input_focus, 'password_confirm')
      } else if (target.getAttribute('id') === 'membership-name') {
        toggleLoginInputFocus(state.member_input_focus, 'name')
      } else if (target.getAttribute('id') === 'membership-nickname') {
        toggleLoginInputFocus(state.member_input_focus, 'nickname')
      } else {
        toggleLoginInputFocus(state.member_input_focus, '')
      }
    }
  },
  setMemberValidationFocus (state, payload) {
    toggleLoginInputFocus(state.member_input_focus, payload)
  },
  setMembershipEmail (state, payload) {
    state.member_info.email.value = payload
  },
  setMembershipEmailValidation (state, payload) {
    state.member_info.email.validation = payload
  },
  setMembershipPasswordConfirmValue (state, payload) {
    state.member_info.password_confirm.value = payload
  },
  setMembershipPasswordConfirmIsOk (state, payload) {
    state.member_info.password_confirm.is_ok = payload
  },
  setMembershipPassword (state, payload) {
    state.member_info.password.value = payload
  },
  setMembershipPasswordValidation (state, payload) {
    state.member_info.password.validation = payload
  },
  setMembershipName (state, payload) {
    state.member_info.name = payload
  },
  setMembershipNickName (state, payload) {
    state.member_info.nickname = payload
  }
}
const actions = {
  isChangedMembershipActive ({commit}) {
    commit('changeisMembershipActive')
  },
  isChangedMembershipFocus ({commit}, payload) {
    commit('changeMembershipFocus', payload)
  },
  setMemberValidationFocus ({commit}, payload) {
    commit('setMemberValidationFocus', payload)
  },
  setMembershipEmail ({commit}, payload) {
    commit('setMembershipEmail', payload)
  },
  setMembershipEmailValidation ({commit}, payload) {
    commit('setMembershipEmailValidation', payload)
  },
  setMembershipPasswordConfirmValue ({commit}, payload) {
    commit('setMembershipPasswordConfirmValue', payload)
  },
  setMembershipPasswordConfirmIsOk ({commit}, payload) {
    commit('setMembershipPasswordConfirmIsOk', payload)
  },
  setMembershipPassword ({commit}, payload) {
    commit('setMembershipPassword', payload)
  },
  setMembershipPasswordValidation ({commit}, payload) {
    commit('setMembershipPasswordValidation', payload)
  },
  setMembershipName ({commit}, payload) {
    commit('setMembershipName', payload)
  },
  setMembershipNickName ({commit}, payload) {
    commit('setMembershipNickName', payload)
  }
}
export const membership = {
  state,
  getters,
  mutations,
  actions
}
