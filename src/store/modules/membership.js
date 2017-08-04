const state = {
  isMembershipActive: false,
  member_info: {
    email: {
      value: '',
      validation: false
    },
    email_confirm: {
      value: '',
      is_ok: false
    },
    password: '',
    name: '',
    nickname: ''
  },
  member_input_focus: {
    email: false,
    email_confirm: false,
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
  getMembershipEmailConfirmValue (state) {
    return state.member_info.email_confirm.value
  },
  getMembershipEmailConfirmIsOk (state) {
    return state.member_info.email_confirm.is_ok
  },
  getMembershipPassword (state) {
    return state.member_info.password
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
    console.log('membershipFocus: ', payload)
    if (state.isMembershipActive) {
      if (payload.target.getAttribute('class') === 'membership') {
        state.isMembershipActive = false
      } else if (payload.target.getAttribute('id') === 'membership-email') {
        toggleLoginInputFocus(state.member_input_focus, 'email')
      } else if (payload.target.getAttribute('id') === 'membership-pwd') {
        toggleLoginInputFocus(state.member_input_focus, 'password')
      } else if (payload.target.getAttribute('id') === 'membership-emailConfirm') {
        toggleLoginInputFocus(state.member_input_focus, 'email_confirm')
      } else if (payload.target.getAttribute('id') === 'membership-name') {
        toggleLoginInputFocus(state.member_input_focus, 'name')
      } else if (payload.target.getAttribute('id') === 'membership-nickname') {
        toggleLoginInputFocus(state.member_input_focus, 'nickname')
      } else {
        toggleLoginInputFocus(state.member_input_focus, '')
      }
    }
  },
  setMembershipEmail (state, payload) {
    state.member_info.email.value = payload
  },
  setMembershipEmailValidation (state, payload) {
    state.member_info.email.validation = payload
  },
  setMembershipEmailConfirmValue (state, payload) {
    state.member_info.email_confirm.value = payload
  },
  setMembershipEmailConfirmIsOk (state, payload) {
    state.member_info.email_confirm.is_ok = payload
  },
  setMembershipPassword (state, payload) {
    state.member_info.password = payload
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
  setMembershipEmail ({commit}, payload) {
    commit('setMembershipEmail', payload)
  },
  setMembershipEmailValidation ({commit}, payload) {
    commit('setMembershipEmailValidation', payload)
  },
  setMembershipEmailConfirmValue ({commit}, payload) {
    commit('setMembershipEmailConfirmValue', payload)
  },
  setMembershipEmailConfirmIsOk ({commit}, payload) {
    commit('setMembershipEmailConfirmIsOk', payload)
  },
  setMembershipPassword ({commit}, payload) {
    commit('setMembershipPassword', payload)
  },
  setMembershipName ({commit}, payload) {
    commit('setMembershipName', payload)
  },
  setMembershipNickName ({commit}, payload) {
    commit('setMembershipNickName', payload)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
